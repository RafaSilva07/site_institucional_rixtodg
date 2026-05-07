function BorderBeam({
  size = 72,
  duration = 7,
  delay = 0,
  colorFrom = 'rgba(106, 27, 255, 0.72)',
  colorTo = 'rgba(32, 184, 255, 0.66)',
  borderWidth = 1,
  className = '',
}) {
  const beamSize = `${Math.max(32, Math.min(size, 132))}deg`

  return (
    <div
      aria-hidden="true"
      className={`border-beam pointer-events-none absolute inset-0 rounded-[inherit] ${className}`}
      style={{
        '--border-beam-size': beamSize,
        '--border-beam-duration': `${duration}s`,
        '--border-beam-delay': `${delay}s`,
        '--border-beam-color-from': colorFrom,
        '--border-beam-color-to': colorTo,
        '--border-beam-width': `${borderWidth}px`,
      }}
    >
      <div className="border-beam__track" />
    </div>
  )
}

export default BorderBeam
