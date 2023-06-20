import {StaticImageData} from "next/image";

export interface IQuestionItem {
    id?: number;
    question?: string;
    answer?: string;
    image?: StaticImageData;
}

export interface IResultItem {
    id: number;
    question: string;
    answer: string;
    choice: string;
}