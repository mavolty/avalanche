import styles from './Minus.module.scss';

function Minus({ color, ...props }) {
  return (
    <svg
      className={styles[color]}
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M1 7.5H14" stroke="black" />
    </svg>
  );
}

export default Minus;
