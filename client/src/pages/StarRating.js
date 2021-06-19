import { useRef } from "react";

function StarRating({ percentage, onClick }) {
  const widthPct = `${percentage * 100}%`;
  const elementRef = useRef();

  function handleClick(e) {
    onClick(
      e.nativeEvent.offsetX / elementRef.current.getBoundingClientRect().width
    );
  }

  return (
    <div className="star-rating" onClick={handleClick} ref={elementRef}>
      <span className="foreground" style={{ width: widthPct }}>
        ★★★★★
      </span>
      <span className="background">★★★★★</span>
    </div>
  );
}

export default StarRating;
