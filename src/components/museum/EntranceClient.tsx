"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, useReducedMotion, Variants } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { MUSEUM_ROUTES } from "@/config/navigation";
import dynamic from "next/dynamic";

const Atmosphere = dynamic(() => import("@/components/three/Atmosphere").then(mod => mod.Atmosphere), {
  ssr: false,
});

export const EntranceClient = () => {
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleEnter = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isTransitioning) return;
    setIsTransitioning(true);

    router.prefetch(MUSEUM_ROUTES.COLLECTION);

    const delay = shouldReduceMotion ? 0 : 800;
    setTimeout(() => {
      router.push(MUSEUM_ROUTES.COLLECTION);
    }, delay);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, staggerChildren: 0.2, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 1.05,
      filter: shouldReduceMotion ? "blur(0px)" : "blur(10px)",
      transition: { duration: 0.8, ease: "easeInOut" }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="relative flex min-h-[calc(100dvh-72px)] w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
        <Atmosphere />
      </div>

      <motion.section
        className="relative z-10 flex flex-col items-center text-center px-6"
        variants={containerVariants}
        initial="hidden"
        animate={isTransitioning ? "exit" : "visible"}
        aria-label="Museum Entrance"
      >
        <motion.div className="flex flex-col items-center gap-4 md:gap-6" variants={itemVariants}>
          <h1 className="display-xl text-museum-white m-0 p-0">THE DIGITAL MUSEUM</h1>
          <span className="display-md text-museum-dim font-serif italic m-0 p-0">OF</span>
          <h2 className="display-xl text-museum-white m-0 p-0">BUNNY</h2>
        </motion.div>

        <motion.p className="label-caps text-museum-muted mt-8 mb-12 md:mt-12 md:mb-16" variants={itemVariants}>
          A COLLECTION OF DIGITAL WORKS
        </motion.p>

        <motion.div variants={itemVariants}>
          <Button
            variant="primary"
            onClick={handleEnter}
            isLoading={isTransitioning}
            aria-label="Enter the Main Gallery"
          >
            {isTransitioning ? "ENTERING..." : "ENTER MUSEUM"}
          </Button>
        </motion.div>
      </motion.section>
    </div>
  );
};
