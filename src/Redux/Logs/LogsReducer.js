const LogsInitState = {
  isAuth: false,
  User: {},
};

export const LogsReducer = (state = LogsInitState, action) => {
  switch (action.type) {
    case "HANDLE_LOGIN":
      if (action.payload) {
        return {
          isAuth: true,
          User: action.payload,
        };
      } else return state;

    case "HANDLE_LOGOUT":
      return {
        isAuth: false,
        User: {},
      };

    default:
      return state;
  }
};
