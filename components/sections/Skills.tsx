"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  technicalSkillsWithLevels,
  coreSkillsWithLevels,
} from "@/lib/data";

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animate header
      gsap.from(".skills-header", {
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Animate skill bars
      gsap.utils.toArray<HTMLElement>(".skill-bar-fill").forEach((bar) => {
        const level = bar.dataset.level || "0";
        gsap.fromTo(
          bar,
          { width: "0%" },
          {
            scrollTrigger: {
              trigger: bar,
              start: "top 90%",
            },
            width: `${level}%`,
            duration: 1.5,
            ease: "power3.out",
          }
        );
      });

      // Animate skill items (fade in)
      gsap.utils.toArray<HTMLElement>(".skill-item").forEach((item, i) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
          },
          y: 30,
          opacity: 0,
          duration: 0.6,
          delay: (i % 5) * 0.1,
          ease: "power2.out",
        });
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={ref} className="py-24 px-6 bg-navy-800">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="skills-header mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-accent">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl">
            Technologies and abilities I&apos;ve developed through education,
            projects, and professional experience.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-1 h-8 bg-accent rounded-full" />
            Technical Skills
          </h3>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {technicalSkillsWithLevels.map((skill, i) => (
              <div key={i} className="skill-item group">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{skill.icon}</span>
                    <span className="font-medium text-gray-200">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-sm font-bold text-accent">
                    {skill.level}%
                  </span>
                </div>

                <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="skill-bar-fill absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 shadow-lg shadow-orange-500/50"
                    data-level={skill.level}
                    style={{ width: "0%" }}
                  >
                    <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Skills */}
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-1 h-8 bg-accent rounded-full" />
            Core Skills
          </h3>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {coreSkillsWithLevels.map((skill, i) => (
              <div key={i} className="skill-item group">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{skill.icon}</span>
                    <span className="font-medium text-gray-200">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-sm font-bold text-accent">
                    {skill.level}%
                  </span>
                </div>

                <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="skill-bar-fill absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 shadow-lg shadow-orange-500/50"
                    data-level={skill.level}
                    style={{ width: "0%" }}
                  >
                    <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}