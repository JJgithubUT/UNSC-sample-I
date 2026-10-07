export default function Radar({ blips = [[30, 40], [68, 62], [55, 20]] }) {
  return (
    <div className="radar" role="img" aria-label="Radar de movimiento">
      <div className="radar__sweep" />
      {blips.map(([x, y], i) => (
        <span key={i} className="radar__blip" style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${i * 0.7}s` }} />
      ))}
    </div>
  );
}
