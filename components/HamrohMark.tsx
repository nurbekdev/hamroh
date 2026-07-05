type HamrohMarkProps = {
  className?: string;
};

export function HamrohMark({ className = "" }: HamrohMarkProps) {
  return (
    <span
      className={`relative block h-11 w-11 overflow-hidden rounded-2xl border border-white/10 bg-black shadow-sm ${className}`}
      aria-hidden
    >
      <span className="absolute left-[13px] top-[15px] h-[15px] w-[7px] rounded-full bg-white" />
      <span className="absolute right-[13px] top-[15px] h-[15px] w-[7px] rounded-full bg-white" />
      <span className="absolute bottom-[12px] left-1/2 h-[5px] w-[12px] -translate-x-1/2 rounded-b-full border-b-2 border-white" />
    </span>
  );
}
