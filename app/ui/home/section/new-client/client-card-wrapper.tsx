//ClientCardWrapper.tsx

import clsx from "clsx";
import FormCard from "./form-card";
import PlanCard from "./plan-card";
import TvCard from "./tv-card";
import { useEffect, useState } from "react";

export default function ClientCardWrapper({
    currentStep
}: {
    currentStep: number
}) {

    const [prevStep, setPrevStep] = useState(0);
    const [animationClass, setAnimationClass] = useState('');

    useEffect(() => {
        // Set the appropriate animation class based on the direction
        const animation = currentStep > prevStep ? 'page-turn-forward' : 'page-turn-backward';
        setAnimationClass(animation);

        // Clear the animation class after the animation ends
        const timer = setTimeout(() => {
            setAnimationClass('');
        }, 800); // Match the CSS animation duration

        // Remember the previous step for the next animation
        setPrevStep(currentStep);

        return () => clearTimeout(timer);
    }, [currentStep, prevStep]);

    return (
        <div className="flex flex-col h-full bg-white rounded-lg w-full overflow-hidden">
            <div className={`relative h-full w-full ${animationClass}`}>
                {/* Conditional rendering based on currentStep */}
                {currentStep === 0 && <PlanCard />}
                {currentStep === 1 && <TvCard />}
                {currentStep === 2 && <FormCard />}
                {currentStep === 3 && <div>Preview</div>}
            </div>
        </div>
    );
}