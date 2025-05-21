interface ITheme {
  colors: {
    bodyColor: string;
    bodyGrad: string;
    btnColor: string;
    cardBgColor: string;
    cardTitleColor: string;
    cardDescColor: string;
    emptyMsgColor: string;
    filterBtnBgColor: string;
    filterBtnBgColorSel: string;
    filterBtnColorSel: string;
    filterBtnColorSelHover: string;
    focusColor: string;
    headerBgColor: string;
    removeBtnBorderColor: string;
    removeBtnBgColor: string;
    removeBtnBgColorHover: string;
    removeBtnBorderColorHover: string;
    removeBtnColorHover: string;
    removeBtnColorFocus: string;
    titleColor: string;
    togglerBgColor: string;
    togglerActiveBgColor: string;
    togglerActiveBgColorHover: string;
    togglerKnobBgColor: string;
    themeBtnBgColor: string;
    themeBtnBgColorHover: string;
  };
  boxShadow: string;
}

const lightTheme: ITheme = {
  colors: {
    bodyColor: "var(--neutral-200)",
    bodyGrad: "var(--light-gradient)",
    btnColor: "var(--neutral-900)",
    cardBgColor: "#fff",
    cardTitleColor: "var(--neutral-900)",
    cardDescColor: "var(--neutral-700)",
    emptyMsgColor: "var(--neutral-900)",
    filterBtnBgColor: "var(--neutral-0)",
    filterBtnBgColorSel: "var(--red-700)",
    filterBtnColorSel: "var(--neutral-0)",
    filterBtnColorSelHover: "var(--red-500)",
    focusColor: "var(--red-500)",
    headerBgColor: "var(--neutral-0)",
    removeBtnBorderColor: "var(--neutral-300)",
    removeBtnBgColor: "var(--neutral-0)",
    removeBtnBgColorHover: "var(--red-700)",
    removeBtnBorderColorHover: "var(--red-700)",
    removeBtnColorHover: "var(--neutral-0)",
    removeBtnColorFocus: "var(--neutral-100)",
    titleColor: "var(--neutral-900)",
    togglerBgColor: "var(--neutral-300)",
    togglerActiveBgColor: "var(--red-700)",
    togglerActiveBgColorHover: "var(--red-500)",
    togglerKnobBgColor: "var(--neutral-0)",
    themeBtnBgColor: "var(--neutral-100)",
    themeBtnBgColorHover: "var(--neutral-300)",
  },
  boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
};

const darkTheme: ITheme = {
  colors: {
    bodyColor: "var(--neutral-800)",
    bodyGrad: "var(--dark-gradient)",
    btnColor: "var(--neutral-0)",
    cardBgColor: "var(--neutral-800)",
    cardTitleColor: "var(--neutral-0)",
    cardDescColor: "var(--neutral-300)",
    emptyMsgColor: "var(--neutral-0)",
    filterBtnBgColor: "var(--neutral-700)",
    filterBtnBgColorSel: "var(--red-400)",
    filterBtnColorSel: "var(--neutral-900)",
    filterBtnColorSelHover: "var(--red-500)",
    focusColor: "var(--red-400)",
    headerBgColor: "var(--neutral-800)",
    removeBtnBorderColor: "var(--neutral-600)",
    removeBtnBgColor: "var(--neutral-800)",
    removeBtnBgColorHover: "var(--red-400)",
    removeBtnBorderColorHover: "var(--red-400)",
    removeBtnColorHover: "var(--neutral-900)",
    removeBtnColorFocus: "var(--neutral-600)",
    titleColor: "var(--neutral-0)",
    togglerBgColor: "var(--neutral-600)",
    togglerActiveBgColor: "var(--red-400)",
    togglerActiveBgColorHover: "var(--red-500)",
    togglerKnobBgColor: "var(--neutral-0)",
    themeBtnBgColor: "var(--neutral-700)",
    themeBtnBgColorHover: "var(--neutral-600)",
  },
  boxShadow: "0 0 1px var(--neutral-0)",
};

export { lightTheme, darkTheme };
export type { ITheme };
