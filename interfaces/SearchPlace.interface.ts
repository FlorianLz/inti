
export interface ISearchPlace {
    id: number;
    name:string;
    city: string,
    country: string
    coordinates: [number, number];
    distanceFromParis: string;
    fromWorldChoice: boolean;
}
