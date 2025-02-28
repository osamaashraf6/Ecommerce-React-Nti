import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

const LazyLoadingImage = ({ src, alt, placeholder }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div ref={ref} style={{ minHeight: "200px" }}>
      {/* If image is in view, load the image, else show placeholder */}
      {inView && !imageLoaded && (
        <img
          src={placeholder} // Placeholder image (like a loading spinner or blurred image)
          alt={alt}
          style={{ width: "100%", height: "auto", opacity: 0.5 }}
        />
      )}

      {inView && (
        <img
          src={src} // Actual image
          alt={alt}
          onLoad={() => setImageLoaded(true)}
          style={{
            width: "100%",
            height: "auto",
            opacity: imageLoaded ? 1 : 0,
            transition: "opacity 0.5s ease",
          }}
        />
      )}
    </div>
  );
};

export default LazyLoadingImage;
