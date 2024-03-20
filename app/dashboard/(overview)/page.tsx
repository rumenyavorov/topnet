import Calendar from "@/app/ui/dashboard/calendar/calendar";
import CardWrapper from "@/app/ui/dashboard/cards";

export default function Page() {
    return (
        <main>
            <div className="mb-4 text-xl md:text-2xl">

                Работно табло
            </div>
            <div className="flex flex-col">
                {/* <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <CardWrapper />
                </div> */}
                <div>
                    <Calendar />
                </div>
            </div>
        </main>
    );
}