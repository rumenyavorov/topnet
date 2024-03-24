export default function Badge({
    text,
    color
}: {
    text: string,
    color: string
}) {

    return (
        <span className={`${color} text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded`}>
            {text}
        </span>
    );
}