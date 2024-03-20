import { plans } from "@/app/lib/plansData";
import { FormEvent, useState } from "react";
import { PlanCard } from "./plan-card";
import { GlobeAltIcon, PlusIcon, TvIcon } from "@heroicons/react/24/solid";
export default function Plans() {

    return (
        <div className="">
            <div className="flex justify-center items-center gap-4 my-10">
                {plans.map((plan, index) => (
                    <PlanCard
                        key={index}
                        plan={plan}
                    // selectPlan={selectPlan}
                    />
                ))}
            </div>
        </div>

    );
};

