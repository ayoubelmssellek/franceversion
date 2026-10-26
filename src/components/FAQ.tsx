"use client";

import Link from "next/link";
import { useId, useState, type ReactNode } from "react";
import { faqs } from "@/data/content";

const linkClass = "text-white underline-offset-4 hover:underline";

/** Renders FAQ answer text with [label](/path) and [label](https://…) links. */
function renderAnswer(text: string): ReactNode {
  const parts: ReactNode[] = [];
  const re = /\[([^\]]+)\]\((https?:\/\/[^)\s]+|\/[a-zA-Z0-9][a-zA-Z0-9\-\/#]*)\)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = re.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    const label = match[1];
    const href = match[2];
    if (/^https?:\/\//i.test(href)) {
      parts.push(
        <a key={key++} href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
          {label}
        </a>,
      );
    } else {
      parts.push(
        <Link key={key++} href={href} className={linkClass}>
          {label}
        </Link>,
      );
    }
    last = match.index + match[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts.length ? parts : text;
}

/**
 * Accordion FAQ with answers always in the DOM (CSS-hidden when collapsed)
 * so FAQPage JSON-LD matches visible crawlable content.
 */
export default function FAQ({ items = faqs }: { items?: { q: string; a: string }[] }) {
  const baseId = useId();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        const buttonId = `${baseId}-button-${i}`;
        return (
          <div key={item.q}>
            <button
              type="button"
              id={buttonId}
              className="flex w-full items-center justify-between gap-6 py-5 text-left"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <span className="text-[16px] font-medium tracking-[-0.16px] text-white md:text-[20px]">
                {item.q}
              </span>
              <span className="text-[20px] text-slate" aria-hidden>
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={isOpen ? "block" : "hidden"}
            >
              <p className="max-w-3xl pb-5 text-[14px] leading-[1.45] text-slate md:text-[16px]">
                {renderAnswer(item.a)}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
