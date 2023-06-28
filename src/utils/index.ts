import { Episode } from "../types";

export const toRomanNumeral = (num: number) => {
  switch (num) {
    case 0:
      return "";
    case 1:
      return "I";
    case 2:
      return "II";
    case 3:
      return "III";
    case 4:
      return "IV";
    case 5:
      return "V";
    case 6:
      return "VI";
  }
};

export const getEpisodeDisplayTitle = (episode: Episode): string =>
  `Episode ${toRomanNumeral(episode.episode_id)} - ${episode.title}`;
