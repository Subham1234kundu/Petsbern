"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ServiceAnimations({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Titles & Headings ──
      const titles = gsap.utils.toArray<HTMLElement>("[data-animate='service-title']");
      titles.forEach(title => {
        gsap.from(title, {
          y: 60,
          opacity: 0,
          scale: 0.95,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: title,
            start: "top 95%",
            toggleActions: "play none none none"
          }
        });
      });

      // ── Descriptions ──
      const descs = gsap.utils.toArray<HTMLElement>("[data-animate='service-desc']");
      descs.forEach(desc => {
        gsap.from(desc, {
          y: 30,
          opacity: 0,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: desc,
            start: "top 95%",
            toggleActions: "play none none none"
          }
        });
      });

      // ── Cards (Animated Individually to avoid trigger mismatch) ──
      const cards = gsap.utils.toArray<HTMLElement>("[data-animate='service-card']");
      cards.forEach((card) => {
        gsap.from(card, {
          y: 60,
          opacity: 0,
          scale: 0.95,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      });

      // ── Section Text ──
      const textSections = gsap.utils.toArray<HTMLElement>("[data-animate='service-text']");
      textSections.forEach(section => {
        gsap.from(section, {
          x: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        });
      });

      // ── Section Images ──
      const imageSections = gsap.utils.toArray<HTMLElement>("[data-animate='service-image']");
      imageSections.forEach(section => {
        gsap.from(section, {
          x: -40,
          scale: 0.96,
          opacity: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        });
      });

      // ── Feature Items (Small lists) ──
      const featureItems = gsap.utils.toArray<HTMLElement>("[data-animate='feature-item']");
      featureItems.forEach((item) => {
        gsap.from(item, {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 95%",
            toggleActions: "play none none none"
          }
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef}>{children}</div>;
}
