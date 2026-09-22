type SpecialtyListSectionProps = {
  data: Record<string, unknown>;
};

export function SpecialtyListSection({ data }: SpecialtyListSectionProps) {
  const items = (data?.items as Array<Record<string, unknown>> | undefined) ?? [];

  return (
    <section className="medicare-section medicare-specialties">
      <div className="medicare-section-heading">
        <h2>{String(data?.title ?? "Our Specialties")}</h2>
        <a href="/specialties">View all specialties →</a>
      </div>
      <div className="medicare-specialty-grid">
        {items.map((item, index) => (
          <article key={`${item?.name ?? "specialty"}-${index}`} className="medicare-specialty-card">
            <div className="medicare-specialty-icon">
              {String(item?.name ?? "+").slice(0, 1).toUpperCase()}
            </div>
            <h3>{String(item?.name ?? "Specialty")}</h3>
            {item?.title ? <p>{String(item.title)}</p> : null}
            {item?.description ? <small>{String(item.description)}</small> : null}
            <a href="/specialties">Learn more →</a>
          </article>
        ))}
      </div>
    </section>
  );
}
