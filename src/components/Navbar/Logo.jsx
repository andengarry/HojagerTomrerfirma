import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

export default function Logo() {
    return (
        <NavLink
            to="/"
            className="
                flex
                items-center

                transition-transform
                duration-200

                hover:scale-105
            "
        >

            <img
                src={logo}
                alt="Virksomhedens logo"
                className="
                    h-14
                    w-auto

                    object-contain

                    sm:h-16
                "
            />

        </NavLink>
    );
}