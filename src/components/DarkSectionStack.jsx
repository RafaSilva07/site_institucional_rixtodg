function DarkSectionStack({ previous, children }) {
  return (
    <div className="dark-section-stack">
      <div className="dark-section-stack__base">{previous}</div>
      <div className="dark-section-stack__overlay">{children}</div>
    </div>
  )
}

export default DarkSectionStack
