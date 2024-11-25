import type { IDrivers } from "@/interface/IDrivers";
import { create } from "zustand";

const driversStore = create((state) => ({
  driver: {} as IDrivers,

  updateCustomer: (driver: IDrivers) => {
    state({ driver: driver });
  },
}));

export { driversStore };
