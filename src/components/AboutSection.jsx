import { FaFacebook } from "react-icons/fa";

function AboutSection() {
    return (
        <section className="w-full bg-gray-100 py-20">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:px-8">

                {/* Venstre side */}
                <div>
                    <h2 className="text-3xl font-bold text-gray-900">
                        Hvem er vi?
                    </h2>

                    <p className="mt-6 w-full text-lg leading-relaxed text-gray-700">
                        Vi er et lokalt tømrerfirma med fokus på kvalitet,
                        godt håndværk og tilfredse kunder. 
                        Vi hjælper både private og virksomheder med
                        renoveringer, tilbygninger og specialopgaver.
                    </p>
                </div>


                {/* Højre side */}
                <div className="flex items-center justify-center lg:justify-end">
                    <a
                        href="#"
                        className="
                            flex
                            items-center
                            gap-5
                            rounded-lg
                            bg-white
                            px-8
                            py-6
                            shadow-md
                            transition
                            hover:shadow-lg
                        "
                    >
                        <FaFacebook className="text-5xl text-blue-600" />

                        <span className="max-w-xs text-lg font-medium text-gray-800">
                            Følg med i vores seneste projekter og hverdag på Facebook
                        </span>
                    </a>
                </div>

            </div>
        </section>
    );
}

export default AboutSection;