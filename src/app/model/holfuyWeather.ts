export interface HolfuyWeather {
    stationId: number;
    stationName: string;
    dateTime: string;
    wind: HolfuyWind;
    humidity: number;
    pressure: number;
    temperature: number;
}

export interface HolfuyWind {
    speed: number;
    gust: number;
    min: number;
    unit: string;
    direction: number;
}