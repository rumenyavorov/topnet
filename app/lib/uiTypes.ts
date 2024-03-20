interface Plan {
    id: number;
    color: string;
    name: string;
    speed: number;
    channels: string;
    price: string;
    features: string[];
}


interface PlanProps {
    plan?: Plan;
    selectPlan: (plan: Plan) => void;
}