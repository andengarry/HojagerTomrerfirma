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
                label: "Indendørs maling",
                href: "/services/indendors-maling",
            },
            {
                label: "Udendørs maling",
                href: "/services/udendors-maling",
            },
            {
                label: "Spartling",
                href: "/services/spartling",
            },
            {
                label: "Tapetsering",
                href: "/services/tapetsering",
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
    email: "nikolaj@hojagertoemrerfirma.dk",
};


export default navConfig;