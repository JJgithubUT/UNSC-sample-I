import { useState } from 'react';
import { Button, Panel, StatusChip, AlertCard, ShieldBar, HealthBar, CircularProgress, Radar } from './components';

const SWATCHES = [
  ['metal-950', '#07090B'], ['metal-800', '#141A20'], ['metal-600', '#2B353F'], ['metal-300', '#8A9AA7'], ['metal-100', '#DCE3E8'],
  ['cyan-500', '#00E0FF'], ['cyan-600', '#00AFC9'], ['olive-500', '#6B8A3A'], ['olive-300', '#A8C46E'],
  ['amber-500', '#FFA400'], ['red-500', '#FF2D3D'],
];

export default function App() {
  const [shield, setShield] = useState(72);
  const [health, setHealth] = useState(85);
  const [alertOpen, setAlertOpen] = useState(true);
  const hit = () => { setShield(s => Math.max(0, s - 15)); if (shield < 15) setHealth(h => Math.max(0, h - 10)); };
  const recharge = () => setShield(100);

  return (
    <main className="shell">
      <header>
        <h1>UNSC-OS Design System</h1>
        <p>Biblioteca de componentes React con estética de terminal militar. Los estados reaccionan al instante.</p>
      </header>

      <div className="grid">
        <Panel title="Estado del traje" code="MJ-0417">
          <div className="stack">
            <ShieldBar value={shield} />
            <HealthBar value={health} />
            <div className="row">
              <Button onClick={hit} variant="danger">Recibir daño</Button>
              <Button onClick={recharge} variant="secondary">Recargar</Button>
            </div>
          </div>
        </Panel>

        <Panel title="Sistemas" code="SYS-04">
          <dl className="stat-grid">
            <dt>ENLACE</dt><dd><span className="dot" />ESTABLECIDO</dd>
            <dt>MOTOR</dt><dd><span className="dot dot--warn" />DEGRADADO</dd>
            <dt>ARMAS</dt><dd><span className="dot dot--crit" />BLOQUEADAS</dd>
          </dl>
          <div className="row" style={{ marginTop: 16 }}>
            <StatusChip level="ok" /><StatusChip level="warn" /><StatusChip level="crit" />
          </div>
        </Panel>

        <Panel title="Botones" code="UI-BTN">
          <div className="row">
            <Button>Desplegar</Button>
            <Button variant="secondary">Informe</Button>
            <Button variant="danger">Abortar</Button>
            <Button variant="ghost">[ Cancelar ]</Button>
            <Button disabled>Bloqueado</Button>
          </div>
        </Panel>

        <Panel title="Telemetría" code="NAV-02">
          <div className="row" style={{ justifyContent: 'space-around' }}>
            <CircularProgress value={shield} label="Carga de escudo" />
            <Radar />
          </div>
        </Panel>

        {alertOpen && (
          <AlertCard title="Advertencia de sistema" code="SYS-0417" onAck={() => setAlertOpen(false)}>
            <p>Escudos por debajo del 30%. Busca cobertura y espera la recarga.</p>
          </AlertCard>
        )}
        <AlertCard level="critical" title="Fallo crítico" code="SYS-0999" onAck={() => {}} onDismiss={() => {}}>
          <p>Pérdida de enlace con la nave. Reconecta el canal táctico.</p>
        </AlertCard>

        <Panel title="Paleta" code="TKN-01">
          <div className="swatches">
            {SWATCHES.map(([n, hex]) => <div key={n} className="swatch" style={{ background: hex }} title={hex}>{n}</div>)}
          </div>
        </Panel>
      </div>
    </main>
  );
}
