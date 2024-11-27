function Button({ content, onClick, ...props }) {
    return (
        <>
            <button
            onClick={onClick}
                className="bg-purple-950 text-white py-3 rounded-lg hover:brightness-125 transition duration-300 ease-in-out"
                {...props}
            >
                {content}
            </button>
        </>
    )
}

export default Button