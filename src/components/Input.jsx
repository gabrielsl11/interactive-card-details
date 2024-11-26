function Input({ description, htmlFor, id, placeholder }) {
    return (
        <>
            <label className="flex flex-col gap-2" htmlFor={htmlFor}>
                <span
                    className="text-sm font-medium">
                    {description}
                </span>

                <input
                className="border w-full rounded-md px-4 py-2 focus-visible:outline focus-visible:outline-purple-500"
                    id={id}
                    type="number"
                    placeholder={placeholder}
                />
            </label>
        </>
    )
}

export default Input