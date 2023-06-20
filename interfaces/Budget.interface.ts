import {StaticImageData} from "next/image";


export interface BudgetItem {
    name: string;
    image: StaticImageData;
    value: boolean;
    range: [number, number];
    desc: string;
}