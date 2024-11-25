import type { IRides } from "@/interface/IRides";
import { create } from "zustand";

type RidesStore = {
  ride: IRides;
  updateRides: () => void;
};

const ridesStore = create<RidesStore>((set) => ({
  ride: {} as IRides,
  updateRides: () =>
    set((state: RidesStore) => ({
      ride: state.ride,
    })),
}));

export { ridesStore };
