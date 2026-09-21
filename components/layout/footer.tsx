import Image from "next/image";
import Link from "next/link";

type CmsSettings = {
  _Content?: {
    items?: Array<Record<string, unknown>>;
  };
};

function resolveImageUrl(value: unknown): string {
  if (!value) return "";

  if (typeof value === "string") return value;

  const record = value as Record<string, unknown>;
  if (typeof record.url === "string") return record.url;
  if (typeof record.default === "string") return record.default;
  if (typeof record.href === "string") return record.href;
  if (typeof record.src === "string") return record.src;
  if (typeof record.internal === "string") return record.internal;

  if (record.image && typeof record.image === "object") {
    return resolveImageUrl(record.image);
  }

  return "";
}

export function Footer({ settings }: { settings?: CmsSettings }) {
  const config = settings?._Content?.items?.[0] as Record<string, unknown> | undefined;
  const footer = ((config?.GlobalFooterSettings as Array<Record<string, unknown>> | undefined) ?? [])[0] as Record<string, unknown> | undefined;
  const site = ((config?.GlobalSiteSettings as Array<Record<string, unknown>> | undefined) ?? [])[0] as Record<string, unknown> | undefined;
  const columns = (footer?.columns as Array<Record<string, unknown>> | undefined) ?? [];
  const socialLinks = (footer?.socialLinks as Array<Record<string, unknown>> | undefined) ?? [];
  const siteName = String(site?.siteName ?? "DoctorCare");
  const logo = (footer?.logo as Record<string, string> | undefined) ?? (site?.logo as Record<string, string> | undefined) ?? {
    url: "",
    alternativeText: "",
  };
  const logoUrl = resolveImageUrl(logo ?? footer?.logo ?? site?.logo ?? {});

  return (
    <footer className="medicare-footer">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            {logoUrl ? (
              <Image
                src={logoUrl}
                alt={String(logo?.alternativeText ?? siteName ?? "Brand logo")}
                width={120}
                height={28}
                className="h-8 w-auto object-contain"
              />
            ) : (
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-sm font-bold text-white">
                {siteName.slice(0, 1).toUpperCase()}
              </div>
            )}
            <span className="text-xl font-semibold text-slate-900">{siteName}</span>
          </div>
          <p className="max-w-sm text-sm text-slate-600">{String(footer?.description ?? "Patient-first healthcare solutions for every stage of life.")}</p>
        </div>

        {columns.map((column, index) => (
          <div key={`${column?.title ?? "footer-column"}-${index}`}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.08em] text-slate-700">
              {String(column?.title ?? "Explore")}
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              {((column?.links as Array<Record<string, unknown>> | undefined) ?? []).map((link, linkIndex) => (
                <li key={`${link?.title ?? "footer-link"}-${linkIndex}`}>
                  <Link href={String(link?.url ?? "/")} className="hover:text-slate-900">
                    {String(link?.title ?? "Link")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-4 py-5 text-sm text-slate-500 sm:px-6 lg:flex-row lg:px-8">
          <p>{String(footer?.copyright ?? "© 2026 DoctorCare. All rights reserved.")}</p>
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <Link key={`${link?.label ?? "social"}-${index}`} href={String(link?.url ?? "/")} className="hover:text-slate-900">
                {String(link?.label ?? "Social")}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
