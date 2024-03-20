interface SectionProps {
    id: string;
    title: string;
    color: string;
}

export default function Section({ id, title, color, children }: SectionProps & { children?: React.ReactNode }) {
    return (
        <section id={id} className={`${color} 
            ${id === 'about-us' ? 'pt-20 h-80 rounded-lg' : 'pt-18 min-h-screen rounded-lg'}
        `}>
            <div className="text-center pt-8"> {/* Added padding-top and text-center */}
                {/* <h2 className="text-4xl font-bold">{title}</h2> */}
                <div className="flex items-center justify-center">
                    {/* <div className={`${title ? "flex-grow border-t-4 border-teal-400" : ""}`}></div> */}
                    <span className="mx-4 text-xl font-bold uppercase text-black">{title}</span>
                    {/* <div className={`${title ? "flex-grow border-t-4 border-teal-400" : ""}`}></div> */}
                </div>
            </div>
            <div className="flex justify-center items-center h-full"> {/* Center the children */}
                {children}
            </div>
        </section>
    );
}