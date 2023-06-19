import React, { useEffect, useRef, useState } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/airbnb.css';
import 'tailwindcss/tailwind.css';
import { DatePickerProps } from '@/interfaces/DatePicker.interface';
import { French } from "flatpickr/dist/l10n/fr";

const DatePicker: React.FC<DatePickerProps> = ({ value, onChange }) => {
    const inputRef = useRef<Flatpickr>(null);
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {}, []);

    const handleDateChange = (selectedDates: Date | Date[] | null | undefined) => {
        onChange(selectedDates);
    };

    const handleReset = () => {
        onChange(null);
        if (inputRef.current) {
            inputRef.current.flatpickr.clear();
        }
    };

    return (
        <div>
            {isOpen && (
                <>
                    <Flatpickr
                        options={{
                            dateFormat: 'd/m/Y',
                            mode: 'range',
                            allowInput: false,
                            locale: French,
                            inline: true
                        }}
                        value={value}
                        onChange={handleDateChange}
                        ref={inputRef}
                        className="hidden"
                    />
                    <button className="flex justify-center w-full mt-8 underline text-neutral100" onClick={handleReset}>Réinitialiser</button>
                </>
            )}
        </div>
    );
};

export default DatePicker;
