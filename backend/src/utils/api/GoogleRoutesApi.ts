import { apiInstance } from "@config/api/apiInstance";
import { ApiError } from "@erro/index";
import { AxiosInstance } from "axios";

class GoogleRoutesApi {
  private api: AxiosInstance;

  constructor() {
    this.api = apiInstance;
  }

  async getRoutes(origin: string, destination: string) {
    const data = {
      origin: { address: origin },
      destination: { address: destination },
      travelMode: "DRIVE",
      routingPreference: "TRAFFIC_AWARE_OPTIMAL",
      computedAlternativeRoutes: true,
      trafficModel: "BEST_GUESS",
    };

    const response = await this.api
      .post("/computeRoutes", data, {
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": process.env.GOOGLE_API_KEY,
          "X-Goog-FieldMask": "*",
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
        throw new ApiError(`${error.response.message}`, error.response.status);
      });

    return response;
  }
}

export { GoogleRoutesApi };
