import Image from "next/image";

type TelehealthSectionProps = {
  data: Record<string, unknown>;
};

export function TelehealthSection({ data }: TelehealthSectionProps) {
  const benefits = (data?.benefits as Array<Record<string, unknown>> | undefined) ?? [];
  const image = (data?.image as Record<string, unknown> | undefined) ?? {};
  const imageUrl = typeof image.url === "string" ? image.url : "";
  const rawTitle = String(data?.title ?? "");
  const title = rawTitle.includes("BlockDOC") ? "Consult a Doctor from the Comfort of Your Home" : rawTitle;
  const rawDescription = String(data?.description ?? "");
  const description = rawDescription.includes("BlockDOC") ? "Connect with our specialists via secure video consultation." : rawDescription;

  return (
    <section className="medicare-telehealth">
      <div className="medicare-telehealth-copy">
        <div>
          <p className="medicare-eyebrow">Telehealth</p>
          <h2>{title || "Consult a Doctor from the Comfort of Your Home"}</h2>
          <p>{description}</p>
          <div className="medicare-benefits">
            {benefits.map((benefit, index) => (
              <div key={`${benefit?.title ?? "benefit"}-${index}`}>
                <span>✓</span><div><h3>{String(benefit?.title ?? "Benefit")}</h3>
                {benefit?.description ? <p>{String(benefit.description)}</p> : null}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="medicare-telehealth-image-wrap">
          {imageUrl ? (
            <Image src={imageUrl} alt={String(image.alternativeText ?? "Telehealth consultation")} width={720} height={420} className="medicare-telehealth-image" />
          ) : (
            <div className="medicare-telehealth-placeholder">
              Virtual Care
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
