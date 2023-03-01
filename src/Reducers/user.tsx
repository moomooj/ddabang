export const initialState = {
  isLoggedIn: false,
  userId: null,
  username: null,
  rules: null,
};

export const loginAction = (data: any) => {
  return {
    type: "LOG_IN",
    data,
  };
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        isLoggedIn: true,
        userId: action.data.userId,
        username: action.data.username,
        rules: action.data.rules,
      };

    default:
      return state;
  }
};

export default reducer;
