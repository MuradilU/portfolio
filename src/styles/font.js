import { css } from "styled-components"

import MontserratThin from "@fonts/Montserrat/Montserrat-Thin.ttf"
import MontserratExtraLight from "@fonts/Montserrat/Montserrat-ExtraLight.ttf"
import MontserratLight from "@fonts/Montserrat/Montserrat-Light.ttf"
import MontserratRegular from "@fonts/Montserrat/Montserrat-Regular.ttf"
import MontserratMedium from "@fonts/Montserrat/Montserrat-Medium.ttf"
import MontserratSemiBold from "@fonts/Montserrat/Montserrat-SemiBold.ttf"
import MontserratBold from "@fonts/Montserrat/Montserrat-Bold.ttf"
import MontserratExtraBold from "@fonts/Montserrat/Montserrat-ExtraBold.ttf"
import MontserratBlack from "@fonts/Montserrat/Montserrat-Black.ttf"

import MontserratThinItalic from "@fonts/Montserrat/Montserrat-ThinItalic.ttf"
import MontserratExtraLightItalic from "@fonts/Montserrat/Montserrat-ExtraLightItalic.ttf"
import MontserratLightItalic from "@fonts/Montserrat/Montserrat-LightItalic.ttf"
import MontserratRegularItalic from "@fonts/Montserrat/Montserrat-Italic.ttf"
import MontserratMediumItalic from "@fonts/Montserrat/Montserrat-MediumItalic.ttf"
import MontserratSemiBoldItalic from "@fonts/Montserrat/Montserrat-SemiBoldItalic.ttf"
import MontserratBoldItalic from "@fonts/Montserrat/Montserrat-BoldItalic.ttf"
import MontserratExtraBoldItalic from "@fonts/Montserrat/Montserrat-ExtraBoldItalic.ttf"
import MontserratBlackItalic from "@fonts/Montserrat/Montserrat-BlackItalic.ttf"

const montserratNormal = {
  100: MontserratThin,
  200: MontserratExtraLight,
  300: MontserratLight,
  400: MontserratRegular,
  500: MontserratMedium,
  600: MontserratSemiBold,
  700: MontserratBold,
  800: MontserratExtraBold,
  900: MontserratBlack,
}

const montserratItalic = {
  100: MontserratThinItalic,
  200: MontserratExtraLightItalic,
  300: MontserratLightItalic,
  400: MontserratRegularItalic,
  500: MontserratMediumItalic,
  600: MontserratSemiBoldItalic,
  700: MontserratBoldItalic,
  800: MontserratExtraBoldItalic,
  900: MontserratBlackItalic,
}

const montserrat = {
  name: "Montserrat",
  normal: montserratNormal,
  italic: montserratItalic,
}

const createFontFaces = (family = montserrat, style) => {
  let fontfaces = ""

  for (const [weight, font] of Object.entries(family[style])) {
    fontfaces += `
            @font-face {
                font-family: ${family.name};
                src: url(${font}) format('truetype');
                font-weight: ${weight};
                font-style: ${style};
                font-display: auto;
            }
        `
  }

  return fontfaces
}

const montserratNormalFontFaces = createFontFaces(montserrat, "normal")
const montserratItalicFontFaces = createFontFaces(montserrat, "italic")

const Font = css`
  ${montserratNormalFontFaces + montserratItalicFontFaces}
`

export default Font
