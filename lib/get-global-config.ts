import { fetchOptimizely } from "./optimizely/fetch";

const globalConfigGuid =
  process.env.OPTIMIZELY_GLOBAL_CONFIG_ID ?? "b52fa355a42742abae04990fd195101a";

function normalizeNavItems(value: unknown): Array<Record<string, unknown>> {
  if (Array.isArray(value)) {
    return value.filter(Boolean).map((item) => (typeof item === "object" ? (item as Record<string, unknown>) : {}));
  }

  if (value && typeof value === "object") {
    return [value as Record<string, unknown>];
  }

  return [];
}

function normalizeHeaderSettings(value: Record<string, unknown> = {}): Record<string, unknown> {
  const navItems = normalizeNavItems(
    value.navItems ?? value.navigationItems ?? value.navigation ?? value.items,
  );

  return {
    logo: value.logo ?? value.siteLogo ?? null,
    navItems,
    loginText: value.loginText ?? value.loginLabel ?? "Login",
    loginUrl: value.loginUrl ?? value.loginLink ?? "/login",
    ctaText: value.ctaText ?? value.primaryCtaText ?? value.buttonText ?? "Book Appointment",
    ctaUrl: value.ctaUrl ?? value.primaryCtaUrl ?? value.buttonUrl ?? "/appointment",
  };
}

function normalizeFooterSettings(value: Record<string, unknown> = {}): Record<string, unknown> {
  return {
    logo: value.logo ?? value.siteLogo ?? null,
    description: value.description ?? value.tagline ?? value.footerText ?? "Patient-first healthcare solutions for every stage of life.",
    columns: Array.isArray(value.columns) ? value.columns : [],
    socialLinks: Array.isArray(value.socialLinks) ? value.socialLinks : Array.isArray(value.socialLinksList) ? value.socialLinksList : [],
    copyright: value.copyright ?? value.copyrightText ?? "© 2026 DoctorCare. All rights reserved.",
  };
}

function normalizeSiteSettings(value: Record<string, unknown> = {}): Record<string, unknown> {
  return {
    siteName: value.siteName ?? value.name ?? value.companyName ?? "DoctorCare",
    tagline: value.tagline ?? value.description ?? "",
    emergencyPhone: value.emergencyPhone ?? value.phone ?? "",
    emergencyText: value.emergencyText ?? value.emergencyMessage ?? "",
  };
}

export async function getGlobalConfiguration() {
  const query = `
    query GetGlobalConfiguration($guid: String!) {
      GlobalSettings(where: { _metadata: { key: { eq: $guid } } }) {
        item {
          __typename
          _json
        }
      }
      LayoutSettings(where: { _metadata: { key: { eq: $guid } } }) {
        item {
          __typename
          _json
        }
      }
    }
  `;

  const result = await fetchOptimizely<{
    GlobalSettings?: { item?: { _json?: Record<string, unknown> } | null };
    LayoutSettings?: { item?: { _json?: Record<string, unknown> } | null };
  }>(query, { guid: globalConfigGuid });

  const globalSettingsJson = result.GlobalSettings?.item?._json ?? {};
  const layoutSettingsJson = result.LayoutSettings?.item?._json ?? {};
  const rawConfig = {
    ...layoutSettingsJson,
    ...globalSettingsJson,
    GlobalHeaderSettings: layoutSettingsJson.GlobalHeaderSettings ?? globalSettingsJson.GlobalHeaderSettings ?? [normalizeHeaderSettings(layoutSettingsJson)],
    GlobalFooterSettings: layoutSettingsJson.GlobalFooterSettings ?? globalSettingsJson.GlobalFooterSettings ?? [normalizeFooterSettings(layoutSettingsJson)],
    GlobalSiteSettings: layoutSettingsJson.GlobalSiteSettings ?? globalSettingsJson.GlobalSiteSettings ?? [normalizeSiteSettings(layoutSettingsJson)],
  };

  return {
    _Content: {
      items: [rawConfig],
    },
  };
}
