export default function Hero({ title, subtitle, image }) {

    return (
        <section
            className="
                relative

                flex
                min-h-[650px]

                w-full

                items-center
                justify-center

                overflow-hidden
            "
        >

            {/* Baggrundsbillede */}
            <img
                src={image}
                alt={"baggrundsbillede"}
                className="
                    absolute
                    inset-0

                    h-full
                    w-full

                    object-cover
                "
            />


            {/* Mørkt overlay */}
            <div
                className="
                    absolute
                    inset-0

                    bg-black/20
                "
            />



            {/* Tekst */}
            <div
                className="
                    relative
                    z-10

                    mx-auto

                    max-w-4xl

                    px-6

                    text-center

                    text-white
                "
            >

                <h1
                    className="
                        text-5xl

                        font-bold

                        leading-tight

                        tracking-tight

                        md:text-7xl
                    "
                >
                    {title}
                </h1>


                <p
                    className="
                        mx-auto

                        mt-6

                        max-w-2xl

                        text-lg

                        text-gray-200

                        md:text-2xl
                    "
                >
                    {subtitle}
                </p>



                {/* CTA knap */}
                <a
                    href="/contact"

                    className="
                        mt-10

                        inline-flex

                        items-center
                        justify-center

                        rounded-lg

                        bg-blue-600

                        px-8
                        py-4

                        text-lg

                        font-semibold

                        text-white

                        transition

                        duration-300

                        hover:bg-blue-700

                        hover:scale-105
                    "
                >
                    Kontakt os
                </a>


            </div>


        </section>
    );
}