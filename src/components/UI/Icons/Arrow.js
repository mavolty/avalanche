import styles from './Arrow.module.scss';

function Arrow({ color, ...props }) {
  if (props.direction === 'left')
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
        <path d="M1.5 7.5L5.5 3.5M1.5 7.5L5.5 11.5M1.5 7.5H14" stroke="black" />
      </svg>
    );

  if (props.direction === 'right')
    return (
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.5 7.5L9.5 3.5M13.5 7.5L9.5 11.5M13.5 7.5H1"
          stroke="black"
        />
      </svg>
    );

  if (props.direction === 'up')
    return (
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7.5 1.5L11.5 5.5M7.5 1.5L3.5 5.5M7.5 1.5V14" stroke="black" />
      </svg>
    );

  if (props.direction === 'down')
    return (
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.5 13.5L11.5 9.5M7.5 13.5L3.5 9.5M7.5 13.5V1"
          stroke="black"
        />
      </svg>
    );
}

export default Arrow;
