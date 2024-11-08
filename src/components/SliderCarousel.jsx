// src/components/SliderCarousel.jsx

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const SliderCarousel = ({
  children,
  customResponsive,
  infinite = true,
  autoPlay = false,
  autoPlaySpeed = 3000,
  className = "",
  showDots = false,
  arrows = true,
  containerClass = "",
}) => {
  // Default responsive settings, can be overridden by `customResponsive`
  const defaultResponsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // Use custom settings if provided, otherwise use the defaults
  const responsive = customResponsive || defaultResponsive;

  // Check if children are available
  const hasChildren = React.Children.count(children) > 0;

  return (
    <div className={containerClass}>
      {hasChildren ? (
        <Carousel
          responsive={responsive}
          infinite={infinite}
          autoPlay={autoPlay}
          autoPlaySpeed={autoPlaySpeed}
          arrows={arrows}
          showDots={showDots}
          className={className}
        >
          {children}
        </Carousel>
      ) : (
        <div className="flex items-center justify-center h-48">
          {/* Placeholder Content - can be a spinner, text, or any placeholder you prefer */}
          <p className="text-gray-500 text-lg">Loading content, please wait...</p>
        </div>
      )}
    </div>
  );
};

export default SliderCarousel;
