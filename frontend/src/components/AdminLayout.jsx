import { motion } from "framer-motion";
import AdminBottomNav from "./AdminBottomNav";

export default function AdminLayout({
  title,
  subtitle,
  children,
}) {

  return (
    <div
      className="
      min-h-screen
      bg-[#FFF7F2]
      text-[#2F2F2F]
      pb-28 md:pb-0
      relative
      overflow-hidden
    "
    >

      {/* BACKGROUND BLOBS */}
      <div
        className="
        absolute top-0 left-0
        w-72 h-72
        bg-[#B8B5FF]/20
        blur-3xl rounded-full
      "
      />

      <div
        className="
        absolute bottom-0 right-0
        w-72 h-72
        bg-[#FFB088]/20
        blur-3xl rounded-full
      "
      />

      {/* HEADER */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="
        sticky top-0 z-40
        bg-white/80
        backdrop-blur-2xl
        border-b border-white/60
        shadow-[0_4px_30px_rgba(0,0,0,0.04)]
      "
      >

        <div
          className="
          max-w-7xl mx-auto
          px-5 md:px-8
          py-5
        "
        >

          <div className="text-center">

            {/* TITLE */}
            <h1
              className="
              text-2xl md:text-3xl
              font-bold
              tracking-tight
              bg-gradient-to-r
              from-[#6C63FF]
              to-[#FFB088]
              bg-clip-text
              text-transparent
            "
            >
              {title}
            </h1>

            {/* SUBTITLE */}
            {subtitle && (
              <p
                className="
                text-sm md:text-base
                text-[#666]
                mt-2
                max-w-2xl
                mx-auto
                leading-relaxed
              "
              >
                {subtitle}
              </p>
            )}

            {/* LINE */}
            <div
              className="
              w-24 h-1
              rounded-full
              bg-gradient-to-r
              from-[#6C63FF]
              to-[#FFB088]
              mx-auto mt-5
            "
            />
          </div>
        </div>
      </motion.div>

      {/* MAIN CONTENT */}
      <main
        className="
        relative z-10
        max-w-7xl mx-auto
        px-4 md:px-8
        py-8
      "
      >

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="
          bg-white/70
          backdrop-blur-xl
          border border-white
          rounded-[32px]
          shadow-[0_10px_40px_rgba(0,0,0,0.05)]
          p-5 md:p-8
        "
        >
          {children}
        </motion.div>
      </main>

      {/* MOBILE NAVIGATION */}
      <AdminBottomNav />
    </div>
  );
}