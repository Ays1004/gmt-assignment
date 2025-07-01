"use client";
import { motion, MotionProps } from "framer-motion";
import React from "react";

interface Appear extends MotionProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
}

export default function Appear({
  children,
  duration = 0.9, // default duration 1s
  delay = 0,     // optional: delay before animating
  ...props       // pass other motion.div props if needed
}: Appear) {     
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1}}
      viewport={{ once: true }}
      transition={{ duration, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}


/**
 * Usage:
 * <Appear>
 *   <div>Content Here</div>
 * </Appear>
 */
