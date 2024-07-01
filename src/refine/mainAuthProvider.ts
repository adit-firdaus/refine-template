import { AuthProvider } from "@refinedev/core";
const mainAuthProvider: AuthProvider = {
  login: async (params) => {
    return {
      success: true,
      redirectTo: "/",
    };
  },
  logout: async (params) => {
    return {
      success: true,
      redirectTo: "/",
    };
  },
  check: async (params) => {
    return {
      authenticated: true,
      permissions: ["*"],
    };
  },
  onError: async (error) => {
    return error;
  },
};

export default mainAuthProvider;
