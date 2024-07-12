function Button({ title, wi, he }) {
    return (
        <div
            className={`outline-none rounded-lg shadow-md ${wi} ${he} center-x bg-[#FFFFCC] hover:bg-[#FFFF66] active:bg-[#FFFF66]`}
        >
            {title}
        </div>
    );
}

export default Button;
