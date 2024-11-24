import { database } from "@database/connection";

class GetDriversModel {
  public async GetDriverByDriverId({ driver_id }: { driver_id: number }) {
    const result = await database.$queryRaw`
    -- SELECT
    select distinct
    dv.id,
    dv.name,
    dv.destination,
    dv.vehicle,
    dv.rating,
    dv.minimum_distance,
    dv.driver_id
    -- FROM
    from drives dv
    -- WHERE
    where dv.driver_id = ${driver_id}
    `;

    return result;
  }

  public async GetAllDrivers() {
    const result = await database.driver.findMany({
      select: {
        id: true,
        description: true,
        driver_id: true,
        minimum_distance: true,
        name: true,
        rating: true,
        vehicle: true,
        assessment: {
          select: {
            id: true,
            comment: true,
            evaluation_rate: true,
          },
        },
      },
    });

    return result;
  }
}

export { GetDriversModel };
