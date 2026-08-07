import picture1 from "../../assets/Roof/IMG_8443.JPEG";
import picture2 from "../../assets/Roof/IMG_4599.JPEG";
import ContentSection from "../../components/contentSection/ContentSection";
import ReferenceGallery from "../../components/referenceGallery/ReferenceGallery";

function Roof() {
    return (
        <>
            <ContentSection
                title="Giv taget nyt liv med en tagrenovering"
                text="Et slidt eller utæt tag kan føre til skader på boligen og højere varmeudgifter. Med en professionel tagrenovering forlænger du tagets levetid og sikrer, at dit hjem er godt beskyttet mod vind og vejr. Vi udfører tagrenoveringer med fokus på kvalitet, holdbare materialer og solidt håndværk, så du får en løsning, der holder i mange år.."
                image={picture1}
                imageAlt="Tømrerarbejde"
            />

            <ContentSection
                title="En holdbar løsning til din bolig"
                text="Vi hjælper dig gennem hele renoveringsprocessen – fra vurdering af tagets stand til det færdige resultat. Uanset om taget kræver en mindre renovering eller en mere omfattende istandsættelse, leverer vi en løsning, der er tilpasset din bolig og dine behov. Vi arbejder effektivt, overholder vores aftaler og går aldrig på kompromis med kvaliteten."
                image={picture2}
                imageAlt="Ny terrasse"
                reverse
            />

            <ReferenceGallery 
                title="Referencer"
                text="Se et udvalg af vores tidligere projekter."
                folder="Roof"
            />

        </>
    );
}

export default Roof;