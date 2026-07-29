function CTAButtons() {
    return (
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
                href="tel:22881429"
                className="
                    rounded-lg
                    bg-gray-900
                    px-6
                    py-3
                    text-center
                    font-semibold
                    text-white
                    transition
                    duration-300
                    hover:bg-gray-800
                "
            >
                Ring 22 88 14 29
            </a>

            <a
                href="/kontakt"
                className="
                    rounded-lg
                    border-2
                    border-amber-600
                    px-6
                    py-3
                    text-center
                    font-semibold
                    text-amber-600
                    transition
                    duration-300
                    hover:bg-amber-600
                    hover:text-white
                "
            >
                Gratis uforpligtet tilbud
            </a>
        </div>
    );
}

export default CTAButtons;