const variants = {
  lightToDark: {
    top: '#F5F5F7',
    bottom: '#111111',
    strokeStart: '#7C4DFF',
    strokeEnd: '#20B8FF',
    glow: '#8B7CFF',
    shadow: 'rgba(17,17,17,0.08)',
  },
  darkToLight: {
    top: '#111111',
    bottom: '#F5F5F7',
    strokeStart: '#20B8FF',
    strokeEnd: '#7C4DFF',
    glow: '#56C7FF',
    shadow: 'rgba(17,17,17,0.08)',
  },
}

function SectionDivider({ variant = 'lightToDark' }) {
  const palette = variants[variant] ?? variants.lightToDark
  const gradientId = `divider-line-${variant}`
  const glowId = `divider-soft-glow-${variant}`
  const isLightToDark = variant === 'lightToDark'

  return (
    <div
      aria-hidden="true"
      className="-my-px pointer-events-none relative isolate h-14 overflow-hidden md:h-16"
      style={{ backgroundColor: palette.top }}
    >
      <div
        className="absolute inset-x-0 bottom-0 h-[52%]"
        style={{ backgroundColor: palette.bottom }}
      />
      <div
        className="absolute left-[12%] top-[18%] h-12 w-36 rounded-full blur-3xl md:h-14 md:w-44"
        style={{
          backgroundColor: isLightToDark
            ? 'rgba(124,77,255,0.12)'
            : 'rgba(32,184,255,0.1)',
        }}
      />
      <div
        className="absolute right-[10%] top-[26%] h-12 w-40 rounded-full blur-3xl md:h-14 md:w-48"
        style={{
          backgroundColor: isLightToDark
            ? 'rgba(32,184,255,0.1)'
            : 'rgba(124,77,255,0.12)',
        }}
      />

      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={palette.strokeStart} stopOpacity="0.18" />
            <stop offset="20%" stopColor={palette.strokeStart} stopOpacity="0.7" />
            <stop offset="50%" stopColor="#B9C3FF" stopOpacity="0.35" />
            <stop offset="80%" stopColor={palette.strokeEnd} stopOpacity="0.7" />
            <stop offset="100%" stopColor={palette.strokeEnd} stopOpacity="0.18" />
          </linearGradient>

          <filter id={glowId} x="-15%" y="-60%" width="130%" height="220%">
            <feGaussianBlur stdDeviation="10" />
          </filter>
        </defs>

        <path
          d="M0 58C78 46 156 38 234 39C312 40 390 50 468 54C546 58 624 56 702 49C780 42 858 31 936 30C1014 29 1092 38 1170 44C1248 50 1326 52 1440 44V120H0Z"
          fill={palette.bottom}
          style={{ filter: `drop-shadow(0 -8px 24px ${palette.shadow})` }}
        />

        <path
          d="M0 58C78 46 156 38 234 39C312 40 390 50 468 54C546 58 624 56 702 49C780 42 858 31 936 30C1014 29 1092 38 1170 44C1248 50 1326 52 1440 44"
          stroke={palette.glow}
          strokeOpacity="0.28"
          strokeWidth="12"
          strokeLinecap="round"
          fill="none"
          filter={`url(#${glowId})`}
        />

        <path
          d="M0 58C78 46 156 38 234 39C312 40 390 50 468 54C546 58 624 56 702 49C780 42 858 31 936 30C1014 29 1092 38 1170 44C1248 50 1326 52 1440 44"
          stroke={`url(#${gradientId})`}
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M0 44C60 51 120 57 180 56C240 55 300 46 360 44C420 42 480 48 540 53C600 58 660 61 720 58C780 55 840 46 900 41C960 36 1020 35 1080 40C1140 45 1200 55 1260 57C1320 59 1380 53 1440 48"
          stroke="#7C4DFF"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
          opacity="0.95"
        />
        <path
          d="M0 71C90 66 180 57 270 52C360 47 450 46 540 53C630 60 720 75 810 77C900 79 990 67 1080 57C1170 47 1260 40 1350 43C1380 44 1410 46 1440 49"
          stroke="#20B8FF"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
          opacity="0.92"
        />
      </svg>
    </div>
  )
}

export default SectionDivider
