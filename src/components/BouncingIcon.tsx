
import * as motion from "motion/react-client"

interface BouncingIconProps {
  children: React.ReactNode
  className?: string
}

export default function BouncingIcon({ children, className }: BouncingIconProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -12, 0],   // bounce up and back
        scale: [1, 1.1, 1]
      }}
      transition={{
        duration: 0.6,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  )
}