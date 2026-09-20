type StatisticsSectionProps = {
  data: Record<string, unknown>;
};

export function StatisticsSection({ data }: StatisticsSectionProps) {
  const stats = (data?.statistics as Array<Record<string, unknown>> | undefined) ?? [];

  return (
    <section className="medicare-stats">
      <div className="medicare-stats-grid">
        {stats.map((item, index) => (
          <div key={`${item?.label ?? "stat"}-${index}`} className="medicare-stat">
            <div className="medicare-stat-icon">♧</div>
            <div><strong>{String(item?.value ?? "0")}</strong><span>{String(item?.label ?? "Patients")}</span></div>
          </div>
        ))}
      </div>
    </section>
  );
}
