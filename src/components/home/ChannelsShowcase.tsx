"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useState, type KeyboardEvent } from "react";
import { frenchChannelSlots } from "@/data/media";

const HOME_SLOTS = frenchChannelSlots.slice(0, 6);
const AUTO_MS = 3200;

export default function ChannelsShowcase() {
  const listId = useId();
  const guideChannels = HOME_SLOTS;
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const active = guideChannels[activeIndex] ?? guideChannels[0];
  const count = guideChannels.length;

  const selectChannel = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    if (count < 2 || paused) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const id = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % count);
    }, AUTO_MS);

    return () => window.clearInterval(id);
  }, [count, paused]);

  const onListKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (!count) return;

      if (event.key === "ArrowDown" || event.key === "ArrowRight") {
        event.preventDefault();
        setActiveIndex((current) => (current + 1) % count);
      }
      if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
        event.preventDefault();
        setActiveIndex((current) => (current - 1 + count) % count);
      }
      if (event.key === "Home") {
        event.preventDefault();
        setActiveIndex(0);
      }
      if (event.key === "End") {
        event.preventDefault();
        setActiveIndex(count - 1);
      }
    },
    [count],
  );

  if (!active) return null;

  return (
    <section className="border-y border-line bg-[#070707] py-10 md:py-14" aria-labelledby="channels-showcase-heading">
      <div className="section-shell">
        <div className="flex flex-col gap-4 border-b border-line pb-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="label">Chaînes IPTV France</p>
            <h2
              id="channels-showcase-heading"
              className="mt-3 text-[28px] tracking-[-0.7px] text-white md:text-[36px]"
            >
              Chaînes IPTV France
            </h2>
            <p className="mt-2 max-w-xl text-[14px] leading-[1.45] text-slate md:text-[15px]">
              Les emplacements des chaînes françaises sont prêts. Les logos seront ajoutés ici. La liste complète est
              sur la page Chaînes.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap gap-2">
            <Link href="/chaines" className="btn btn-ghost" aria-label="Voir la liste des chaînes IPTV France">
              Liste des chaînes
            </Link>
            <Link href="/tarifs" className="btn btn-solid" aria-label="Voir les tarifs IPTV France">
              Voir les tarifs
            </Link>
          </div>
        </div>

        <div
          className="grid lg:grid-cols-[minmax(200px,260px)_minmax(0,1fr)]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
              setPaused(false);
            }
          }}
        >
          <div
            role="listbox"
            id={listId}
            aria-label="Choisir un emplacement de chaîne IPTV France"
            aria-activedescendant={`${listId}-option-${activeIndex}`}
            tabIndex={0}
            onKeyDown={onListKeyDown}
            className="border-line outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070707] lg:border-r"
          >
            {guideChannels.map((slot, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={slot.id}
                  type="button"
                  role="option"
                  id={`${listId}-option-${index}`}
                  aria-selected={isActive}
                  onClick={() => selectChannel(index)}
                  className={`group flex w-full items-center gap-3 border-b border-line px-3 py-2.5 text-left transition-colors duration-200 md:px-4 ${
                    isActive
                      ? "bg-pt-red text-white"
                      : "bg-transparent text-slate hover:bg-pt-green/10 hover:text-white"
                  }`}
                >
                  <span
                    className={`font-mono text-[11px] tracking-wider ${isActive ? "text-white/60" : "text-muted"}`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex h-6 w-10 shrink-0 items-center justify-center rounded border border-white/20 text-[9px] text-muted">
                    Logo
                  </span>
                  <span className="min-w-0 flex-1 truncate text-[13px] font-medium">{slot.label}</span>
                </button>
              );
            })}
          </div>

          <div
            role="region"
            aria-live="polite"
            aria-labelledby={`${listId}-option-${activeIndex}`}
            className="flex items-center gap-5 bg-deep px-5 py-5 md:gap-8 md:px-8 md:py-6"
          >
            <div className="flex h-16 w-28 shrink-0 items-center justify-center rounded-xl border border-dashed border-white/25 text-[12px] text-muted md:h-20 md:w-36">
              Logo à fournir
            </div>
            <div key={active.id} className="min-w-0 flex-1 animate-rise">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-[22px] tracking-[-0.4px] text-white md:text-[26px]">{active.label}</h3>
                <span className="text-[11px] uppercase tracking-[0.06em] text-muted">
                  {active.category} · en direct
                </span>
              </div>
              <p className="mt-2 text-[14px] leading-[1.45] text-slate">
                Emplacement réservé. Le nom et le logo de cette chaîne française seront ajoutés ensuite.
              </p>
              <Link
                href="/chaines"
                className="mt-3 inline-block text-[13px] text-white underline-offset-4 hover:underline"
              >
                Catalogue complet →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
