import Picture1 from "../../assets/Windows/IMG_4272.JPEG";
import Picture2 from "../../assets/Doors/IMG_6804.JPEG";
import ContentSection from "../../components/contentSection/ContentSection";
import ReferenceGallery from "../../components/referenceGallery/ReferenceGallery";

function DoorsAndWindows() {
    return (
        <>
            <ContentSection
                title="Nye døre og vinduer med fokus på kvalitet"
                text="Udskiftning af døre og vinduer er en investering, der kan forbedre både boligens udseende, komfort og energieffektivitet. Vi udfører montering af alle typer døre og vinduer med fokus på præcision, godt håndværk og en løsning, der holder i mange år. Hver opgave tilpasses boligens behov, så resultatet bliver både funktionelt og æstetisk pænt."
                image={Picture1}
                imageAlt="Tømrerarbejde"
            />

            <ContentSection
                title="Erfarne tømrere med sans for detaljen"
                text="Vi tager hånd om hele opgaven – fra opmåling og tilpasning til den færdige montering. Med mange års erfaring og øje for detaljerne sikrer vi et professionelt resultat, hvor døre og vinduer slutter tæt og fungerer, som de skal. Vi overholder vores aftaler, arbejder effektivt og leverer altid en løsning, du kan have glæde af i mange år."
                image={Picture2}
                imageAlt="Ny terrasse"
                reverse
            />

            <ReferenceGallery 
                title="Referencer"
                text="Se et udvalg af vores tidligere projekter."
                folder="Windows"
            />

             <ReferenceGallery 
                folder="Doors"
            />

        </>
    );
}

export default DoorsAndWindows;