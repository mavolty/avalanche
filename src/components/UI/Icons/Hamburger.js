import styles from './Hamburger.module.scss';

function Hamburger({ color, ...props }) {
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
      <path d="M0 3.5H15M0 11.5H15M0 7.5H15" stroke="black" />
    </svg>
  );
}

export default Hamburger;
