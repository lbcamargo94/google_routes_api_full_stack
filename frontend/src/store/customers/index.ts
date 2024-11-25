import type { ICustomers } from "@/interface/ICustomers";
import { create } from "zustand";

const customersStore = create((state) => ({
  customer: {} as ICustomers,

  updateCustomer: (customer: ICustomers) => {
    state({ customer: customer });
  },
}));

export { customersStore };
