export type StatItem = { label: string; value: string };

export function StatList({ items }: { items: StatItem[] }) {
  return (
    <dl className="tbfm-panel">
    {items.map((stat) => (
          <div className="tbfm-cell tbfm-cell--center tbf-gap-xs2" key={stat.label}>
          <dt>{stat.value}</dt>
          <dd>{stat.label}</dd>
          </div>
    ))}
    </dl>
  );
}
