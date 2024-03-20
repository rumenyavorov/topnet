import Image from "next/image";

export const AboutUs = () => {
    return (

        // <div className="flex">
        //     <Image 
        //     src={"topnet-logo.svg"}
        //     width={450}
        //     height={250}
        //     alt="Test"
        //     />
        // </div>

        <div className="relative flex flex-col justify-center items-center text-black text-center px-4">
            
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    ТОПНЕТ 2003
                </h1>
                <p className="mb-8 text-xl">
                    „ТОПНЕТ 2003“ ЕООД е фирма занимаваща се с изграждане и поддръжка на
                    оптична мрежа за достъп до Интернет и обмен на данни.
                </p>
                <p className="text-xl">Предлаганите от фирмата услуги са насочени както към обикновеният потребител така и към по-големи корпоративни клиенти.Започваме работа през 2003 г. и понастоящем има изградено  покритие в кварталите:</p>
                <p className="font-bold">Горна Баня;Овча Купел 1;Овча Купел 2;Овча Купел Стара част,Княжево,Карпузица,Суходол.</p>
            </div>
        </div>
    );
}