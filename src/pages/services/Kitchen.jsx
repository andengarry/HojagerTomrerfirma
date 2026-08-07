import picture1 from "../../assets/Kitchen/IMG_5324.JPEG";
import picture2 from "../../assets/Kitchen/IMG_8810.JPEG";
import ContentSection from "../../components/contentSection/ContentSection";
import ReferenceGallery from "../../components/referenceGallery/ReferenceGallery";

function Kitchen() {
    return (
        <>
            <ContentSection
                title="Professionel montering af køkkener"
                text="Drømmer du om et nyt køkken? Vi tilbyder professionel montering af alle typer køkkener, hvor kvalitet, præcision og godt håndværk er i fokus. Vi sikrer, at skabe, bordplader og øvrige elementer monteres korrekt, så du får et køkken, der både er funktionelt, holdbart og flot i mange år."
                image={picture1}
                imageAlt="Tømrerarbejde"
            />

            <ContentSection
                title="Kvalitet fra start til slut"
                text="Vi hjælper gennem hele processen – fra opmåling og tilpasning til den færdige montering. Med fokus på detaljerne, faste aftaler og en effektiv arbejdsproces leverer vi en løsning, der passer til både dit hjem og dine ønsker. Hos os er du sikret et resultat, der kombinerer høj kvalitet med professionelt tømrerarbejde."
                image={picture2}
                imageAlt="Ny terrasse"
                reverse
            />

            <ReferenceGallery 
                title="Referencer"
                text="Se et udvalg af vores tidligere projekter."
                folder="Kitchen"
            />

        </>
    );
}

export default Kitchen;