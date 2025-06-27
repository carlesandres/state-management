import { createContext, useContext } from "react";
import { createStore, useStore as useZustandStore } from "zustand";

export interface StoreInterface {
  colour: string;
  setColour?: (colour: string) => void;
  size?: string;
  setSize?: (size: string) => void;
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

export function initializeStore(preloadedState: StoreInterface) {
  return createStore<StoreInterface>((set) => ({ 
    ...getDefaultInitialState(),
    ...preloadedState,
    setColour: (colour: string) => {
      set((state) => ({
        ...state,
        colour,
      }));
    },
    setSize: (size: string) => {
      set((state) => ({
        ...state,
        size,
      }));
    },
  }));
}
