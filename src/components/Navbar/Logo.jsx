export default function Logo() {
    return (
        <a
            href="/"
            className="
                flex
                items-center

                transition-transform
                duration-200

                hover:scale-105
            "
        >

            <img
                src="/images/logo.png"
                alt="Virksomhedens logo"
                className="
                    h-14
                    w-auto

                    object-contain

                    sm:h-16
                "
            />

        </a>
    );
}