type ButtonProps = {
  onClick?: () => void
  children?: React.ReactNode
  className?: string
}

export default function Button({ onClick, children, className }: ButtonProps) {
  return (
    <button
      className={`bg-black text-white px-2 rounded w-fit py-3 font-bold ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
