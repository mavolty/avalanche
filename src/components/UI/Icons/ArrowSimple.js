import styles from './ArrowSimple.module.scss';

function ArrowSimple({ color, ...props }) {
  if (props.direction === 'left') {
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
        <path d="M10 14L3 7.5L10 1" stroke="black" strokeLinecap="square" />
      </svg>
    );
  }

  if (props.direction === 'right') {
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
        <path d="M5 14L12 7.5L5 1" stroke="black" strokeLinecap="square" />
      </svg>
    );
  }

  if (props.direction === 'up') {
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
        <path d="M1 10L7.5 3L14 10" stroke="black" strokeLinecap="square" />
      </svg>
    );
  }

  if (props.direction === 'down') {
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
        <path d="M14 5L7.5 12L1 5" stroke="black" strokeLinecap="square" />
      </svg>
    );
  }
}

export default ArrowSimple;
