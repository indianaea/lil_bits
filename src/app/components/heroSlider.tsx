"use client";

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './heroSlider.css';

const HeroSlider = () => {
    return (
        <div className="carouselContainer">
            <div className="carouselWrapper">
                <Carousel
                    showArrows={false} 
                    showStatus={false} 
                    showIndicators={true} 
                    infiniteLoop={true}
                    showThumbs={false} 
                    useKeyboardArrows={true}
                    autoPlay={true}
                    stopOnHover={false}
                    swipeable={true}
                    dynamicHeight={true}
                    emulateTouch={true}
                    autoFocus={false}
                    interval={5000} 
                    transitionTime={700} 
                    swipeScrollTolerance={5}
                    ariaLabel="Hero Slider"
                >
                    <div className="imageContainer">
                        <img src="spices.jpg" alt="Slide 1" />
                    </div>
                    <div className="imageContainer">
                        <img src="kex.jpg" alt="Slide 2" />
                    </div>
                    <div className="imageContainer">
                        <img src="foods.jpg" alt="Slide 3" />
                    </div>
                    <div className="imageContainer">
                        <img src="spaghetti.jpg" alt="Slide 3" />
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default HeroSlider;
