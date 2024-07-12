import { create } from "zustand";

export type UserAuthType = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
  refreshToken: string;
};
type UserCreds = {
  username: string;
  password: string;
};
type UserAuthState = {
  user: UserAuthType | undefined;
  onboarded: boolean;
  userCreds: UserCreds;
  remember: boolean;
  saveUserDetails: (user: UserAuthType) => void;
  logout: () => void;
  setOnboarded: () => void;
  setRemember: (boolean: boolean) => void;
  saveRemeber: (user: UserCreds) => void;
};
export const useAuthUserStore = create<UserAuthState>((set) => ({
  user: undefined,
  onboarded: false,
  userCreds: {
    username: "",
    password: "",
  },
  remember: false,
  saveUserDetails: (user: UserAuthType) =>
    set(() => ({
      user: user,
    })),
  saveRemeber: (user: UserCreds) =>
    set((state) => ({
      userCreds: user,
    })),
  logout: () =>
    set(() => ({
      user: undefined,
    })),
  setOnboarded: () =>
    set(() => ({
      onboarded: true,
    })),
  setRemember: (val: boolean) =>
    set((state) => ({
      remember: val,
    })),
}));
