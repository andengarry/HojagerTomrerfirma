const navConfig = [

    {
        type: "link",
        label: "Forside",
        href: "/",
    },


    {
        type: "dropdown",
        label: "Vi tilbyder",

        items: [
            {
                type: "link",
                label: "Køkkenopsætning",
                href: "/services/køkkenopsætning",
            },
            {
                type: "link",
                label: "Døre og vinduer",
                href: "/services/døre-og-vinduer",
            },
            {
                type: "link",
                label: "Tagrenovering",
                href: "/services/tagrenovering",
            },
            {
                type: "link",
                label: "Terrasse",
                href: "/services/terrasse",
            },
            {
                type: "link",
                label: "Garderobe",
                href: "/services/garderobe",
            },
            {   
                type: "link",
                label: "Badeværelse",
                href: "/services/badeværelse",
            },
        ],
    },


    {
        type: "link",
        label: "Om os",
        href: "/om-os",
    },

    {
        type: "link",
        label: "Galleri",
        href: "/galleri",
    },

    {
        type: "link",
        label: "Kontakt",
        href: "/kontakt",
    },

];


export const companyInfo = {
    phone: "+45 22 88 14 29",
    email: "nikolaj@hoejagertoemrerfirma.dk",
};


export default navConfig;