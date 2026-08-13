const loadImages = (folder) => {
  const images = import.meta.glob('/src/assets/**/*.{jpg,jpeg,png,webp,JPG,JPEG,AVIF}', {
    eager: true,
    import: 'default',
  });

  return Object.entries(images)
        .filter(([path]) => path.includes(`/assets/${folder}/`))
        .map(([, src]) => src);
};

function ReferenceGallery({title, text, folder}) {
    // alle brugssteder skal opdateres til at indeholde en folder prop, som bruges til at hente billederne fra den rigtige mappe
    const images = loadImages(folder);

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
                    {images.map((image, index) => (
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