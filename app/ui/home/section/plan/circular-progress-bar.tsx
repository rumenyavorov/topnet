export const CircularProgressBar = ({ value, maxValue }: { value: number, maxValue: number }) => {
    // Values for the SVG
    const size = 120; // Size of the SVG
    const strokeWidth = 10; // Width of the stroke
    const center = size / 2; // Center of the SVG
    const radius = center - strokeWidth; // Radius of the circle
    const circumference = 2 * Math.PI * radius; // Circumference of the circle

    // Convert Mbps to Gbps if value is 1000 or more
    const displayValue = value >= 1000 ? (value / 1000).toFixed(1) : value;
    const units = value >= 1000 ? 'Gbps' : 'Mbps';

    // Calculating the stroke dash offset
    const progress = value / maxValue;
    const strokeDashoffset = circumference * (1 - progress);

    return (
        <div className="relative flex justify-center items-center">
            <svg
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
            >
                {/* Background circle */}
                <circle
                    stroke="#ddd" // Background circle color
                    fill="none"
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={`${strokeWidth}px`}
                />
                {/* Foreground circle */}
                <circle
                    stroke="#7c3aed" // Foreground circle color, adjust as needed
                    fill="none"
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={`${strokeWidth}px`}
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    transform={`rotate(-90 ${center} ${center})`}
                    strokeLinecap="round"
                />
            </svg>
            {/* Text */}
            <div className="absolute flex flex-col justify-center items-center" style={{ bottom: '10%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <span className="text-xl font-semibold text-purple-800 block">
                    {displayValue}
                </span>
                <span className="text-sm font-semibold text-purple-800 block">
                    {units}
                </span>
            </div>

        </div>
    );
};
