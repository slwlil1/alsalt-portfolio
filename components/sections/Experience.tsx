"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experiences } from "@/lib/data";

function BriefcaseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect width="20" height="14" x="2" y="7" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animate the timeline line
      gsap.from(".timeline-line", {
        scrollTrigger: {
          trigger: ref.current,
          start: "top 70%",
          end: "bottom 80%",
          scrub: 1,
        },
        scaleY: 0,
        transformOrigin: "top center",
        ease: "none",
      });

      // Animate each item
      gsap.utils.toArray<HTMLElement>(".timeline-item").forEach((item, i) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
          x: i % 2 === 0 ? -80 : 80,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      });

      // Animate dots
      gsap.utils.toArray<HTMLElement>(".timeline-dot").forEach((dot) => {
        gsap.from(dot, {
          scrollTrigger: {
            trigger: dot,
            start: "top 85%",
          },
          scale: 0,
          duration: 0.6,
          ease: "back.out(2)",
        });
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={ref} className="py-24 px-6 bg-navy-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Work <span className="text-accent">Experience</span>
        </h2>
        <p className="text-gray-400 mb-16 max-w-2xl">
          My professional journey through various roles and industries.
        </p>

        <div className="relative">
          {/* Timeline Line - Center on desktop, left on mobile */}
          <div className="timeline-line absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/60 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`timeline-item relative flex flex-col md:flex-row ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-start md:items-center gap-8`}
              >
                {/* Dot */}
                <div className="timeline-dot absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1/2 md:-translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2 rounded-full bg-accent ring-4 ring-navy-900 shadow-lg shadow-orange-500/50 z-10">
                  <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-30" />
                </div>

                {/* Spacer (desktop) */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div
                  className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                    i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                  }`}
                >
                  <div className="glass rounded-2xl p-6 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 relative group">
                    {/* Period Badge */}
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold mb-3 ${
                        i % 2 === 0 ? "md:ml-auto" : ""
                      }`}
                    >
                      {exp.period}
                    </div>

                    {/* Role */}
                    <div
                      className={`flex items-center gap-2 mb-2 ${
                        i % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      <BriefcaseIcon />
                      <span className="text-sm font-semibold text-accent">
                        {exp.role}
                      </span>
                    </div>

                    {/* Company */}
                    <h3 className="text-xl font-bold mb-2">{exp.company}</h3>

                    {/* Location */}
                    <p className="text-sm text-gray-400 mb-4">📍 {exp.location}</p>

                    {/* Bullet points */}
                    <ul
                      className={`space-y-2 text-gray-300 text-sm ${
                        i % 2 === 0 ? "md:text-right" : ""
                      }`}
                    >
                      {exp.points.map((p, j) => (
                        <li
                          key={j}
                          className={`flex gap-2 ${
                            i % 2 === 0 ? "md:flex-row-reverse" : ""
                          }`}
                        >
                          <span className="text-accent flex-shrink-0">▸</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
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