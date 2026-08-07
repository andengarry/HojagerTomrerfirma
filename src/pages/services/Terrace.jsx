import picture1 from "../../assets/Terrace/IMG_1770.JPG";
import picture2 from "../../assets/Terrace/IMG_7709.JPEG";
import ContentSection from "../../components/contentSection/ContentSection";
import ReferenceGallery from "../../components/referenceGallery/ReferenceGallery";

function Terrace() {
    return (
        <>
            <ContentSection
                title="En terrasse skabt til udelivet"
                text="En ny terrasse skaber de perfekte rammer for afslapning, hyggelige stunder og lange sommeraftener. Vi bygger terrasser i træ, der kombinerer flot design med solidt håndværk og lang holdbarhed. Uanset om du ønsker en lille terrasse, en stor opholdsplads eller en specialtilpasset løsning, sørger vi for et resultat, der passer til både din bolig og dine ønsker."
                image={picture1}
                imageAlt="Tømrerarbejde"
            />

            <ContentSection
                title="Håndværk med fokus på kvalitet"
                text="Vi står for hele processen – fra rådgivning og planlægning til den færdige terrasse. Med fokus på præcision, materialer af høj kvalitet og godt håndværk sikrer vi en terrasse, der både er funktionel og æstetisk. Vi overholder vores aftaler, arbejder effektivt og leverer en løsning, du kan få glæde af i mange år."
                image={picture2}
                imageAlt="Ny terrasse"
                reverse
            />

            <ReferenceGallery 
                title="Referencer"
                text="Se et udvalg af vores tidligere projekter."
                folder="Terrace"
            />

        </>
    );
}

export default Terrace;