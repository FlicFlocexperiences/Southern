"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface CountUpProps {
  to: number | string;
  from?: number;
  duration?: number; // duration in seconds
  suffix?: string;
  className?: string;
  padZero?: boolean;
}

export function CountUp({
  to,
  from = 0,
  duration = 2,
  suffix = "",
  className = "",
  padZero = false,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  // Parse string or number to extract actual number, suffix, and decimal count
  let targetNumber = 0;
  let finalSuffix = suffix;
  let decimals = 0;

  if (typeof to === "string") {
    const match = to.match(/^([\d.]+)(.*)$/);
    if (match) {
      targetNumber = parseFloat(match[1]);
      finalSuffix = match[2] + suffix;
      const decimalParts = match[1].split('.');
      decimals = decimalParts.length > 1 ? decimalParts[1].length : 0;
    } else {
      targetNumber = parseFloat(to) || 0;
    }
  } else {
    targetNumber = to;
    const strVal = to.toString();
    const decimalParts = strVal.split('.');
    decimals = decimalParts.length > 1 ? decimalParts[1].length : 0;
  }
  
  const motionValue = useMotionValue(from);
  const springValue = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });
  
  // Format display value
  const getFormattedValue = (val: number) => {
    if (decimals > 0) {
      return val.toFixed(decimals) + finalSuffix;
    }
    const floorVal = Math.floor(val);
    const padded = padZero && floorVal < 10 ? `0${floorVal}` : `${floorVal}`;
    return padded + finalSuffix;
  };

  const [displayValue, setDisplayValue] = useState(getFormattedValue(from));

  useEffect(() => {
    if (isInView) {
      motionValue.set(targetNumber);
    }
  }, [isInView, motionValue, targetNumber]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(getFormattedValue(latest));
    });
  }, [springValue, finalSuffix, padZero, decimals]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}
