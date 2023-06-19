"use client";
import DatePicker from '@/components/DatePicker';
import { useState } from 'react';

export default function DatePickerPage() {
    const [selectedDate, setSelectedDate] = useState<Date | Date[] | null | undefined>(null);
    const [isDatePickerVisible, setIsDatePickerVisible] = useState(true);

    const handleDateChange = (selectedDate: Date | Date[] | null | undefined) => {
        setSelectedDate(selectedDate);
    };

    return (
        <div>
            <div className="flex justify-center gap-2">
                <button className={`flex justify-center items-center order-1 flex-grow-0 bg-white hover:bg-gray-200 text-primary050 py-2 px-4 rounded-full ${isDatePickerVisible ? 'shadow-md' : ''}`} onClick={() => setIsDatePickerVisible(true)}>Date</button>
                <button className={`flex justify-center items-center order-1 flex-grow-0 bg-white hover:bg-gray-200 text-primary050 py-2 px-4 rounded-full ${!isDatePickerVisible ? 'shadow-md' : ''}`} onClick={() => setIsDatePickerVisible(false)}>Période flexible</button>
            </div>
            {isDatePickerVisible && (
                <div className="flex justify-center mt-8">
                    <DatePicker value={selectedDate} onChange={handleDateChange} />
                </div>
            )}
        </div>
    );
}
