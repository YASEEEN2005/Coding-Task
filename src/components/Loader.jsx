export default function Loader() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-[#020514] fixed inset-0 z-[100]">
      <div className="relative flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-white/10 rounded-full"></div>
        <div className="absolute top-0 w-16 h-16 border-4 border-[#3b82f6] border-t-transparent rounded-full animate-spin"></div>
        <div className="mt-6 text-[#93c5fd] text-sm font-semibold tracking-widest animate-pulse uppercase">
          Loading
        </div>
      </div>
    </div>
  );
}
