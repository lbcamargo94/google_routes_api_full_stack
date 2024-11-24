import { database } from "@database/connection";
import { ICustomers } from "@interfaces/customers";

const SELECT_CONFIG = {
  id: true,
  customer_id: true,
  email: true,
  name: true,
};

class CreateCustomerModel {
  public async CreateCustomers({
    customer_id,
    email,
    name,
  }: {
    customer_id: number;
    email: string;
    name: string;
  }): Promise<ICustomers> {
    const result = await database.customer.create({
      data: { customer_id, email, name },
      select: { ...SELECT_CONFIG },
    });

    return result;
  }
}

export { CreateCustomerModel };
