export interface getWetherProps {
  cityId: number;
  apiKey?: string;
  type?: keyof typeof TemperatureType
}

export enum TemperatureType {
  metric = 'metric',
  imperial = 'imperial'
}