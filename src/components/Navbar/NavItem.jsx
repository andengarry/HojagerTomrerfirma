import { NavLink } from "react-router-dom";

export default function NavItem({ href, text }) {
    return (
        <NavLink
            to={href}
            className="
                group
                relative

                font-medium
                text-gray-700

                transition-colors
                duration-200

                hover:text-blue-600
            "
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

                    bg-blue-600

                    transition-all
                    duration-300

                    group-hover:w-full
                "
            />

        </NavLink>
    );
}