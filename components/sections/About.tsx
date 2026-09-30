"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".about-reveal", {
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="about-reveal text-4xl md:text-5xl font-bold mb-12">
          About <span className="text-accent">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="about-reveal glass rounded-3xl p-8">
            <p className="text-gray-300 leading-relaxed mb-6">
              Computer Science student at Middle East College with a pathway in
              Data Analysis, with practical experience in web development,
              system analysis, sales, and international technical training.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Passionate about turning raw data into real business decisions and
              building smart, user-friendly digital solutions.
            </p>
          </div>

          <div className="about-reveal grid grid-cols-2 gap-4">
            {[
              { label: "Location", value: "Muscat, Oman" },
              { label: "Languages", value: "Arabic, English" },
              { label: "Degree", value: "BSc Computer Science" },
              { label: "Graduation", value: "2026" },
            ].map((item) => (
              <div key={item.label} className="glass rounded-2xl p-5">
                <p className="text-accent text-sm mb-1">{item.label}</p>
                <p className="font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}