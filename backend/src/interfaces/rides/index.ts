interface IRides {
  id: string;
  destination: string;
  distance: number;
  driver_id: string;
  duration: string;
  origin: string;
  price: number;
  customer_id: string;
}

interface IEstimateRides {
  origin: {
    latitude: number;
    longitude: number;
  };
  destination: {
    latitude: number;
    longitude: number;
  };
  distance: number;
  duration: string;
  options: {
    id: number;
    name: string;
    description: string;
    vehicle: string;
    review: {
      rating: number;
      comment: string;
    };
    value: number;
  }[];
  routeResponse: {
    distanceMeters: number;
    duration: string;
    startLocation: {
      latLng: {
        latitude: number;
        longitude: number;
      };
    };
    endLocation: {
      latLng: {
        latitude: number;
        longitude: number;
      };
    };
    localizedValues: {
      distance: {
        text: string;
      };
      duration: {
        text: string;
      };
      staticDuration: {
        text: string;
      };
    };
  };
}

export type { IRides, IEstimateRides };
