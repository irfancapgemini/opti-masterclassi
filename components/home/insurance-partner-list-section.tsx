import Image from "next/image";

type InsurancePartnerListSectionProps = {
  data: Record<string, unknown>;
};

export function InsurancePartnerListSection({ data }: InsurancePartnerListSectionProps) {
  const items = (data?.items as Array<Record<string, unknown>> | undefined) ?? [];
  const rawTitle = String(data?.title ?? "");
  const title = rawTitle.includes("InsurancePartner") ? "Our Insurance Partners" : rawTitle;

  return (
    <section className="medicare-insurance">
      <h2>{title || "Our Insurance Partners"}</h2>
      <div className="medicare-insurance-grid">
        {items.map((item, index) => {
          const logo = (item?.logo as Record<string, unknown> | undefined) ?? {};
          const logoUrl = typeof logo.url === "string" ? logo.url : "";

          return (
            <div key={`${item?.name ?? "partner"}-${index}`} className="medicare-insurance-logo">
              {logoUrl ? (
                <Image src={logoUrl} alt={String(logo.alternativeText ?? item?.name ?? "Partner logo")} width={220} height={100} className="max-h-20 w-auto object-contain" />
              ) : (
                <span className="text-lg font-semibold text-slate-700">{String(item?.name ?? "Partner")}</span>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
