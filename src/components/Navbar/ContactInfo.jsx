export default function ContactInfo({ phone, email }) {
    return (
        <div
            className="
                flex
                flex-col
                items-end
                gap-1

                text-sm
            "
        >

            {/* Telefon */}
            <a
                href={`tel:${phone}`}
                className="
                    group
                    flex
                    items-center
                    gap-2

                    font-medium
                    text-gray-700

                    transition-colors
                    duration-200

                    hover:text-amber-700
                "
            >

                <svg
                    className="
                        h-4
                        w-4

                        text-gray-500

                        transition-colors
                        group-hover:text-amber-700
                    "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path
                        d="
                            M2 3.5A1.5 1.5 0 013.5 2h2A1.5 1.5 0 017 3.5v2A1.5 1.5 0 015.5 7H5a11 11 0 008 8v-.5a1.5 1.5 0 011.5-1.5h2A1.5 1.5 0 0118 14.5v2a1.5 1.5 0 01-1.5 1.5
                            C8.596 18 2 11.404 2 3.5Z
                        "
                    />
                </svg>

                {phone}

            </a>


            {/* Email */}
            <a
                href={`mailto:${email}`}
                className="
                    group
                    flex
                    items-center
                    gap-2

                    text-xs
                    text-gray-600

                    transition-colors
                    duration-200

                    hover:text-amber-700
                "
            >

                <svg
                    className="
                        h-4
                        w-4

                        text-gray-500

                        transition-colors
                        group-hover:text-amber-700
                    "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path
                        d="
                            M2.94 5.94A2 2 0 014.36 5h11.28a2 2 0 011.42.94L10 10.94 2.94 5.94Z
                        "
                    />

                    <path
                        d="
                            M18 8.06v6.44a2 2 0 01-2 2H4a2 2 0 01-2-2V8.06l7.43 5.27a1 1 0 001.14 0L18 8.06Z
                        "
                    />
                </svg>

                {email}

            </a>

        </div>
    );
}