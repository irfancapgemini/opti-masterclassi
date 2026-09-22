type EmergencyBannerProps = {
  data: Record<string, unknown>;
};

export function EmergencyBanner({ data }: EmergencyBannerProps) {
  const phoneNumber = String(data?.phoneNumber ?? "911");
  const rawTitle = String(data?.title ?? "");
  const title = rawTitle.includes("EmergencyBanner") ? "Medical Emergency?" : rawTitle || "Medical Emergency?";
  const rawDescription = String(data?.description ?? "");
  const description = rawDescription.includes("EmergencyBanner") ? "We are available 24/7" : rawDescription || "We are available 24/7";

  return (
    <section className="medicare-emergency">
      <div>
        <div>
          <p>Medical Emergency?</p><h2>{title}</h2><small>{description}</small>
        </div>
        <div className="medicare-emergency-contact"><span>☎</span><strong>{phoneNumber}</strong>
          <a href={String(data?.ctaUrl ?? "tel:" + phoneNumber)}>
            {typeof data?.ctaLabel === "string" ? data.ctaLabel : "Call Now"}
          </a>
        </div>
      </div>
    </section>
  );
}
