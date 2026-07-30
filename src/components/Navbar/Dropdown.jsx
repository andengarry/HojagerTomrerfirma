import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Dropdown({ title, items }) {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);
    const { pathname } = useLocation();
    const isServicesActive = pathname.startsWith("/services");

    // Luk dropdown ved klik udenfor
    useEffect(() => {
        function handleClickOutside(event) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setOpen(false);
            }
        }

        document.addEventListener(
            "mousedown",
            handleClickOutside
        );

        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
        };
    }, []);


    // Luk dropdown med ESC
    useEffect(() => {
        function handleEscape(event) {
            if (event.key === "Escape") {
                setOpen(false);
            }
        }

        document.addEventListener(
            "keydown",
            handleEscape
        );

        return () => {
            document.removeEventListener(
                "keydown",
                handleEscape
            );
        };
    }, []);


    return (
        <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >

            {/* Dropdown knap */}
            <button
                type="button"
                onClick={() => setOpen(!open)}
                aria-haspopup="true"
                aria-expanded={open}
                className={`
                    group
                    flex
                    items-center
                    gap-2
                    font-medium
                    transition
                    duration-200
                    ${
                        isServicesActive
                            ? "text-amber-700"
                            : "text-gray-700 hover:text-amber-700"
                    }
                `}
            >

                <span>
                    {title}
                </span>


                {/* Pil */}
                <svg
                    className={`
                        h-4
                        w-4
                        transition-transform
                        duration-200
                        ${
                            open
                                ? "rotate-180"
                                : "rotate-0"
                        }
                    `}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="
                            M5.23 7.21
                            a.75.75 0 011.06.02
                            L10 11.17
                            l3.71-3.94
                            a.75.75 0 111.08 1.04
                            l-4.25 4.5
                            a.75.75 0 01-1.08 0
                            L5.21 8.27
                            a.75.75 0 01.02-1.06z
                        "
                        clipRule="evenodd"
                    />
                </svg>

            </button>


            {/* Dropdown menu */}
            <div
                className={`
                    absolute
                    left-1/2
                    top-full
                    mt-4
                    w-64
                    -translate-x-1/2

                    overflow-hidden
                    rounded-xl

                    border
                    border-gray-100

                    bg-white

                    shadow-xl

                    transition-all
                    duration-200
                    origin-top

                    ${
                        open
                            ? `
                                visible
                                translate-y-0
                                opacity-100
                            `
                            : `
                                invisible
                                -translate-y-3
                                opacity-0
                            `
                    }
                `}
            >

                <div className="py-2">

                    {items.map((item) => (

                        <NavLink
                            key={item.href}
                            to={item.href}
                            className={({ isActive }) => `
                                block
                                px-5
                                py-3
                                text-sm
                                transition

                                ${
                                    isActive
                                        ? "text-amber-700 font-medium"
                                        : "text-gray-700 hover:bg-gray-50 hover:text-amber-700"
                                }
                            `}
                        >
                            {item.label}
                        </NavLink>

                    ))}

                </div>

            </div>

        </div>
    );
}