"use client";

import { motion } from "framer-motion";

export type RobotMood = "idle" | "task" | "focus" | "celebrate" | "angry";

interface RobotFaceProps {
  mood?: RobotMood;
  size?: number;
  className?: string;
  float?: boolean;
}

// Mouth paths in group coords (center 0,0)
const mouthPaths: Record<RobotMood, string> = {
  idle: "M -14 10 Q 0 16 14 10",
  task: "M -12 10 Q 0 14 12 10",
  focus: "M -10 12 Q 0 10 10 12",
  celebrate: "M -16 6 Q 0 22 16 6",
  angry: "M -10 14 Q 0 10 10 14",
};

export function RobotFace({
  mood = "idle",
  size = 120,
  className = "",
  float = true,
}: RobotFaceProps) {
  const isCelebrate = mood === "celebrate";
  const isAngry = mood === "angry";
  const isFocus = mood === "focus";
  const blink = mood === "idle" || mood === "task";

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={false}
      animate={float ? { y: [0, -8, 0] } : {}}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Device body — monitor bezel */}
      <motion.rect
        x={4}
        y={6}
        width={56}
        height={52}
        rx={10}
        fill="#111"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth={0.5}
      />
      {/* Screen */}
      <rect x={10} y={12} width={44} height={40} rx={6} fill="#0d0d0d" />
      {/* Face */}
      <g transform="translate(32, 32)">
        {/* Left eyebrow */}
        <motion.line
          x1={-14}
          y1={-10}
          x2={-4}
          y2={-12}
          stroke="#F8F7F4"
          strokeWidth={1.8}
          strokeLinecap="round"
          animate={{
            rotate: isAngry ? -12 : isFocus ? -4 : isCelebrate ? 4 : 0,
            y: isCelebrate ? -2 : isAngry ? 2 : 0,
          }}
          style={{ transformOrigin: "-9px -11px" }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
        />
        {/* Right eyebrow */}
        <motion.line
          x1={4}
          y1={-12}
          x2={14}
          y2={-10}
          stroke="#F8F7F4"
          strokeWidth={1.8}
          strokeLinecap="round"
          animate={{
            rotate: isAngry ? 12 : isFocus ? 4 : isCelebrate ? -4 : 0,
            y: isCelebrate ? -2 : isAngry ? 2 : 0,
          }}
          style={{ transformOrigin: "9px -11px" }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
        />
        {/* Left eye */}
        <motion.ellipse
          cx={-8}
          cy={-2}
          rx={6}
          ry={7}
          fill="#F8F7F4"
          className={blink ? "robot-eye-blink" : ""}
          animate={{
            scaleY: isAngry ? 0.12 : 1,
            scaleX: 1,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          style={{ transformOrigin: "-8px -2px" }}
        />
        {/* Right eye */}
        <motion.ellipse
          cx={8}
          cy={-2}
          rx={6}
          ry={7}
          fill="#F8F7F4"
          className={blink ? "robot-eye-blink" : ""}
          animate={{
            scaleY: isAngry ? 0.12 : 1,
            scaleX: 1,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          style={{ transformOrigin: "8px -2px" }}
        />
        {/* Star eyes for celebrate */}
        {isCelebrate && (
          <motion.g
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <text x={-10} y={2} textAnchor="middle" fill="#F8F7F4" fontSize={12}>
              ★
            </text>
            <text x={10} y={2} textAnchor="middle" fill="#F8F7F4" fontSize={12}>
              ★
            </text>
          </motion.g>
        )}
        {/* Mouth */}
        <motion.path
          d={mouthPaths[mood]}
          stroke="#F8F7F4"
          strokeWidth={mood === "celebrate" ? 2.2 : 1.8}
          strokeLinecap="round"
          fill="none"
          initial={false}
          animate={{ d: mouthPaths[mood] }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        />
      </g>
    </motion.svg>
  );
}
