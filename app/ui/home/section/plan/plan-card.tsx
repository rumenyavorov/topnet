import { CircularProgressBar } from "./circular-progress-bar";

export const PlanCard = ({
    plan
}: {
    plan: Plan
}) => {

    // const handleSelect = () => {
    //     if (plan) {
    //         selectPlan(plan);
    //     }
    // };

    // const scrollToSection = () => {
    //     const newSection = document.getElementById('new');

    //     if (newSection) {
    //         newSection.scrollIntoView({ behavior: 'smooth' });
    //     }
    // };


    const featureList = plan?.features.map((feature, index) => (
        <li key={index} className="flex items-center">
            <span className="text-green-500 mr-2">✔</span>
            {feature}
        </li>
    ));

    const formatSpeed = (speed: number) => {
        return speed >= 1000 ? (speed / 1000).toFixed(1) + ' Gbps' : speed + ' Mbps';
    };

    return (
        // <div className="bg-white rounded-lg shadow-md overflow-hidden">
        //     {/* <CircularProgressBar value={plan?.speed ?? 0} maxValue={1000} /> */}
        //     <div className={`${plan?.color} p-4 text-center text-white uppercase tracking-wide font-semibold`}>
        //         {plan?.name}
        //         <div></div>
        //     </div>
        // </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg m-2 text-center bg-white">
            <div className={`px-6 py-4 ${plan?.color} text-white`}>
                <div className="font-bold text-xl mb-2">{plan?.name.toUpperCase()}</div>
            </div>
            <div className="px-6 py-4">
                <div className="flex items-center justify-center space-x-4">
                    <div className="text-gray-700 text-base text-center">
                        <p className="text-3xl font-bold">{formatSpeed(plan?.speed ?? 0)}</p>
                        <p>BG Peering</p>
                    </div>
                    <CircularProgressBar value={plan?.speed ?? 0} maxValue={1000} />
                </div>
                {/* <p className="text-gray-700 text-base mb-4">
                    <span className="text-3xl font-bold">{plan?.intSpeed} Mbps</span><br />
                    International
                </p> */}
                {/* <p className="text-gray-700 text-base mb-4">
                    <span className="text-3xl font-bold">{plan?.channels}</span><br />
                    TV Channels
                </p> */}
                {/* <ul className="text-gray-700 text-left">{featureList}</ul> */}
                <p className="text-3xl mt-4 font-bold">{plan?.price} лв./Месец</p>
                {/* <button className="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg mt-6 mb-4"
                    onClick={() => {
                        handleSelect();
                        scrollToSection();
                    }}
                >
                    Избери
                </button> */}
            </div>
        </div>
    );
};