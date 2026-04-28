function Label({ children, light = false }) {
  return (
    <span
      className={`inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] ${
        light ? 'text-[#20B8FF]' : 'text-[#4B34FF]'
      }`}
    >
      <span className="h-px w-8 bg-gradient-to-r from-[#6A1BFF] to-[#20B8FF]" />
      {children}
    </span>
  )
}

export default Label