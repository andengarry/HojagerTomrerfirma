import { NavLink } from "react-router-dom";

export default function NavItem({ href, text }) {
    return (
        <NavLink
            to={href}
            className={({ isActive }) => `
                group
                relative

                font-medium

                transition-colors
                duration-200

                ${
                    isActive
                        ? "text-amber-700"
                        : "text-gray-700 hover:text-amber-700"
                }
            `}
        >

            {text}

            {/* Animeret underline */}
            <span
                className="
                    absolute
                    -bottom-2
                    left-0

                    h-0.5
                    w-0

                    bg-amber-600

                    transition-all
                    duration-300

                    group-hover:w-full
                "
            />

        </NavLink>
    );
}