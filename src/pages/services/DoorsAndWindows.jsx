import facade from "../../assets/references/testReferencePicture.png";
import ContentSection from "../../components/contentSection/ContentSection";
import ReferenceGallery from "../../components/referenceGallery/ReferenceGallery";

function DoorsAndWindows() {
    return (
        <>
            <ContentSection
                title="Professionelt tømrerarbejde i hele Midtjylland"
                text="Vi hjælper både private og erhverv med alt fra tagrenoveringer og terrasser til tilbygninger og specialløsninger. Vi lægger vægt på høj kvalitet, god dialog og et resultat, der holder i mange år."
                image={facade}
                imageAlt="Tømrerarbejde"
            />

            <ContentSection
                title="Terrasser bygget til mange års brug"
                text="En terrasse er familiens samlingspunkt om sommeren. Vi bygger terrasser i kvalitetsmaterialer og skræddersyr løsningen efter dine ønsker."
                image={facade}
                imageAlt="Ny terrasse"
                reverse
            />

            <ReferenceGallery 
                title="Referencer"
                text="Se et udvalg af vores tidligere projekter."
            />

        </>
    );
}

export default DoorsAndWindows;