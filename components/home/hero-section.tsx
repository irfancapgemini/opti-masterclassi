import Image from "next/image";

type HeroSectionProps = {
  data: Record<string, unknown>;
};

export function HeroSection({ data }: HeroSectionProps) {
  const title = String(data?.title ?? "Your Health, Our Priority");
  const subtitle = String(data?.subtitle ?? "Compassionate care for every stage of life.");
  const description = String(data?.description ?? "");
  const primaryCtaLabel = String(data?.primaryCtaLabel ?? "Book Appointment");
  const secondaryCtaLabel = String(data?.secondaryCtaLabel ?? "Find a Doctor");
  const image = (data?.image as Record<string, unknown> | undefined) ?? {};
  const imageUrl = typeof image.url === "string" ? image.url : "";

  return (
    <section className="medicare-hero">
      <div className="medicare-hero-inner">
        <div>
          <p className="medicare-eyebrow">{subtitle}</p>
          <h1>{title.replace(/\s+Priority$/, "")} <em>Priority</em></h1>
          {description ? <p className="medicare-hero-copy">{description}</p> : null}
          <div className="medicare-hero-actions">
            <a href={String(data?.primaryCtaUrl ?? "/appointment")} className="medicare-primary-button">
              <span>▣</span>
              {primaryCtaLabel}
            </a>
            <a href={String(data?.secondaryCtaUrl ?? "/doctors")} className="medicare-secondary-button">
              <span>♙</span>
              {secondaryCtaLabel}
            </a>
          </div>
        </div>
        <div className="medicare-hero-image-wrap">
          {imageUrl ? (
            <Image src={imageUrl} alt={String(image.alternativeText ?? title)} width={900} height={640} className="medicare-hero-image" />
          ) : (
            <div className="medicare-hero-placeholder">
              Health Banner
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
