import {StaticImageData} from "next/image";

export interface IQuestionItem {
    id?: number;
    question?: string;
    name: string;
    answer?: string;
    image?: StaticImageData;
}

export interface ISwiperResultItem {
    id: number;
    question: string;
    name: string;
    answer: string;
    choice: boolean;
}

export interface IQuestionSwiperProps {
    questions: IQuestionItem[];
    onEnd?: (result: ISwiperResultItem[]) => void;
}