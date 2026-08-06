import ReferenceGallery from "../../components/referenceGallery/ReferenceGallery";

function DoorsAndWindows() {
    return (
        <>

            <ReferenceGallery 
                title="Døre og Vinduer"
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