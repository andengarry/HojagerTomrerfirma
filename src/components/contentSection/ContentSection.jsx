import CTAButtons from "./CTAButtons";

function ContentSection({
    title,
    text,
    image,
    imageAlt,
    reverse = false,
}) {
    return (
        <section className="w-full bg-white py-20">
            <div
                className={`
                    mx-auto
                    grid
                    max-w-7xl
                    items-center
                    gap-16
                    px-6
                    lg:px-8
                    lg:grid-cols-2
                    ${reverse ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""}
                `}
            >
                {/* Tekst */}
                <div>
                    <h2 className="text-4xl font-bold text-gray-900">
                        {title}
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        {text}
                    </p>

                    <CTAButtons />
                </div>

                {/* Billede */}
                <div>
                    <img
                        src={image}
                        alt={imageAlt}
                        className="
                            h-full
                            w-full
                            rounded-2xl
                            object-cover
                            shadow-xl
                        "
                    />
                </div>
            </div>
        </section>
    );
}

export default ContentSection;