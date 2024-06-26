export default function Card({ title, description, className = '', children, extra, ...props }) {
    return (
        <div className='flex flex-col w-full h-min max-w-7xl'>
            <div className="flex w-full rounded-t-md bg-primary-200 px-3 sm:px-5 py-3 font-medium justify-between">
                <div className="flex flex-row items-center gap-2 text-white-300">{title}</div>
                <div className="flex flex-row items-center gap-2 text-white-300">{description}</div>
            </div>

            <div
                {...props}
                className={`w-full bg-white-0 ${className}`}
            >
                {children}
            </div>
            {extra}
        </div>
    )
}