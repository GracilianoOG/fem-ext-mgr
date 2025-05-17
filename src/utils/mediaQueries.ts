import { breakpoints } from "./breakpoints";

export const mediaQueries = {
  mobile: `@media screen and (min-width: ${breakpoints.sm})`,
  tablet: `@media screen and (min-width: ${breakpoints.md})`,
  laptop: `@media screen and (min-width: ${breakpoints.lg})`,
};
