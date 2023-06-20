"use client"
import TinderCard from "react-tinder-card";
import Image from "next/image";
import planeImage from "@/public/images/plane.png";
import carImage from "@/public/images/car.png";
import trainImage from "@/public/images/train.png";
import {useEffect, useState} from "react";
import {IQuestionItem, IResultItem} from "@/interfaces/Questions.interface";

export default function SwipePage() {
    const [questions, setQuestions] = useState<IQuestionItem[]>([
        {
            id: 1,
            question: "Tu veux partir comment ?",
            answer: "Avion",
            image: planeImage
        },
        {
            id: 2,
            question: "Tu veux partir comment ?",
            answer: "Voiture",
            image: carImage
        },
        {
            id: 3,
            question: "Tu veux partir comment ?",
            answer: "Train",
            image: trainImage
        },

    ]);
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [actualQuestion, setActualQuestion] = useState<IQuestionItem>({
            id: 1,
            question: "Tu veux partir comment ?",
            answer: "Avion",
            image: planeImage
        });
    const [results, setResults] = useState<IResultItem[]>([]);

    const onSwipe = (direction: string) => {
        let res = [...results];
        console.log(actualQuestion)
        res.push({
            id: actualQuestion.id ?? currentQuestion,
            question: actualQuestion.question ?? '',
            answer: actualQuestion.answer ?? '',
            choice: direction === 'right' ? 'yes' : direction === 'left' ? 'no' : 'equal'
        });
        setResults(res);
        setTimeout(() => {
            setCurrentQuestion(currentQuestion + 1);
        },200)
    }


    useEffect(() => {
        setActualQuestion(questions.find(question => question.id === currentQuestion) ?? {});
        if (currentQuestion === questions.length + 1) {
            console.log(results);
        }
    }, [currentQuestion])

    return (
        <div className="container mx-auto p-4 h-[100vh] overflow-hidden">
            {currentQuestion <= questions.length ? <h1 className="text-2xl">{actualQuestion.question}</h1> : null}
            <div className="flex flex-col choiceContainer justify-between">
                {questions.map(question => (<div key={question.id}>
                        {currentQuestion == question.id ?
                            <TinderCard onSwipe={onSwipe}  preventSwipe={['up']}
                                        className="h-full swipe">
                                {currentQuestion <= questions.length ?
                                    <Image
                                        className={currentQuestion === question.id ? "w-full h-full object-cover rounded-xl" : "w-full h-full object-cover rounded-xl d-none"}
                                        src={actualQuestion.image ?? '/'}
                                        alt="" width={100} height={100} loading="lazy"/> : null}
                            </TinderCard> : null}</div>
                ))
                }
                <div>
                    {currentQuestion <= questions.length ?
                        <>
                            <h2 className="py-3 text-2xl">{actualQuestion.answer}</h2>

                            <div className="w-full flex justify-around">
                                <button className="rounded-lg p-2 w-16 h-16 shadow-2xl"
                                        onClick={() => onSwipe('left')}>X
                                </button>
                                <button className="rounded-lg p-2 w-16 h-16 shadow-2xl"
                                        onClick={() => onSwipe('down')}>=
                                </button>
                                <button className="rounded-lg p-2 w-16 h-16 shadow-2xl"
                                        onClick={() => onSwipe('right')}>V
                                </button>
                            </div>
                        </> : <h1>Fin</h1>}
                </div>
            </div>
        </div>
    )
}