"use client"
import TinderCard from "react-tinder-card";
import Image from "next/image";
import {useEffect, useState} from "react";
import {IQuestionItem, IQuestionSwiperProps, ISwiperResultItem} from "@/interfaces/Questions.interface";

export default function Swiper(props: IQuestionSwiperProps) {
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [actualQuestion, setActualQuestion] = useState<IQuestionItem | null>(props.questions[0]);
    const [results, setResults] = useState<ISwiperResultItem[]>([]);

    const onSwipe = (direction: string) => {
        if (!actualQuestion) return;

        setResults([
            {
                id: actualQuestion.id ?? currentQuestion,
                question: actualQuestion.question ?? '',
                answer: actualQuestion.answer ?? '',
                name: actualQuestion.name ?? '',
                choice: direction !== 'left'
            },
            ...results,
        ]);

        setTimeout(() => {
            setCurrentQuestion(currentQuestion + 1);
        }, 200)
    }


    useEffect(() => {
        setActualQuestion(props.questions.find(question => question.id === currentQuestion) ?? null);
        if (currentQuestion === props.questions.length + 1 && props.onEnd) {
            props.onEnd(results);
        }
    }, [currentQuestion])

    return (
        <>
            {actualQuestion && <div className="h-full">
                <div className="h-full flex flex-col justify-between">
                    <div className='flex-grow relative'>
                        {props.questions.map(question => (
                            <>
                                {currentQuestion == question.id &&
                                    <TinderCard key={question.id} onSwipe={onSwipe} preventSwipe={['up']}
                                                className="absolute w-full h-full overflow-hidden rounded-xl">
                                        {currentQuestion <= props.questions.length ?
                                            <Image
                                                className={"w-full h-full absolute top-0 left-0 object-cover object-center"}
                                                src={actualQuestion.image ?? '/'}
                                                alt="" width={100} height={100} loading="lazy"/> : null}
                                    </TinderCard>}
                            </>
                        ))
                        }
                    </div>
                    <div>
                        <h2 className="py-3 title-s">{actualQuestion.answer}</h2>
                        <div className="w-full flex justify-around">
                            <button className="rounded-2xl p-2 w-16 h-16 text-secondary-300 font-bold text-base shadow-md"
                                    onClick={() => onSwipe('left')}>X
                            </button>
                            <button className="rounded-2xl p-2 w-16 h-16 text-secondary-300 font-bold text-base shadow-md"
                                    onClick={() => onSwipe('down')}>=
                            </button>
                            <button className="rounded-2xl p-2 w-16 h-16 text-secondary-300 font-bold text-base shadow-md"
                                    onClick={() => onSwipe('right')}>V
                            </button>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    )
}