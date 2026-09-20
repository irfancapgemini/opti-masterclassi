import Link from "next/link";

type CmsSettings = {
  _Content?: {
    items?: Array<Record<string, unknown>>;
  };
};

export function Header({ settings }: { settings?: CmsSettings }) {
  const config = settings?._Content?.items?.[0] as Record<string, unknown> | undefined;
  const header = ((config?.GlobalHeaderSettings as Array<Record<string, unknown>> | undefined) ?? [])[0] as Record<string, unknown> | undefined;
  const navItems = (header?.navItems as Array<Record<string, unknown>> | undefined) ?? [
    { title: "Services", url: "/services" },
    { title: "Find Doctors", url: "/doctors" },
    { title: "Locations", url: "/locations" },
    { title: "Telehealth", url: "/telehealth" },
    { title: "About Us", url: "/about" },
    { title: "Contact", url: "/contact" },
  ];
  const siteName = String(
    (((config?.GlobalSiteSettings as Array<Record<string, unknown>> | undefined) ?? [])[0] as Record<string, unknown> | undefined)?.siteName ?? "DoctorCare")
  ;

  return (
    <header className="medicare-header">
      <div className="medicare-nav">
        <Link href="/" className="medicare-brand">
          <span className="medicare-brand-mark">✚</span>
          <span><strong>Medicare</strong><small>Your Health, Our Priority</small></span>
        </Link>

        <nav className="medicare-links">
          {navItems.map((item, index) => (
            <Link key={`${item?.title ?? "nav"}-${index}`} href={String(item?.url ?? "/")}>
              {String(item?.title ?? "Menu")}
            </Link>
          ))}
        </nav>

        <div className="medicare-actions">
          <span className="medicare-search" aria-hidden="true">⌕</span>
          <Link href={String(header?.loginUrl ?? "/login")} className="medicare-login">
            {String(header?.loginText ?? "Login")}
          </Link>
          <Link href={String(header?.ctaUrl ?? "/appointment")} className="medicare-header-cta">
            {String(header?.ctaText ?? "Book Appointment")}
          </Link>
        </div>
      </div>
    </header>
  );
}
