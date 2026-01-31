'use client';

import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const ScrollBasedAnimation = ({
  children,
  threshold = 0.3,
  delay = 0,
  duration = 0.4,
  offset = 70,
  direction = "up",
}) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const hasMounted = useRef(false);

  // Calculate directional offset once
  const getOffset = () => {
    switch (direction) {
      case "up": return { y: offset };
      case "down": return { y: -offset };
      case "left": return { x: offset };
      case "right": return { x: -offset };
      default: return { y: offset };
    }
  };

  const variants = {
    hidden: { opacity: 0, ...getOffset() },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, delay, ease: "easeOut" },
    },
  };

  useEffect(() => {
    hasMounted.current = true;
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        // ✅ Only animate after full mount & on the next frame
        if (!hasMounted.current) return;

        requestAnimationFrame(() => {
          if (!hasMounted.current) return;
          if (entry.isIntersecting) {
            controls.start("visible").catch(() => {});
          } else {
            controls.start("hidden").catch(() => {});
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      hasMounted.current = false;
      observer.disconnect();
    };
  }, [controls, threshold]);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
};

export default React.memo(ScrollBasedAnimation);
