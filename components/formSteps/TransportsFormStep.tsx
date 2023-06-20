import {useContext, useEffect, useState} from "react";
import {FormStateContext} from "@/components/MultiStepsForm";
import {Back} from "@/components/Back";
import ButtonComponent from "@/components/Button";
import planeImage from "@/public/images/plane.png";
import carImage from "@/public/images/car.png";
import trainImage from "@/public/images/train.png";
import Swiper from "@/components/Swiper";
import {IQuestionItem, ISwiperResultItem} from "@/interfaces/Questions.interface";

export const TransportsFormStep = (props: any) => {
    const [fieldValue, setFieldValue] = useState<ISwiperResultItem[] | null>(null);
    const form = useContext(FormStateContext);
    const questions: IQuestionItem[] = [
        {
            id: 1,
            question: "Tu veux partir comment ?",
            answer: "Avion",
            image: planeImage,
            name: 'plane'
        },
        {
            id: 2,
            question: "Tu veux partir comment ?",
            answer: "Voiture",
            image: carImage,
            name: 'car'
        },
        {
            id: 3,
            question: "Tu veux partir comment ?",
            answer: "Train",
            image: trainImage,
            name: 'train'
        }];


    useEffect(() => {
        form.steps[props.stepIndex].fields = [
            {
                name: 'transports',
                value: fieldValue
            }
        ]
    }, [fieldValue])

    const handleEnd = (results: ISwiperResultItem[]) => {
        setFieldValue(results);
        props.next();
    }

    return (
        <div className="h-full flex flex-col justify-between">
            <div>
                <Back/>
                <h1 className='title-l mb-6'>Tu veux partir comment ?</h1>
            </div>
            <div className='flex-grow flex flex-col justify-between'>
                <Swiper questions={questions} onEnd={(results => handleEnd(results))}/>
            </div>
        </div>
    )
}