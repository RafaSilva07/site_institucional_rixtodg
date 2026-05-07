function BorderBeam({
  size = 220,
  duration = 7,
  delay = 0,
  colorFrom = 'rgba(106, 27, 255, 0.72)',
  colorTo = 'rgba(32, 184, 255, 0.66)',
  borderWidth = 2.25,
  className = '',
}) {
  const beamLength = `${Math.max(96, Math.min(size, 440))}px`
  const beamWidth = `${Math.max(2, borderWidth)}px`

  return (
    <div
      aria-hidden="true"
      className={`border-beam pointer-events-none absolute inset-0 rounded-[inherit] ${className}`}
      style={{
        '--border-beam-size': beamLength,
        '--border-beam-duration': `${duration}s`,
        '--border-beam-delay': `${delay}s`,
        '--border-beam-color-from': colorFrom,
        '--border-beam-color-to': colorTo,
        '--border-beam-width': beamWidth,
      }}
    >
      <div className="border-beam__runner" />
    </div>
  )
}

export default BorderBeam
