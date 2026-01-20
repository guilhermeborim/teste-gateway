import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { UserInterface } from "../interfaces/user";

export interface SetSessionParams {
  signIn: {
    user: UserInterface;
    token: string;
    __typename: string;
  };
}

export interface UserStore {
  signIn: {
    user: UserInterface | null;
    token: string | null;
    __typename: string | null;
  };

  setSession: (sessionData: SetSessionParams) => void;
  logout: () => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      signIn: {
        user: null,
        token: null,
        __typename: null,
      },

      logout: () =>
        set({ signIn: { user: null, token: null, __typename: null } }),
      setSession: (sessionData) => {
        set({ signIn: sessionData.signIn });
      },
    }),
    {
      name: "gateway-auth",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
