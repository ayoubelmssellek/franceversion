export default function ReviewStars({ rating }: { rating: number }) {
  const safe = Math.min(5, Math.max(0, Math.round(rating)));
  return (
    <span className="font-mono text-[12px] tracking-wide text-pt-gold" aria-label={`${safe} sur 5 étoiles`}>
      {"★".repeat(safe)}
      <span className="text-muted">{"★".repeat(Math.max(0, 5 - safe))}</span>
    </span>
  );
}
