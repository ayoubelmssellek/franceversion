import type { StaticImageData } from "next/image";

import appleTvPlus from "@/assets/entertainment-brands/apple-tv-iptv-france.jpg";
import dazn from "@/assets/entertainment-brands/dazn-iptv-france.webp";
import disneyPlus from "@/assets/entertainment-brands/disney-plus-iptv-france.jpg";
import hboMax from "@/assets/entertainment-brands/hbo-max-iptv-france.jpg";
import netflixBrand from "@/assets/entertainment-brands/netflix-iptv-france.png";
import primeVideo from "@/assets/entertainment-brands/prime-video-iptv-france.jpg";

import avatarTheWayOfWater from "@/assets/movies/avatar-iptv-france.jpg";
import theOdesy from "@/assets/movies/the-odyssey-iptv-france.jpg";
import deadpoolWolverine from "@/assets/movies/deadpool-iptv-france.jpg";
import dunePartTwo from "@/assets/movies/dune-iptv-france.jpg";
import gladiatorIi from "@/assets/movies/gladiator-iptv-france.jpg";
import insideOut2 from "@/assets/movies/inside-out-iptv-france.jpg";
import johnWickChapter4 from "@/assets/movies/john-wick-iptv-france.jpg";
import oppenheimer from "@/assets/movies/oppenheimer-iptv-france.jpg";

import applePay from "@/assets/payments/apple-pay-iptv-france.webp";
import googlePay from "@/assets/payments/google-pay-iptv-france.webp";
import mastercard from "@/assets/payments/mastercard-iptv-france.webp";
import paypal from "@/assets/payments/paypal-iptv-france.webp";
import visa from "@/assets/payments/visa-iptv-france.webp";

import championsLeague from "@/assets/sports-brands/champions-league-iptv-france.jpg";
import formula1 from "@/assets/sports-brands/formula-1-iptv-france.jpg";
import nba from "@/assets/sports-brands/nba-iptv-france.jpg";
import premierLeague from "@/assets/sports-brands/premier-league-iptv-france.jpg";
import ufc from "@/assets/sports-brands/ufc-iptv-france.jpg";

import betterCallSaul from "@/assets/tv-shows/better-call-saul-iptv-france.jpg";
import breakingBad from "@/assets/tv-shows/breaking-bad-iptv-france.jpg";
import gameOfThrones from "@/assets/tv-shows/game-of-thrones-iptv-france.jpg";
import houseOfTheDragon from "@/assets/tv-shows/house-of-the-dragon-iptv-france.jpg";
import laCasaDePapel from "@/assets/tv-shows/la-casa-de-papel-iptv-france.jpg";
import strangerThings from "@/assets/tv-shows/stranger-things-iptv-france.jpg";

export type SeoKeyword = "informational" | "commercial" | "transactional";

export type SeoImage = {
  src: StaticImageData;
  alt: string;
  title: string;
  keyword: SeoKeyword;
  entity: string;
};

/**
 * French national channels are not invented here. The owner will supply names and logos.
 * Keep these slots so the same grids as the Spain site stay in place.
 */
export type FrenchChannelSlot = {
  id: string;
  label: string;
  category: "Généraliste" | "Sport" | "Info" | "Jeunesse";
};

const SLOT_PLAN: Array<Pick<FrenchChannelSlot, "category">> = [
  { category: "Généraliste" },
  { category: "Généraliste" },
  { category: "Généraliste" },
  { category: "Généraliste" },
  { category: "Sport" },
  { category: "Sport" },
  { category: "Sport" },
  { category: "Info" },
  { category: "Info" },
  { category: "Jeunesse" },
  { category: "Généraliste" },
  { category: "Généraliste" },
  { category: "Sport" },
  { category: "Info" },
];

export const frenchChannelSlots: FrenchChannelSlot[] = SLOT_PLAN.map((slot, index) => {
  const number = String(index + 1).padStart(2, "0");
  return {
    id: `fr-chaine-${number}`,
    label: `Chaîne française ${index + 1}`,
    category: slot.category,
  };
});

/** National channel logos are intentionally empty until the French lineup is provided. */
export const channelLogos: SeoImage[] = [];

export const entertainmentBrands: SeoImage[] = [
  {
    src: netflixBrand,
    alt: "Netflix IPTV France",
    title: "Netflix France",
    keyword: "commercial",
    entity: "Netflix",
  },
  {
    src: primeVideo,
    alt: "Prime Video IPTV France",
    title: "Prime Video France",
    keyword: "commercial",
    entity: "Prime Video",
  },
  {
    src: disneyPlus,
    alt: "Disney+ IPTV France",
    title: "Disney Plus France",
    keyword: "commercial",
    entity: "Disney Plus",
  },
  {
    src: hboMax,
    alt: "HBO Max IPTV France",
    title: "HBO Max France",
    keyword: "commercial",
    entity: "HBO Max",
  },
  {
    src: appleTvPlus,
    alt: "Apple TV IPTV France",
    title: "Apple TV Plus France",
    keyword: "commercial",
    entity: "Apple TV+",
  },
  {
    src: dazn,
    alt: "DAZN IPTV France",
    title: "DAZN France",
    keyword: "commercial",
    entity: "DAZN",
  },
];

