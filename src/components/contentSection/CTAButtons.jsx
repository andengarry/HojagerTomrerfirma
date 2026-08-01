import { NavLink } from "react-router-dom";

function CTAButtons() {
    return (
        <div className="mt-8 flex flex-col gap-10 pl-8 sm:flex-row">
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
                    text-sm
                    transition
                    duration-300
                    hover:bg-gray-700
                "
            >
                Ring 22 88 14 29
            </a>

            <NavLink
                to="/kontakt"
                className="
                    rounded-lg
                    border
                    border-amber-600
                    px-6
                    py-3
                    text-sm
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
            </NavLink>
        </div>
    );
}

export default CTAButtons;