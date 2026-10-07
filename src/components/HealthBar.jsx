export default function HealthBar({ value, label = 'INTEGRIDAD' }) {
  const color = value > 60 ? 'var(--olive-500)' : value > 30 ? 'var(--amber-500)' : 'var(--red-500)';
  return (
    <div role="meter" aria-label={label} aria-valuenow={value} aria-valuemin={0} aria-valuemax={100}>
      <div className="bar-label"><span>{label}</span><span>{value}%</span></div>
      <div className="meter"><div className="meter__fill" style={{ width: `${value}%`, '--bar': color }} /></div>
    </div>
  );
}
