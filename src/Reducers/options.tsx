export const initialState = {
  isDark: false,
  isHome: true,
  isMap: false,
};

export const changeIsHome = (data: any) => {
  return {
    type: "CHANGE_IS_HOME",
    data,
  };
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "CHANGE_IS_HOME":
      return {
        ...state,
        isHome: action.data.isHome,
      };

    default:
      return state;
  }
};

export default reducer;
