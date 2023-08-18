import React, { useEffect, useState } from "react";

const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // const handlePrevClick = () => {
    //     setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    // };
    const handlePrevClick = () => {
        if (currentIndex === 0)
            setCurrentIndex(images.length - 1 )
        else
            setCurrentIndex(currentIndex - 1)
    };
    const handleNextClick = () => {
        console.log('click', currentIndex);
        if (currentIndex === images.length - 1)
                setCurrentIndex(0) 
        else
       setCurrentIndex(currentIndex + 1)
    };

useEffect(() => {
    console.log(currentIndex);
}, [currentIndex]);

return (
    <section>
        {images && images.length > 0 && images[currentIndex] ? (
            <div className="image-slider">
                <button className="slider-button" onClick={handlePrevClick}>Previous</button>
                <img src={`http://localhost:4987/images/${images[currentIndex]}`} alt={`Image ${currentIndex}`} />
                <button className="slider-button" onClick={handleNextClick}>Next</button>
            </div>
        ) : (
            <img src="http://localhost:4987/images/no-image.png" alt={`Image ${currentIndex}`} />
        )}
    </section>
);
};

export default ImageSlider;
