export default function StepIndicator({
    currentStep
}: {
    currentStep: number
}) {
    const steps = ['Интернет', 'Телевизия', 'Заявка', 'Преглед'];

    return (
        <div className="flex flex-col items-center justify-center p-4 gap-2">
            {steps.map((step, index) => {
                const isCompleted = index < currentStep;
                return (
                    <div key={step} className="flex items-center">
                        <div className={`w-24 h-12 rounded-2xl ${isCompleted ? 'bg-blue-500' : 'bg-gray-50'} flex items-center justify-center`}>
                            <span className={`font-bold ${isCompleted ? 'text-white' : 'text-gray-600'}`}>
                                <h5>{step}</h5>
                            </span>
                        </div>
                        {index !== steps.length - 1 && (
                            <div className={`flex-auto border-t-2 transition duration-500 ease-in-out ${isCompleted ? 'border-blue-500' : 'border-gray-200'}`}></div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};