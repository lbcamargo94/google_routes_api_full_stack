import type { IEstimateRides, IRides } from "@/interface/IRides";
import { create } from "zustand";

type RidesStore = {
  ride: IRides | null;
  setRides: (ride: IRides) => void;
  crearRides: () => void;
  estimate: IEstimateRides | null;
  setEstimate: (estimate: IEstimateRides) => void;
  clearEstimate: () => void;
};

const ridesStore = create<RidesStore>((set) => ({
  ride: null,
  setRides: (ride) => set({ ride: ride }),
  crearRides: () => set({ ride: {} as IRides }),
  estimate: null,
  setEstimate: (estimate) => set({ estimate: estimate }),
  clearEstimate: () => set({ estimate: null }),
}));

export { ridesStore };
