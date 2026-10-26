import clientReviews from "@/data/client-reviews.json";

export type ClientReview = {
  id: number;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
};

export const reviews = clientReviews as ClientReview[];

/** Homepage teaser — full list lives on /avis. */
export const HOME_REVIEW_COUNT = 6;

export function getFeaturedReviews(count = HOME_REVIEW_COUNT): ClientReview[] {
  return reviews.slice(0, count);
}

export type ReviewStats = {
  ratingValue: number;
  reviewCount: number;
  bestRating: number;
  worstRating: number;
};

/** Aggregate from the published review list only — never invent a larger count. */
export function getReviewStats(list: ClientReview[] = reviews): ReviewStats {
  const reviewCount = list.length;
  if (reviewCount === 0) {
    return { ratingValue: 0, reviewCount: 0, bestRating: 5, worstRating: 1 };
  }
  const sum = list.reduce((acc, item) => acc + item.rating, 0);
  const ratingValue = Math.round((sum / reviewCount) * 10) / 10;
  return {
    ratingValue,
    reviewCount,
    bestRating: 5,
    worstRating: 1,
  };
}

export function formatRatingLabel(stats: ReviewStats = getReviewStats()) {
  return `${stats.ratingValue.toFixed(1).replace(".", ",")}/5 · ${stats.reviewCount} avis`;
}
