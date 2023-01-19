export interface IMockDataTeam {
  id: number;
  name: string;
  email: string;
  age: number;
  phone: string;
  access: string;
}

export interface Properties {
  name: string;
}

export interface Geometry {
  type: string;
  coordinates: any[][][];
}

export interface Feature {
  type: string;
  properties: Properties;
  geometry: Geometry;
  id: string;
}

export interface IGeoFeature {
  type: string;
  features: Feature[];
}
