import React, {useEffect, useRef, useState} from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/airbnb.css';
import 'tailwindcss/tailwind.css';
import {DatePickerProps} from '@/interfaces/DatePicker.interface';
import {French} from "flatpickr/dist/l10n/fr";

const DatePicker: React.FC<DatePickerProps> = ({onChange}) => {
    const inputRef = useRef<Flatpickr>(null);
    const [value, setValue] = useState<string[] | null>(null);
    const [selectedDate, setSelectedDate] = useState<string[] | null>(null);

    useEffect(() => {
        onChange(selectedDate);
    }, [onChange, selectedDate]);

    const handleDateChange = (selectedDates: any) => {
        if (!selectedDates) return;

        const formattedDates = [
            formatDate(selectedDates[0]),
            formatDate(selectedDates[1]),
        ]

        setSelectedDate(formattedDates);
        onChange(formattedDates);
    };

    const handleReset = (e: React.MouseEvent) => {
        e.preventDefault();
        onChange(null);
        if (inputRef.current) {
            inputRef.current.flatpickr.clear();
        }
    };

    const formatDate = (date: string) => {
        const rawDate = new Date(date);
        const year = rawDate.getFullYear();
        const months = ("0" + (rawDate.getMonth() + 1)).slice(-2);
        const days = ("0" + rawDate.getDate()).slice(-2);
        return `${year}-${months}-${days}`;
    }

    return (
        <div className="flex flex-col items-center justify-start">
                <Flatpickr
                options={{
                    dateFormat: 'd/m/Y',
                    altFormat: 'd/m/Y',
                    mode: 'range',
                    allowInput: false,
                    locale: French,
                    inline: true,
                    minDate: new Date(),
                }}
                value={value || undefined}
                onChange={handleDateChange}
                ref={inputRef}
                className="hidden"
            />
            <button className="flex justify-center w-full mt-8 underline text-neutral-100"
                    onClick={handleReset}>Réinitialiser
            </button>
        </div>
    );
};

export default DatePicker;
