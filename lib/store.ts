import { createContext, useContext } from "react";
import { createStore, useStore as useZustandStore } from "zustand";
import { PreloadedStoreInterface } from "./store-provider";

export interface StoreInterface {
  colour: string;
  setColour?: (colour: string) => void;
}

function getDefaultInitialState() {
  return {
    colour: "defaultColour",
  };
}

export type StoreType = ReturnType<typeof initializeStore>;

const storeContext = createContext<StoreType | null>(null);

export const Provider = storeContext.Provider;

export function useStore<T>(selector: (state: StoreInterface) => T) {
  const store = useContext(storeContext);

  if (!store) throw new Error("Store is missing the provider");

  return useZustandStore(store, selector);
}

export function initializeStore(preloadedState: PreloadedStoreInterface) {
  return createStore<StoreInterface>((set, get) => ({
    ...getDefaultInitialState(),
    ...preloadedState,
    setColour: (colour: string) => {
      set((state) => ({
        ...state,
        colour,
      }));
    },
  }));
}
