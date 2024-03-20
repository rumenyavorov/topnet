// Wizard.tsx
import { useState } from 'react';
import StepIndicator from './step-indicator';
import ClientCardWrapper from './client-card-wrapper';

export default function Wizard() {
    const [currentStep, setCurrentStep] = useState(0);

    const nextStep = () => {
        setCurrentStep((prevStep) => (prevStep < 3 ? prevStep + 1 : prevStep));
    };

    const previousStep = () => {
        setCurrentStep((prevStep) => (prevStep > 0 ? prevStep - 1 : prevStep));
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-row flex-1 h-full">

                <StepIndicator currentStep={currentStep} />
                <ClientCardWrapper currentStep={currentStep} />
            </div>
            <div className="flex justify-between p-4">
                <button onClick={previousStep} disabled={currentStep === 0} className="bg-gray-200 p-2 rounded-md disabled:opacity-50">Предишна</button>
                <button onClick={nextStep} disabled={currentStep === 3} className="bg-blue-500 text-white p-2 rounded-md disabled:opacity-50">Следващ</button>
            </div>
        </div>
        
    );
};
