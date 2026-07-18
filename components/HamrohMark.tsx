type HamrohMarkProps = {
  className?: string;
};

export function HamrohMark({ className = "" }: HamrohMarkProps) {
  return (
    <span
      className={`relative block h-11 w-11 overflow-hidden rounded-[11px] border border-white/10 bg-black shadow-sm ${className}`}
      aria-hidden
    >
      <span className="absolute left-[29%] top-[34%] h-[34%] w-[16%] rounded-full bg-white" />
      <span className="absolute right-[29%] top-[34%] h-[34%] w-[16%] rounded-full bg-white" />
      <span className="absolute bottom-[26%] left-1/2 h-[10%] w-[27%] -translate-x-1/2 rounded-b-full border-b-2 border-white" />
    </span>
  );
}
