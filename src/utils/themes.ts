interface ITheme {
  colors: {
    bodyColor: string;
    bodyGrad: string;
    btnBgColor: string;
    btnColor: string;
    cardBgColor: string;
    cardTitleColor: string;
    cardDescColor: string;
    emptyMsgColor: string;
    filterBtnBgColorSel: string;
    filterBtnColorSel: string;
    filterBtnColorSelHover: string;
    headerBgColor: string;
    removeBtnBorderColor: string;
    removeBtnBgColorHover: string;
    removeBtnBorderColorHover: string;
    removeBtnColorHover: string;
    titleColor: string;
    togglerBgColor: string;
    togglerActiveBgColor: string;
    togglerActiveBgColorHover: string;
    togglerKnobBgColor: string;
    themeBtnBgColor: string;
    themeBtnBgColorHover: string;
  };
}

const lightTheme: ITheme = {
  colors: {
    bodyColor: "var(--neutral-200)",
    bodyGrad: "var(--light-gradient)",
    btnBgColor: "var(--neutral-0)",
    btnColor: "var(--neutral-900)",
    cardBgColor: "#fff",
    cardTitleColor: "var(--neutral-900)",
    cardDescColor: "var(--neutral-700)",
    emptyMsgColor: "var(--neutral-900)",
    filterBtnBgColorSel: "var(--red-700)",
    filterBtnColorSel: "var(--neutral-0)",
    filterBtnColorSelHover: "var(--red-500)",
    headerBgColor: "var(--neutral-0)",
    removeBtnBorderColor: "var(--neutral-300)",
    removeBtnBgColorHover: "var(--red-700)",
    removeBtnBorderColorHover: "var(--red-700)",
    removeBtnColorHover: "var(--neutral-0)",
    titleColor: "var(--neutral-900)",
    togglerBgColor: "var(--neutral-300)",
    togglerActiveBgColor: "var(--red-700)",
    togglerActiveBgColorHover: "var(--red-500)",
    togglerKnobBgColor: "var(--neutral-0)",
    themeBtnBgColor: "var(--neutral-100)",
    themeBtnBgColorHover: "var(--neutral-300)",
  },
};

const darkTheme: ITheme = {
  colors: {
    bodyColor: "var(--neutral-800)",
    bodyGrad: "var(--dark-gradient)",
    btnBgColor: "var(--neutral-700)",
    btnColor: "var(--neutral-0)",
    cardBgColor: "var(--neutral-800)",
    cardTitleColor: "var(--neutral-0)",
    cardDescColor: "var(--neutral-300)",
    emptyMsgColor: "var(--neutral-900)",
    filterBtnBgColorSel: "var(--red-400)",
    filterBtnColorSel: "var(--neutral-900)",
    filterBtnColorSelHover: "var(--red-500)",
    headerBgColor: "var(--neutral-800)",
    removeBtnBorderColor: "var(--neutral-600)",
    removeBtnBgColorHover: "var(--red-700)",
    removeBtnBorderColorHover: "var(--red-700)",
    removeBtnColorHover: "var(--neutral-0)",
    titleColor: "var(--neutral-0)",
    togglerBgColor: "var(--neutral-600)",
    togglerActiveBgColor: "var(--red-400)",
    togglerActiveBgColorHover: "var(--red-500)",
    togglerKnobBgColor: "var(--neutral-0)",
    themeBtnBgColor: "var(--neutral-700)",
    themeBtnBgColorHover: "var(--neutral-600)",
  },
};

export { lightTheme, darkTheme };
