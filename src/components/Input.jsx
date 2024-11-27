function Input({ description, htmlFor, ...props }) {
    return (
        <>
            <label className="flex flex-col gap-2" htmlFor={htmlFor}>
                <span
                    className="text-sm font-medium">
                    {description}
                </span>

                <input
                   {...props}
                />
            </label>
        </>
    )
}

export default Input