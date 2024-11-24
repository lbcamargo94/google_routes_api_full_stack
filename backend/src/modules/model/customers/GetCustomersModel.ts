import { database } from "@database/connection";
import { ICustomers } from "@interfaces/customers";

class GetCustomerModel {
  public async GetCustomerByEmail({
    email,
  }: {
    email: string;
  }): Promise<ICustomers[]> {
    const result: ICustomers[] = await database.$queryRaw`
      -- SELECT
      select distinct
      cus.id,
      cus.email,
      cus.name,
      cus.customer_id
      -- FROM
      from customers cus
      -- WHERE
      where cus.email::text = ${email}
    `;

    return result;
  }
}

export { GetCustomerModel };
