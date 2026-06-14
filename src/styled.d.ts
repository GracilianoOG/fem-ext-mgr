/* eslint-disable @typescript-eslint/no-empty-object-type */

import "styled-components";
import type { ThemeValues } from "./utils/themes";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeValues {}
}
