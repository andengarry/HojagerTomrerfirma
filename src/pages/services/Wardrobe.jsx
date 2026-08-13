import picture1 from "../../assets/Wardrobe/IMG_6625.JPEG";
import picture2 from "../../assets/Wardrobe/IMG_6574.JPEG";
import ContentSection from "../../components/contentSection/ContentSection";
import ReferenceGallery from "../../components/referenceGallery/ReferenceGallery";

function Wardrobe() {
    return (
        <>
            <ContentSection
                title="Skræddersyede garderobeløsninger til dit hjem"
                text="En veldesignet garderobe skaber orden, udnytter pladsen optimalt og giver et stilrent udtryk i hjemmet. Vi bygger og monterer skræddersyede garderobeløsninger, der tilpasses dine behov, rummets mål og din personlige stil. Uanset om det er et walk-in closet, en skabsvæg eller en garderobe til entréen, leverer vi en løsning med fokus på kvalitet og funktionalitet."
                image={picture1}
                imageAlt="Tømrerarbejde"
            />

            <ContentSection
                title="Funktionelt design med flot finish"
                text="Vi hjælper dig hele vejen fra opmåling og planlægning til den færdige montering. Med sans for detaljen og mange års erfaring sikrer vi en garderobe, hvor hver centimeter udnyttes bedst muligt. Vi arbejder med kvalitetsmaterialer, overholder vores aftaler og leverer et resultat, der både er praktisk, holdbart og flot at se på."
                image={picture2}
                imageAlt="Ny terrasse"
                reverse
            />

            <ReferenceGallery 
                title="Referencer"
                text="Se et udvalg af vores tidligere projekter."
                folder="Wardrobe"
            />

        </>
    );
}

export default Wardrobe;