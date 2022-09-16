import React from "react";
import ModalImage, {Lightbox} from 'react-modal-image';

const ImageExample = () => {
    const [openLightbox, setOpenLightbox] = React.useState(false);

    const closeLightBox = () => {
       setOpenLightbox(!openLightbox);
    }
    return(
        <>
            <h1>Example for image with small and large props</h1>
            <ModalImage 
            small = {"https://picsum.photos/id/1/200/300"}
            large = {"https://picsum.photos/id/1/400/800"}
            hideDownload={false}
            showRotate={true}
            />
            <h1>Example for image with Lightbox</h1>
            {openLightbox && 
            <Lightbox 
            smallSrcSet = {"https://picsum.photos/id/1/200/300"}
            medium = {"https://picsum.photos/id/2/400/800"}
            large = {"https://picsum.photos/id/4/200/1600"}
            alt="Hello World!"
            onClose={closeLightBox}
            imageBackgroundColor="red"
            />}

            <button
            onClick={(e)=>{
                setOpenLightbox(!openLightbox);
                e.preventDefault();
            }}
            >Open Image</button>
        </>
    )
}
export default ImageExample;