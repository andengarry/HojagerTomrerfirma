import { useState } from "react";
import Dropdown from "./Dropdown";
import { NavLink } from "react-router-dom";
import navConfig, { companyInfo } from "./navConfig";


export default function MobileMenu() {

    const [open, setOpen] = useState(false);


    function closeMenu() {
        setOpen(false);
    }


    return (
        <div className="relative lg:hidden">


            {/* Hamburger knap */}
            <button
                type="button"
                onClick={() => setOpen(!open)}
                aria-label="Åbn menu"
                aria-expanded={open}

                className="
                    flex
                    h-11
                    w-11

                    flex-col
                    items-center
                    justify-center

                    gap-1.5

                    rounded-lg

                    transition

                    hover:bg-gray-100
                "
            >

                <span
                    className={`
                        h-0.5
                        w-6

                        bg-gray-700

                        transition-transform
                        duration-300

                        ${
                            open
                                ? "translate-y-2 rotate-45"
                                : ""
                        }
                    `}
                />

                <span
                    className={`
                        h-0.5
                        w-6

                        bg-gray-700

                        transition-opacity
                        duration-300

                        ${
                            open
                                ? "opacity-0"
                                : "opacity-100"
                        }
                    `}
                />

                <span
                    className={`
                        h-0.5
                        w-6

                        bg-gray-700

                        transition-transform
                        duration-300

                        ${
                            open
                                ? "-translate-y-2 -rotate-45"
                                : ""
                        }
                    `}
                />

            </button>



            {/* Mobil navigation */}
            <div
                className={`
                    fixed

                    left-0
                    right-0

                    top-24

                    z-50

                    bg-white

                    border-t
                    border-gray-200

                    shadow-xl

                    transition-all
                    duration-300

                    ${
                        open
                            ? "visible translate-y-0 opacity-100"
                            : "invisible -translate-y-4 opacity-0"
                    }
                `}
            >

                <nav
                    className="
                        flex
                        flex-col

                        gap-1

                        px-6
                        py-6
                    "
                >


                    {
                        navConfig.map((item) => {


                            // Almindeligt link
                            if (item.type === "link") {

                                return (
                                    <NavLink
                                        key={item.href}
                                        to={item.href}
                                        onClick={closeMenu}

                                        className="
                                            rounded-lg

                                            px-4
                                            py-3

                                            font-medium

                                            text-gray-700

                                            transition

                                            hover:bg-gray-50
                                            hover:text-amber-700
                                        "
                                    >
                                        {item.label}
                                    </NavLink>
                                );
                            }



                            // Dropdown menu
                            if (item.type === "dropdown") {

                                return (
                                    <div
                                        key={item.label}
                                        onClick={closeMenu}
                                        className="
                                            flex
                                            justify-center
                                            py-3
                                        "
                                    >

                                        <Dropdown
                                            title={item.label}
                                            items={item.items}
                                        />

                                    </div>
                                );

                            }


                            return null;

                        })
                    }



                    {/* Kontakt information */}
                    <div
                        className="
                            mt-5

                            border-t
                            border-gray-200

                            pt-5

                            px-4
                        "
                    >

                        <a
                            href={`tel:${companyInfo.phone}`}

                            className="
                                flex
                                items-center
                                gap-2

                                py-2

                                text-gray-700

                                transition

                                hover:text-blue-600
                            "
                        >
                            <span>
                                📞
                            </span>

                            {companyInfo.phone}

                        </a>



                        <a
                            href={`mailto:${companyInfo.email}`}

                            className="
                                flex
                                items-center
                                gap-2

                                py-2

                                text-gray-700

                                transition

                                hover:text-blue-600
                            "
                        >
                            <span>
                                ✉
                            </span>

                            {companyInfo.email}

                        </a>

                    </div>


                </nav>

            </div>


        </div>
    );
}