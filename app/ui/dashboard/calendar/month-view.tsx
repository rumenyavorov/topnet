import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { NextMonth, PrevMonth } from "./buttons";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function MonthView() {
    const daysOfWeek = ["Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота", "Неделя"];

    // State for the current month and year
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());

    // Get current date, year, and month
    const currentDate = new Date();
    const today = new Date().getDate();

    // First day of the month
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    // Adjust the start day to match the local convention (Monday as the first day of the week)
    const startDay = firstDayOfMonth.getDay();
    const adjustedStartDay = startDay === 0 ? 6 : startDay - 1;

    // Last day of the month
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
    const numDays = lastDayOfMonth.getDate();

    // Calculate total cells needed (days + empty cells at the start)
    const totalCells = Math.ceil((numDays + adjustedStartDay) / 7) * 7;

    const formatMonthYear = () => {
        const date = new Date(currentYear, currentMonth);
        // Adjust the 'bg-BG' locale and options as needed for your specific locale requirements
        return date.toLocaleDateString('bg-BG', { year: 'numeric', month: 'long' });
    };

    const handleDayClick = (day: number) => {
        console.log(`Day clicked: ${day}`);
        // Additional logic for when a day is clicked
        toast.success(`Избрахте да направите събитие за: `);
    };

    const isInMonthRange = (day: number) => day > 0 && day <= numDays;

    const goToPrevMonth = () => {
        setCurrentMonth(current => current - 1);
    };

    const goToNextMonth = () => {
        setCurrentMonth(current => current + 1);
    };
    useEffect(() => {
        if (currentMonth < 0) {
            setCurrentMonth(11);
            setCurrentYear(current => current - 1);
        } else if (currentMonth > 11) {
            setCurrentMonth(0);
            setCurrentYear(current => current + 1);
        }
    }, [currentMonth]);

    return (

        <div className="flex flex-col h-full">

            <div className="flex flex-row justify-between p-2">
                <button className="flex items-center justify-center p-2 rounded-md hover:bg-gray-200"
                    onClick={goToPrevMonth}>
                    <ChevronLeftIcon className="w-5 h-5" />
                    <span>Назад</span>
                </button>
                <span className="font-semibold text-lg">{formatMonthYear()}</span>
                <button className="flex items-center justify-center p-2 rounded-md hover:bg-gray-200"
                    onClick={goToNextMonth}>
                    <span>Напред</span>
                    <ChevronRightIcon className="w-5 h-5" />
                </button>
            </div>
            <div className="h-full grid grid-cols-7 gap-4">
                {daysOfWeek.map((day, index) => (
                    <div key={index} className="text-center font-bold">{day}</div>
                ))}

                {[...Array(totalCells)].map((_, index) => {
                    const day = index - adjustedStartDay + 1;
                    const isToday = day === today && currentDate.getMonth() === currentMonth && currentDate.getFullYear() === currentYear;
                    return (
                        <button
                            key={index}
                            className={`border rounded-lg p-4 text-center ${isInMonthRange(day) ? 'bg-gray-50' : 'bg-white'} ${isToday ? 'border-blue-500' : ''}`}
                            onClick={() => isInMonthRange(day) && handleDayClick(day)}
                            disabled={!isInMonthRange(day)}
                        >
                            {isInMonthRange(day) ? day : ''}
                        </button>
                    );
                })}
            </div>
        </div>
    );

}
