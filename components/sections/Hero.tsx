"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
});

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-line", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.3,
      });
      gsap.from(".hero-cta", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        delay: 1.2,
      });
      gsap.from(".hero-image", {
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.8,
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 -z-10">
        <HeroScene />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-900/60 via-navy-900/30 to-navy-900" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
        {/* Left - Text */}
        <div>
          <p className="hero-line text-accent font-semibold mb-4 tracking-[0.2em] text-sm">
            HELLO, I&apos;M
          </p>
          <h1 className="hero-line text-5xl md:text-7xl font-bold leading-tight mb-6">
            Alsalt Ali
            <br />
            <span className="gradient-text">Alsalti</span>
          </h1>
          <p className="hero-line text-xl text-gray-300 mb-3">
            Computer Science Student
          </p>
          <p className="hero-line text-lg text-accent-light mb-8">
            Data Analytics &amp; AI Specialist
          </p>
          <p className="hero-line text-gray-400 mb-10 max-w-lg leading-relaxed">
            Passionate about turning raw data into real business decisions.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="hero-cta px-8 py-3 rounded-full bg-accent hover:bg-accent-dark transition font-semibold glow-orange"
            >
              View Projects
            </a>
            <a
              href="/cv/ALSALT_ALI_ALSALTI_CV.pdf"
              download
              className="hero-cta px-8 py-3 rounded-full border border-accent text-accent hover:bg-accent hover:text-white transition font-semibold"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right - Profile Image */}
        <div className="hidden md:flex justify-center items-center">
          <div className="hero-image relative w-80 h-80 lg:w-96 lg:h-96">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-500 via-orange-400 to-yellow-400 blur-3xl opacity-40 animate-pulse" />

            {/* Image container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-orange-500/30 shadow-2xl shadow-orange-500/20">
              <Image
  src="/images/profile.png"
  alt="Alsalt Ali Alsalti"
  fill
  className="object-cover"
  style={{ objectPosition: "center 20%" }}
  priority
/>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-2 -right-2 glass rounded-full px-4 py-2 text-sm font-semibold text-accent animate-float">
              💻 Developer
            </div>
            <div
              className="absolute -bottom-2 -left-2 glass rounded-full px-4 py-2 text-sm font-semibold text-accent animate-float"
              style={{ animationDelay: "1s" }}
            >
              📊 Data Analyst
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-2 bg-accent rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
}