type TestimonialListSectionProps = {
  data: Record<string, unknown>;
};

export function TestimonialListSection({ data }: TestimonialListSectionProps) {
  const items = (data?.items as Array<Record<string, unknown>> | undefined) ?? [];

  return (
    <section className="medicare-section">
      <div className="medicare-section-heading"><h2>{String(data?.title ?? "What Our Patients Say")}</h2><a href="/reviews">View all reviews →</a></div>
      <div className="medicare-testimonial-grid">
        {items.map((item, index) => (
          <blockquote key={`${item?.name ?? "testimonial"}-${index}`} className="medicare-testimonial-card">
            <div className="medicare-stars">★★★★★</div><p>“{String(item?.quote ?? "") }”</p>
            <footer>
              <div className="medicare-avatar">
                {String(item?.name ?? "P").slice(0, 1).toUpperCase()}
              </div>
              <div>
                <div className="font-semibold text-slate-900">{String(item?.name ?? "Patient")}</div>
                <div className="text-sm text-slate-500">{String(item?.title ?? "Patient")}</div>
              </div>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
