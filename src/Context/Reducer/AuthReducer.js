export const initialState = {
  user: null,
  loading: false,
  error: null,
  isAuthenticated: false,
  token: null,
};

export const AuthReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ACCESS_TOKEN":
      return {
        ...state,
        user: payload.user,
        token: payload.token,
        isAuthenticated: true,
      };
    case "LOGIN_START":
    case "REGISTER_START":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
    case "REGISTER_SUCCESS":
      return {
        ...state,
        user: payload.user,
        loading: false,
        error: null,
        isAuthenticated: true,
        token: payload.token,
      };
    case "LOGIN_FAILURE":
    case "REGISTER_FAILURE":
      return {
        ...state,
        loading: false,
        error: payload?.error,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        loading: false,
        error: null,
        isAuthenticated: false,
        token: null,
      };

    default:
      return state;
  }
};
