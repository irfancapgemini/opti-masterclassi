import Image from "next/image";

type DoctorListSectionProps = {
  data: Record<string, unknown>;
};

export function DoctorListSection({ data }: DoctorListSectionProps) {
  const items = (data?.items as Array<Record<string, unknown>> | undefined) ?? [];

  return (
    <section className="medicare-section">
      <div className="medicare-section-heading"><h2>{String(data?.title ?? "Meet Our Doctors")}</h2><a href="/doctors">View all doctors →</a></div>
      <div className="medicare-doctor-grid">
        {items.map((item, index) => {
          const image = (item?.image as Record<string, unknown> | undefined) ?? {};
          const imageUrl = typeof image.url === "string" ? image.url : "";

          return (
            <article key={`${item?.name ?? "doctor"}-${index}`} className="medicare-doctor-card">
              {imageUrl ? (
                <Image src={imageUrl} alt={String(image.alternativeText ?? item?.name ?? "Doctor")} width={320} height={320} className="medicare-doctor-image" />
              ) : (
                <div className="medicare-doctor-image medicare-doctor-fallback">{String(item?.name ?? "D").slice(0, 1).toUpperCase()}</div>
              )}
              <div className="medicare-doctor-copy">
                <h3>{String(item?.name ?? "Doctor Name")}</h3>
                <p>{String(item?.role ?? "Specialist")}</p>
                {item?.description ? <small>{String(item.description)}</small> : null}
                <button type="button">Book Now</button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
