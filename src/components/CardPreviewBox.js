import { useOutletContext } from "react-router-dom";
import GalleryCard from "./GalleryCard";


const CardPreviewBox = ({stampOn, borderOn}) => {
const {formData} = useOutletContext();
    return (
        <>
<GalleryCard card={formData} />
        </>
    );
};



export default CardPreviewBox