"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cloud, Shield, GitMerge, Code2, Bot } from "lucide-react";

/* ── Animations ─────────────────────────────────────────── */

function AIAnimation() {
  const messages = [
    { id: 0, text: "How do I track my order?", user: true },
    { id: 1, text: "I can help with that! Your order #4821 is out for delivery and arrives today.", user: false },
    { id: 2, text: "Can you escalate to a human?", user: true },
    { id: 3, text: "Connecting you now...", user: false },
  ];
  const [visible, setVisible] = useState<number[]>([]);

  useEffect(() => {
    let i = 0;
    const show = () => {
      if (i < messages.length) {
        setVisible((p) => [...p, i]);
        i++;
        setTimeout(show, 1100);
      } else {
        setTimeout(() => { setVisible([]); i = 0; setTimeout(show, 400); }, 2000);
      }
    };
    const t = setTimeout(show, 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="flex h-full flex-col justify-end gap-2 pb-1">
      <AnimatePresence>
        {messages.filter((m) => visible.includes(m.id)).map((m) => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`max-w-[88%] rounded-xl px-3 py-1.5 text-xs leading-5 ${
              m.user
                ? "self-end bg-white/15 text-white/80"
                : "self-start bg-white/5 text-white/45"
            }`}
          >
            {m.text}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

function AppDevAnimation() {
  const [active, setActive] = useState(0);
  const layers = ["UI Layer", "API Layer", "Data Layer", "Infra Layer"];

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % layers.length), 1200);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-2">
      {layers.map((layer, i) => (
        <motion.div
          key={layer}
          className="w-full max-w-[180px] rounded-md px-3 py-2 text-center font-mono text-xs"
          animate={{
            backgroundColor: i === active ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.04)",
            color: i === active ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.25)",
          }}
          transition={{ duration: 0.35 }}
        >
          {layer}
        </motion.div>
      ))}
    </div>
  );
}

