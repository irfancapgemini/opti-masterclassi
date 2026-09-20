import Link from "next/link";

type CmsSettings = {
  _Content?: {
    items?: Array<Record<string, unknown>>;
  };
};

export function Footer({ settings }: { settings?: CmsSettings }) {
  const config = settings?._Content?.items?.[0] as Record<string, unknown> | undefined;
  const footer = ((config?.GlobalFooterSettings as Array<Record<string, unknown>> | undefined) ?? [])[0] as Record<string, unknown> | undefined;
  const site = ((config?.GlobalSiteSettings as Array<Record<string, unknown>> | undefined) ?? [])[0] as Record<string, unknown> | undefined;
  const columns = (footer?.columns as Array<Record<string, unknown>> | undefined) ?? [];
  const socialLinks = (footer?.socialLinks as Array<Record<string, unknown>> | undefined) ?? [];
  const siteName = String(site?.siteName ?? "DoctorCare");

  return (
    <footer className="medicare-footer">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-sm font-bold text-white">
              {siteName.slice(0, 1).toUpperCase()}
            </div>
            <span className="text-xl font-semibold text-white">{siteName}</span>
          </div>
          <p className="max-w-sm text-sm text-slate-300">{String(footer?.description ?? "Patient-first healthcare solutions for every stage of life.")}</p>
        </div>

        {columns.map((column, index) => (
          <div key={`${column?.title ?? "footer-column"}-${index}`}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.08em] text-slate-300">
              {String(column?.title ?? "Explore")}
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              {((column?.links as Array<Record<string, unknown>> | undefined) ?? []).map((link, linkIndex) => (
                <li key={`${link?.title ?? "footer-link"}-${linkIndex}`}>
                  <Link href={String(link?.url ?? "/")} className="hover:text-white">
                    {String(link?.title ?? "Link")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-4 py-5 text-sm text-slate-400 sm:px-6 lg:flex-row lg:px-8">
          <p>{String(footer?.copyright ?? "© 2026 DoctorCare. All rights reserved.")}</p>
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <Link key={`${link?.label ?? "social"}-${index}`} href={String(link?.url ?? "/")} className="hover:text-white">
                {String(link?.label ?? "Social")}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
