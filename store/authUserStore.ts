import { create } from "zustand";

type UserAuthType = {
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
type UserAuthState = {
  user: UserAuthType | undefined;
  saveUserDetails: (user: UserAuthType) => void;
};
export const useAuthUserStore = create<UserAuthState>((set) => ({
  user: undefined,
  saveUserDetails: (user: UserAuthType) =>
    set(() => ({
      user: user,
    })),
  logout: () =>
    set((state) => ({
      user: undefined,
    })),
}));