export const sportsBrands: SeoImage[] = [
  {
    src: championsLeague,
    alt: "Champions League IPTV France",
    title: "UEFA Champions League",
    keyword: "commercial",
    entity: "UEFA Champions League",
  },
  {
    src: premierLeague,
    alt: "Premier League IPTV France",
    title: "Premier League",
    keyword: "commercial",
    entity: "Premier League",
  },
  {
    src: formula1,
    alt: "Fórmula 1 IPTV France",
    title: "Formula 1",
    keyword: "commercial",
    entity: "Formula 1",
  },
  {
    src: ufc,
    alt: "UFC IPTV France",
    title: "UFC",
    keyword: "commercial",
    entity: "UFC",
  },
  {
    src: nba,
    alt: "NBA IPTV France",
    title: "NBA",
    keyword: "commercial",
    entity: "NBA",
  },
];

const moviePosters: SeoImage[] = [
  {
    src: theOdesy,
    alt: "The Odyssey IPTV France",
    title: "The Odyssey",
    keyword: "informational",
    entity: "The Odyssey",
  },
  {
    src: oppenheimer,
    alt: "Oppenheimer IPTV France",
    title: "Oppenheimer",
    keyword: "informational",
    entity: "Oppenheimer",
  },
  {
    src: dunePartTwo,
    alt: "Dune IPTV France",
    title: "Dune Part Two",
    keyword: "informational",
    entity: "Dune Part Two",
  },
  {
    src: deadpoolWolverine,
    alt: "Deadpool IPTV France",
    title: "Deadpool & Wolverine",
    keyword: "informational",
    entity: "Deadpool & Wolverine",
  },
  {
    src: avatarTheWayOfWater,
    alt: "Avatar IPTV France",
    title: "Avatar The Way of Water",
    keyword: "informational",
    entity: "Avatar The Way of Water",
  },
  {
    src: johnWickChapter4,
    alt: "John Wick IPTV France",
    title: "John Wick Chapter 4",
    keyword: "informational",
    entity: "John Wick Chapter 4",
  },
  {
    src: gladiatorIi,
    alt: "Gladiator IPTV France",
    title: "Gladiator II",
    keyword: "informational",
    entity: "Gladiator II",
  },
  {
    src: insideOut2,
    alt: "Inside Out IPTV France",
    title: "Inside Out 2",
    keyword: "informational",
    entity: "Inside Out 2",
  },
];

const tvShowPosters: SeoImage[] = [
  {
    src: strangerThings,
    alt: "Stranger Things IPTV France",
    title: "Stranger Things",
    keyword: "informational",
    entity: "Stranger Things",
  },
  {
    src: breakingBad,
    alt: "Breaking Bad IPTV France",
    title: "Breaking Bad",
    keyword: "informational",
    entity: "Breaking Bad",
  },
  {
    src: gameOfThrones,
    alt: "Game of Thrones IPTV France",
    title: "Game of Thrones",
    keyword: "informational",
    entity: "Game of Thrones",
  },
  {
    src: houseOfTheDragon,
    alt: "House of the Dragon IPTV France",
    title: "House of the Dragon",
    keyword: "informational",
    entity: "House of the Dragon",
  },
  {
    src: laCasaDePapel,
    alt: "La Casa de Papel IPTV France",
    title: "La Casa de Papel",
    keyword: "informational",
    entity: "La Casa de Papel",
  },
  {
    src: betterCallSaul,
    alt: "Better Call Saul IPTV France",
    title: "Better Call Saul",
    keyword: "informational",
    entity: "Better Call Saul",
  },
];

/** Full VOD strip (movies + series, interleaved for the marquee). */
export const posterImages: SeoImage[] = (() => {
  const mixed: SeoImage[] = [];
  const max = Math.max(moviePosters.length, tvShowPosters.length);
  for (let i = 0; i < max; i += 1) {
    if (moviePosters[i]) mixed.push(moviePosters[i]);
    if (tvShowPosters[i]) mixed.push(tvShowPosters[i]);
  }
  return mixed;
})();

export const featuredSportsImage = sportsBrands[0];

export const paymentMethods: SeoImage[] = [
  {
    src: visa,
    alt: "Visa IPTV France",
    title: "Visa",
    keyword: "commercial",
    entity: "Visa",
  },
  {
    src: mastercard,
    alt: "Mastercard IPTV France",
    title: "Mastercard",
    keyword: "commercial",
    entity: "Mastercard",
  },
  {
    src: paypal,
    alt: "PayPal IPTV France",
    title: "PayPal",
    keyword: "commercial",
    entity: "PayPal",
  },
  {
    src: applePay,
    alt: "Apple Pay IPTV France",
    title: "Apple Pay",
    keyword: "commercial",
    entity: "Apple Pay",
  },
  {
    src: googlePay,
    alt: "Google Pay IPTV France",
    title: "Google Pay",
    keyword: "commercial",
    entity: "Google Pay",
  },
];
