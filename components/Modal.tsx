export default function Modal({
  children,
  onClose,
}: Readonly<{
  children: React.ReactNode
  onClose: () => void
}>) {
  return (
    <>
      <div className="fixed z-10 min-h-screen w-screen opacity-50 bg-black" />
      <div className="fixed z-10 min-h-screen w-screen flex items-center justify-center ">
        <div className="min-w-260 min-h-400 bg-slate-300 p-4 rounded">
          <div className="flex">
            <div className="flex-1" />
            <button onClick={onClose} className="text-black">
              Close
            </button>
          </div>
          <div className="p-16 pt-12">{children}</div>
        </div>
      </div>
    </>
  )
}
