import picture1 from "../../assets/Bathroom/IMG_8721.JPEG";
import picture2 from "../../assets/Bathroom/IMG_6887.JPEG";
import ContentSection from "../../components/contentSection/ContentSection";
import ReferenceGallery from "../../components/referenceGallery/ReferenceGallery";

function Bathroom() {
    return (
        <>
            <ContentSection
                title="Smukke løsninger til badeværelset"
                text="Badeværelset er et af hjemmets vigtigste rum, hvor funktionalitet og design skal gå hånd i hånd. Vi monterer bademøbler og udfører tømrerarbejde til badeværelser med fokus på kvalitet, præcision og et flot finish. Uanset om du ønsker et nyt bademøbel, bordplader eller en komplet opgradering af indretningen, skaber vi en løsning, der passer til dine behov."
                image={picture1}
                imageAlt="Tømrerarbejde"
            />

            <ContentSection
                title="Kvalitet i hver eneste detalje"
                text="Vi hjælper dig gennem hele processen – fra opmåling og planlægning til den færdige montering. Med sans for detaljerne og solidt håndværk sikrer vi et resultat, der både er praktisk, holdbart og æstetisk. Vi overholder vores aftaler, arbejder effektivt og leverer en løsning, der giver dit badeværelse et moderne og indbydende udtryk."
                image={picture2}
                imageAlt="Ny terrasse"
                reverse
            />

            <ReferenceGallery 
                title="Referencer"
                text="Se et udvalg af vores tidligere projekter."
                folder="Bathroom"
            />

        </>
    );
}

export default Bathroom;