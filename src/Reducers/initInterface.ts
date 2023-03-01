export interface IState {
  user: {
    isLoggedIn: boolean;
    rules: null | string;
    userId: null | string;
    username: null | string;
  };
  options: {
    isDark: boolean;
    isHome: boolean;
    isMap: boolean;
  };
}
