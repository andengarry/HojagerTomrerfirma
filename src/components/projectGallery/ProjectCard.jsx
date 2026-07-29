function ProjectCard({ title, image }) {
    return (
        <article
            className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-gray-200
                shadow-md
                transition-shadow
                duration-300
                hover:shadow-xl
                cursor-pointer
            "
        >
            <img
                src={image}
                alt={title}
                className="
                    h-80
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-110
                "
            />

            <div
                className="
                    absolute
                    inset-x-0
                    bottom-0
                    bg-black/70
                    backdrop-blur-sm
                    px-6
                    py-4
                "
            >
                <h3
                    className="
                        text-lg
                        font-semibold
                        text-white
                    "
                >
                    {title}
                </h3>
            </div>
        </article>
    );
}

export default ProjectCard;