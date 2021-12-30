import styles from './Add.module.scss';

function Add({ color, ...props }) {
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
      <path d="M7.5 1V14M1 7.5H14" stroke="black" />
    </svg>
  );
}

export default Add;
