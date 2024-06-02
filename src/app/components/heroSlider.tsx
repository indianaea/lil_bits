"use client";
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './heroSlider.css';

const HeroSlider = () => {
    return (
        <div className="carousel-wrapper">
            <Carousel
                showArrows={false} // Hide arrows
                showStatus={false} // Hide status
                showIndicators={true} // Show dots
                infiniteLoop={true}
                showThumbs={false} // Hide thumbnails
                useKeyboardArrows={true}
                autoPlay={true} // Enable autoplay
                stopOnHover={false} // Do not stop on hover
                swipeable={true}
                dynamicHeight={true}
                emulateTouch={true}
                autoFocus={false}
                interval={5000} // Set autoplay interval
                transitionTime={700} // Set transition time
                swipeScrollTolerance={5}
                ariaLabel="Hero Slider"
            >
                <div>
                    <img src="lilbits.png" alt="Slide 1" />
                </div>
                <div>
                    <img src="lilbits.png" alt="Slide 2" />
                </div>
                <div>
                    <img src="lilbits.png" alt="Slide 3" />
                </div>
            </Carousel>
        </div>
    );
};

export default HeroSlider;
