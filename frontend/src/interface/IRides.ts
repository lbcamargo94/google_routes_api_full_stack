interface IRides {
  id: number;
  destination: string;
  distance: number;
  duration: number;
  origin: string;
  price: number;
  driver: {
    id: number;
    name: string;
  };
  customer: {
    id: number;
    name: string;
  };
}

interface IEstimateRides {
  origin_name: string;
  destination_name: string;
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
    polyline: {
      encodedPolyline: string;
    };
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
