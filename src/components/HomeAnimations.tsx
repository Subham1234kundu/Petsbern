"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HomeAnimations({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Features Bar ──
      const featureItems = gsap.utils.toArray<HTMLElement>(
        "[data-animate='feature-item']"
      );
      if (featureItems.length) {
        gsap.set(featureItems, { opacity: 0, y: 30 });
        gsap.to(featureItems, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-animate='features-bar']",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }

      // ── Section Headings ──
      const sectionHeadings = gsap.utils.toArray<HTMLElement>(
        "[data-animate='section-heading']"
      );
      sectionHeadings.forEach((heading) => {
        gsap.set(heading, { opacity: 0, y: 40 });
        gsap.to(heading, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      // ── Breed Grid Cards (12 breeds) ──
      const breedCards = gsap.utils.toArray<HTMLElement>(
        "[data-animate='breed-card']"
      );
      if (breedCards.length) {
        gsap.set(breedCards, { opacity: 0, y: 60, scale: 0.92 });
        gsap.to(breedCards, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: "[data-animate='breeds-grid']",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }

      // ── Why PetsBarn Section ──
      const whySection = document.querySelector(
        "[data-animate='why-petsbarn']"
      );
      if (whySection) {
        // Heading
        const whyHeading = whySection.querySelector("h2");
        if (whyHeading) {
          gsap.set(whyHeading, { opacity: 0, x: -60 });
          gsap.to(whyHeading, {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: whySection,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          });
        }

        // Background SVG text
        const bgText = whySection.querySelector(
          "[data-animate='why-bg-text']"
        );
        if (bgText) {
          gsap.set(bgText, { opacity: 0, scale: 0.85 });
          gsap.to(bgText, {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: whySection,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          });
        }

        // Why cards
        const whyCards = gsap.utils.toArray<HTMLElement>(
          "[data-animate='why-card']"
        );
        if (whyCards.length) {
          gsap.set(whyCards, { opacity: 0, y: 50, scale: 0.9 });
          gsap.to(whyCards, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: whyCards[0],
              start: "top 85%",
              toggleActions: "play none none none",
            },
          });
        }

        // Bottom image
        const whyImage = whySection.querySelector(
          "[data-animate='why-image']"
        );
        if (whyImage) {
          gsap.set(whyImage, { opacity: 0, y: 40 });
          gsap.to(whyImage, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: whyImage,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          });
        }
      }

      // ── Client Favorites Section ──
      const favSection = document.querySelector(
        "[data-animate='favorites-section']"
      );
      if (favSection) {
        // Large card (left)
        const favLarge = favSection.querySelector(
          "[data-animate='fav-large']"
        );
        if (favLarge) {
          gsap.set(favLarge, { opacity: 0, x: -80 });
          gsap.to(favLarge, {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: favSection,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          });
        }

        // Small cards (right grid)
        const favSmall = gsap.utils.toArray<HTMLElement>(
          "[data-animate='fav-small']"
        );
        if (favSmall.length) {
          gsap.set(favSmall, { opacity: 0, y: 50, scale: 0.9 });
          gsap.to(favSmall, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.12,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: favSection,
              start: "top 65%",
              toggleActions: "play none none none",
            },
          });
        }
      }

      // ── Available Pets Section ──
      const availableSection = document.querySelector(
        "[data-animate='available-pets']"
      );
      if (availableSection) {
        const availableCards = gsap.utils.toArray<HTMLElement>(
          "[data-animate='available-card']"
        );
        if (availableCards.length) {
          gsap.set(availableCards, { opacity: 0, y: 60 });
          gsap.to(availableCards, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: availableSection,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          });
        }

        // Featured puppy image
        const featuredPuppy = availableSection.querySelector(
          "[data-animate='featured-puppy']"
        );
        if (featuredPuppy) {
          gsap.set(featuredPuppy, { opacity: 0, x: 80 });
          gsap.to(featuredPuppy, {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: featuredPuppy,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          });
        }
      }

      // ── Everything Your Pet Needs ──
      const needsCards = gsap.utils.toArray<HTMLElement>(
        "[data-animate='needs-card']"
      );
      if (needsCards.length) {
        gsap.set(needsCards, { opacity: 0, y: 50, scale: 0.92 });
        gsap.to(needsCards, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.65,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-animate='needs-section']",
            start: "top 70%",
            toggleActions: "play none none none",
          },
        });
      }

      // ── Bringing Your Pet Home Steps ──
      const stepCards = gsap.utils.toArray<HTMLElement>(
        "[data-animate='step-card']"
      );
      if (stepCards.length) {
        gsap.set(stepCards, { opacity: 0, y: 80, rotateY: 8 });
        gsap.to(stepCards, {
          opacity: 1,
          y: 0,
          rotateY: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-animate='steps-section']",
            start: "top 70%",
            toggleActions: "play none none none",
          },
        });
      }

      // ── Client Testimonials ──
      const testimonialSection = document.querySelector(
        "[data-animate='testimonials-section']"
      );
      if (testimonialSection) {
        const testVideo = testimonialSection.querySelector(
          "[data-animate='test-video']"
        );
        const testQuote = testimonialSection.querySelector(
          "[data-animate='test-quote']"
        );
        if (testVideo) {
          gsap.set(testVideo, { opacity: 0, x: -60 });
          gsap.to(testVideo, {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: testimonialSection,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          });
        }
        if (testQuote) {
          gsap.set(testQuote, { opacity: 0, x: 60 });
          gsap.to(testQuote, {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: testimonialSection,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          });
        }

        // Happy families image
        const familyGrid = testimonialSection.querySelector(
          "[data-animate='family-grid']"
        );
        if (familyGrid) {
          gsap.set(familyGrid, { opacity: 0, scale: 0.9 });
          gsap.to(familyGrid, {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: familyGrid,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          });
        }
      }

      // ── Expert Tips Cards ──
      const tipCards = gsap.utils.toArray<HTMLElement>(
        "[data-animate='tip-card']"
      );
      if (tipCards.length) {
        gsap.set(tipCards, { opacity: 0, y: 50 });
        gsap.to(tipCards, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-animate='tips-section']",
            start: "top 75%",
            toggleActions: "play none none none",
          },
        });
      }

      // ── Consultation Section ──
      const consultSection = document.querySelector(
        "[data-animate='consult-section']"
      );
      if (consultSection) {
        const consultForm = consultSection.querySelector(
          "[data-animate='consult-form']"
        );
        const consultImage = consultSection.querySelector(
          "[data-animate='consult-image']"
        );
        if (consultForm) {
          gsap.set(consultForm, { opacity: 0, x: -60 });
          gsap.to(consultForm, {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: consultSection,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          });
        }
        if (consultImage) {
          gsap.set(consultImage, { opacity: 0, x: 60 });
          gsap.to(consultImage, {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: consultSection,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          });
        }
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef}>{children}</div>;
}
