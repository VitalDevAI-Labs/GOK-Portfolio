export default function EdgeFrame() {
  return (
    <div
      aria-hidden="true"
      style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 40 }}
    >
      <div
        className="edge-line edge-line--glow"
        style={{ left: 'max(24px, calc(50% - 600px))' }}
      />
      <div
        className="edge-line edge-line--glow"
        style={{ right: 'max(24px, calc(50% - 600px))' }}
      />
    </div>
  )
}
