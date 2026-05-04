function InfoRow({ title, text, className = '', style }) {
  return (
    <div
      className={`flex flex-col gap-1 rounded-2xl bg-[#FAFAFA] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-5 ${className}`}
      style={style}
    >
      <strong className="font-semibold">{title}</strong>
      <span className="text-sm text-[#666A73] sm:text-right">{text}</span>
    </div>
  )
}

export default InfoRow
