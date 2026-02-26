// interface StatsBadgeProps {
//   title: string;
//   subtitle: string;
//   className?: string;
// }
// a
// const StatsBadge = ({
//   title,
//   subtitle,
//   className = "",
// }: StatsBadgeProps) => {
//   return (
//     <div
//       className={`
//         bg-white/10 backdrop-blur-md
//         border border-white/20
//         text-white
//         rounded-full
//         px-3 py-2
//         sm:px-4 sm:py-3
//         md:px-6 md:py-4
//         text-center
//         ${className}
//       `}
//     >
//       <h3 className="text-base sm:text-lg md:text-xl font-bold">
//         {title}
//       </h3>
//       <p className="text-xs sm:text-sm opacity-80">
//         {subtitle}
//       </p>
//     </div>
//   );
// };

// export default StatsBadge;





interface StatsBadgeProps {
  title: string
  subtitle: string
  className?: string
  children?: React.ReactNode
}

const StatsBadge = ({ title, subtitle, className, children }: StatsBadgeProps) => {
  return (
    <div className={`bg-white/10 backdrop-blur-md
         border border-white/20
         text-white
         rounded-full
         px-3 py-2
         sm:px-4 sm:py-3
         md:px-6 md:py-4
         text-center
           ${className}`}>
      <div className="relative flex flex-col items-center">
        {children}
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-sm text-white">{subtitle}</p>
      </div>
    </div>
  )
}

export default StatsBadge;