import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404: user attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-[hsl(var(--mocha-base))] overflow-hidden">
      <div
        className="pointer-events-none select-none fixed inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsla(var(--mocha-overlay1)/0.08) 1px, transparent 1px),
            linear-gradient(to bottom, hsla(var(--mocha-overlay1)/0.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <motion.div
        className="absolute w-64 h-64 bg-[hsl(var(--mocha-pink))] rounded-full filter blur-3xl opacity-30 top-[-10%] left-[-10%]"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-[hsl(var(--mocha-blue))] rounded-full filter blur-3xl opacity-20 bottom-[-10%] right-[-10%]"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <h1 className="text-6xl font-bold text-[hsl(var(--mocha-pink))] mb-2 select-none">404</h1>
        <p className="text-xl text-[hsl(var(--mocha-subtext0))] mb-5">nothing here, trust me.</p>
        <motion.a
          href="/"
          className="inline-block px-6 py-3 bg-[hsl(var(--mocha-blue))] text-[hsl(var(--mocha-base))] font-semibold rounded-lg hover:bg-[hsl(var(--mocha-pink))] transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          go home
        </motion.a>
      </motion.div>
    </div>
  );
};

export default NotFound;
