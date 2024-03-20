import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"

export function PrevMonth() {
    return (
        <div>
            <ChevronLeftIcon className="w-5"/>
            {/* <button>Назад</button> */}
        </div>
    );
}

export function NextMonth() {
    return (
        <div>
            <ChevronRightIcon className="w-5"/>
            {/* <button>Назад</button> */}
        </div>
    );
}