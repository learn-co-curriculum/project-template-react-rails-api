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
    <div style={style} onClick={handleClick} ref={elementRef}>
      <span style={{ width: widthPct,  color: "var(--theme-primary)",
  position: "absolute",
  display: "flex",
  overflow: "hidden" }}>
        ★★★★★
      </span>
      <span style={background}>★★★★★</span>
    </div>
  );
}
const style = {
  color: "rgba(0, 0, 0, 0.1)",
  fontSize: "1.5rem",
  position: "relative",
  display: "inline-block",
  cursor: "pointer"
}


const background = {
  display: "flex"
}

export default StarRating;