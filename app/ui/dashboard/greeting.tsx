import { getSession, signIn, useSession } from "next-auth/react";
import { GreetingSkeleton } from "../skeletons";

export default function Greeting() {


    const { data: session, status } = useSession();
    return (
        <h2 className="text-white font-semibold">
            {status === 'loading' ? (
                <GreetingSkeleton /> // Tailwind classes to set height and width
            ) : (
                <div className="flex flex-col">
                    <h3 className="text-gray-200 font-semibold">Здравей,</h3>
                    <h2 className="text-white font-semibold">{session?.user.name}</h2>
                </div>
            )}
        </h2>
    );
}