function CloudAnimation() {
  const pulses = [0, 1, 2];
  return (
    <div className="relative flex h-full items-center justify-center">
      <Cloud className="z-10 h-12 w-12 text-white/80" />
      {pulses.map((p) => (
        <motion.div
          key={p}
          className="absolute h-12 w-12 rounded-full border border-white/30"
          animate={{ scale: [0.8, 2.8], opacity: [0, 0.5, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: p * 0.8, times: [0, 0.4, 1] }}
        />
      ))}
    </div>
  );
}

function MigrationAnimation() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setShow((p) => !p), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="flex h-full items-center justify-center">
      <AnimatePresence mode="wait">
        {!show ? (
          <motion.div key="before" initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 12 }} transition={{ duration: 0.4 }} className="flex flex-col items-center gap-1.5">
            <span className="mb-1 font-mono text-[10px] tracking-wider text-white/25 uppercase">Legacy</span>
            {["WordPress", "MySQL"].map((t) => (
              <div key={t} className="rounded border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-white/35">{t}</div>
            ))}
          </motion.div>
        ) : (
          <motion.div key="after" initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 12 }} transition={{ duration: 0.4 }} className="flex flex-col items-center gap-1.5">
            <span className="mb-1 font-mono text-[10px] tracking-wider text-white/25 uppercase">Modern</span>
            {["Next.js", "PostgreSQL"].map((t) => (
              <div key={t} className="rounded border border-white/20 bg-white/10 px-3 py-1 font-mono text-xs text-white/75">{t}</div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SecurityAnimation() {
  const [shields, setShields] = useState([
    { id: 1, active: false },
    { id: 2, active: false },
    { id: 3, active: false },
  ]);

  useEffect(() => {
    const t = setInterval(() => {
      setShields((prev) => {
        const next = prev.findIndex((s) => !s.active);
        if (next === -1) return prev.map((s) => ({ ...s, id: Math.random(), active: false }));
        return prev.map((s, i) => (i === next ? { ...s, active: true } : s));
      });
    }, 700);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="flex h-full items-center justify-center gap-3">
      {shields.map((s) => (
        <motion.div
          key={s.id}
          className={`flex h-12 w-12 items-center justify-center rounded-xl ${s.active ? "bg-white/20" : "bg-white/5"}`}
          animate={{ scale: s.active ? 1.12 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <Shield className={`h-5 w-5 ${s.active ? "text-white" : "text-zinc-600"}`} />
        </motion.div>
      ))}
    </div>
  );
}

/* ── Card wrapper ────────────────────────────────────────── */

function BentoCard({
  children,
  className = "",
  delay = 0,
  hover = 1.02,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hover?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: hover }}
      className={`flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900 p-7 transition-colors hover:border-zinc-700 ${className}`}
    >
      {children}
    </motion.div>
  );
}

/* ── Section ─────────────────────────────────────────────── */

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 bg-zinc-950 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 sm:px-12">
        <p className="mb-5 font-mono text-[11px] tracking-[0.22em] text-zinc-600 uppercase">
          Services
        </p>
        <div className="mb-16">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What we build and ship.
          </h2>
        </div>

        {/*
          Bento layout (6-col):
          Row 1: [AI        4col ×2] [Enterprise 2col]
          Row 2: [AI cont.        ] [Cloud      2col]
          Row 3: [Migration  3col ] [Security   3col]
        */}
        <div className="grid grid-cols-1 gap-4 md:auto-rows-[200px] md:grid-cols-6">

          {/* AI — dominant 4×2 */}
          <BentoCard className="md:col-span-4 md:row-span-2" delay={0}>
            <div className="min-h-0 flex-1 overflow-hidden">
              <AIAnimation />
            </div>
            <div className="mt-4 shrink-0">
              <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800">
                <Bot className="h-4 w-4 text-zinc-400" />
              </div>
              <h3 className="font-heading text-base font-semibold text-white">
                AI Automation &amp; Agents
              </h3>
              <p className="mt-1.5 text-sm leading-6 text-zinc-400">
                Custom AI chatbots trained on your data, 24/7 voice support
                agents, and workflow automation — built to reduce overhead and
                scale your operations.
              </p>
            </div>
          </BentoCard>

          {/* Enterprise — small 2×1 */}
          <BentoCard className="md:col-span-2" delay={0.1} hover={0.98}>
            <div className="min-h-0 flex-1 overflow-hidden">
              <AppDevAnimation />
            </div>
            <div className="mt-3 shrink-0">
              <h3 className="font-heading text-sm font-semibold text-white">
                Enterprise App Development
              </h3>
              <p className="mt-1 text-xs text-zinc-500">
                Custom web apps, document management, workflow automation.
              </p>
            </div>
          </BentoCard>

          {/* Cloud — small 2×1 */}
          <BentoCard className="md:col-span-2" delay={0.2} hover={0.98}>
            <div className="min-h-0 flex-1 overflow-hidden">
              <CloudAnimation />
            </div>
            <div className="mt-3 shrink-0">
              <h3 className="font-heading text-sm font-semibold text-white">
                Cloud Engineering
              </h3>
              <p className="mt-1 text-xs text-zinc-500">
                AWS &amp; GCP, IaC, CI/CD pipelines, containerization.
              </p>
            </div>
          </BentoCard>

          {/* Migration — medium 3×1 */}
          <BentoCard className="md:col-span-3" delay={0.3} hover={0.98}>
            <div className="min-h-0 flex-1 overflow-hidden">
              <MigrationAnimation />
            </div>
            <div className="mt-3 shrink-0">
              <h3 className="font-heading text-sm font-semibold text-white">
                Software Migration &amp; Modernisation
              </h3>
              <p className="mt-1 text-xs text-zinc-500">
                Legacy upgrades, database migrations, platform modernization.
              </p>
            </div>
          </BentoCard>

          {/* Security — medium 3×1 */}
          <BentoCard className="md:col-span-3" delay={0.4} hover={0.98}>
            <div className="min-h-0 flex-1 overflow-hidden">
              <SecurityAnimation />
            </div>
            <div className="mt-3 shrink-0">
              <h3 className="font-heading text-sm font-semibold text-white">
                Security &amp; Pen Testing
              </h3>
              <p className="mt-1 text-xs text-zinc-500">
                OWASP reviews, penetration testing, remediation guidance.
              </p>
            </div>
          </BentoCard>

        </div>
      </div>
    </section>
  );
}
