import { BadgeCheck, Building2, Heart, Hospital, User, Users } from "lucide-react";

type StatisticsSectionProps = {
  data: Record<string, unknown>;
};

const iconMap = {
  heart: Heart,
  user: User,
  users: Users,
  hospital: Hospital,
  success: BadgeCheck,
  building: Building2,
  building2: Building2,
} as const;

export function StatisticsSection({ data }: StatisticsSectionProps) {
  const stats = (data?.statistics as Array<Record<string, unknown>> | undefined) ?? [];

  return (
    <section className="medicare-stats">
      <div className="medicare-stats-grid">
        {stats.map((item, index) => {
          const iconName = String(item?.icon ?? "heart").toLowerCase();
          const Icon = iconMap[iconName as keyof typeof iconMap] ?? Heart;

          return (
            <div key={`${item?.label ?? "stat"}-${index}`} className="medicare-stat">
              <div className="medicare-stat-icon">
                <Icon size={22} strokeWidth={2.2} />
              </div>
              <div><strong>{String(item?.value ?? "0")}</strong><span>{String(item?.label ?? "Patients")}</span></div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
