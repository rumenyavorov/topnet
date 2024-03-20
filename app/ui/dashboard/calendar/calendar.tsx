'use client';

import { FunctionComponent, useState } from "react";
import MonthView from "./month-view";
import YearView from "./year-view";
import WeekView from "./week-view";
import DayView from "./day-view";

type ViewComponentsType = {
    [key: string]: FunctionComponent; // Assuming your components do not need specific props
};

const viewComponents: ViewComponentsType = {
    Година: YearView,
    Месец: MonthView,
    Седмица: WeekView,
    Ден: DayView,
};


export default function Calendar() {
    const viewTypes = ["Година", "Месец", "Седмица", "Ден"];

    const [currentViewKey, setCurrentViewKey] = useState<string>("Месец");

    const handleType = (type: string) => {
        setCurrentViewKey(type);
    };

    const dateBGLocale = new Date().toLocaleDateString('bg-BG', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    const SelectedViewComponent = viewComponents[currentViewKey];

    return (


        <div className="h-80 flex flex-col rounded-lg border-2 border-gray-300">
            <div className="flex flex-col bg-gray-100">
                <div className="flex flex-row justify-between p-4 rounded-t-lg">
                    <div className="text-gray-600 m-4 flex-row flex">
                        <div className="font-semibold">{dateBGLocale}</div>
                    </div>
                    <div className="flex flex-row gap-2 p-2 border rounded-xl bg-gray-50 border-gray-300">
                        <span className="m-2 font-semibold font-sans text-gray-500">Изглед</span>
                        {viewTypes.map((type) => (
                            <button key={type}
                                className="bg-white p-2 rounded-xl border border-gray-300 w-28"
                                onClick={() => handleType(type)} // Assuming handleType function needs the type as an argument
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex-1 p-4 overflow-auto">
                {SelectedViewComponent ? <SelectedViewComponent /> : null}
            </div>
        </div>

    );
}