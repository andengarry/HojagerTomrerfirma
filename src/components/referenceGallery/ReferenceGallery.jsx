import referenceImages from "./referenceImages";

function ReferenceGallery({title, text}) {
    return (
        <section className="w-full bg-white py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <header className="mb-12 text-center">
                    <h2 className="text-4xl font-bold text-gray-900">
                        {title}
                    </h2>

                    <p className="mx-auto mt-4 w-full text-lg text-gray-600">
                        {text}
                    </p>
                </header>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                    {referenceImages.map((image, index) => (
                        <div
                            key={index}
                            className="
                                group
                                overflow-hidden
                                rounded-2xl
                                border
                                border-gray-200
                                shadow-sm
                            "
                        >
                            <img
                                src={image}
                                alt={`Reference ${index + 1}`}
                                className="
                                    aspect-square
                                    w-full
                                    object-cover
                                    transition-transform
                                    duration-500
                                    group-hover:scale-105
                                "
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ReferenceGallery;