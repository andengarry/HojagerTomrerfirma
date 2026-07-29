import Logo from "./Logo";
import NavItem from "./NavItem";
import Dropdown from "./Dropdown";
import ContactInfo from "./ContactInfo";
import MobileMenu from "./MobileMenu";
import navConfig, { companyInfo } from "./navConfig";


export default function Navbar() {
    return (
        <header
            className="
                sticky
                top-0
                z-50

                w-full

                border-b
                border-gray-200

                bg-white/95

                backdrop-blur
            "
        >

            <div
                className="
                    mx-auto

                    flex

                    h-24

                    max-w-7xl

                    items-center

                    justify-between

                    px-6

                    lg:px-8
                "
            >

                {/* Logo */}
                <div
                    className="
                        flex-1
                    "
                >
                    <Logo />
                </div>


                {/* Desktop navigation */}
                <nav
                    className="
                        hidden
                        flex-1
                        items-center
                        justify-center
                        gap-10
                        lg:flex
                        whitespace-nowrap

                    "
                >

                {
                    navConfig.map((item) => {

                        if(item.type === "link") {

                            return (
                                <NavItem
                                    key={item.href}
                                    href={item.href}
                                    text={item.label}
                                />
                            );
                        }


                        if(item.type === "dropdown") {

                            return (
                                <Dropdown
                                    key={item.label}
                                    title={item.label}
                                    items={item.items}
                                />
                            );
                        }


                        return null;

                    })
                }

                </nav>



                {/* Desktop kontakt */}
                <div
                    className="
                        hidden

                        flex-1

                        justify-end

                        lg:flex
                    "
                >

                    <ContactInfo
                        phone={companyInfo.phone}
                        email={companyInfo.email}
                    />

                </div>



                {/* Mobil menu */}
                <div
                    className="
                        flex

                        justify-end

                        lg:hidden
                    "
                >

                    <MobileMenu />

                </div>


            </div>

        </header>
    );
}