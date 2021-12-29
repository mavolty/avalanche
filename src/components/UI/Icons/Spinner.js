import styles from "./Spinner.module.scss";

function Spinner({ color, ...props }) {
  return (
    <svg
      className={styles[color]}
      width="15"
      height="15"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        background: "none",
        display: "block",
        shapeRendering: "auto",
      }}
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <circle
        cx="50"
        cy="50"
        r="42"
        strokeWidth="8"
        stroke="black"
        strokeDasharray="65.26548245743669 65.26548245743669"
        fill="none"
        strokeLinecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1s"
          keyTimes="0;1"
          values="0 50 50;360 50 50"
        ></animateTransform>
      </circle>
    </svg>
  );
}

export default Spinner;
