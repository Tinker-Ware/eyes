import {
  cyan500, cyan700,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullWhite, fullBlack,
} from "material-ui/styles/colors";
import {fade} from "material-ui/utils/colorManipulator";
import spacing from "material-ui/styles/spacing";

export default {
  spacing: spacing,
  fontFamily: "SFText-Regular",
  borderRadius: 2,
  palette: {
    primary1Color: "rgb(47,169,182)",
    primary2Color: cyan700,
    primary3Color: grey400,
    accent1Color: "rgb(226, 34, 59)",
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: fullWhite,
    secondaryTextColor: fade(darkBlack, 0.54),
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
  appBar: {
    color: "rgb(45,110,148)"
  },
  raisedButton: {
    disabledColor: "rgba(47,169,182,.46)",
    disabledTextColor: fullWhite
  },
  stepper: {
    textColor: fullWhite,
    disabledTextColor: grey400
  },
  tabs: {
    backgroundColor: "rgb(45,110,148)"
  },
  textField: {
    floatingLabelColor: fullWhite,
  }
};
