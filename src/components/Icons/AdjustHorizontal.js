import styles from './AdjustHorizontal.module.scss';

function AdjustHorizontal({ color, ...props }) {
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
      <path
        d="M15 3.5L6.49999 3.5M6.49999 3.5C6.49999 2.39543 5.60455 1.5 4.49998 1.5C3.39542 1.5 2.49998 2.39543 2.49998 3.5M6.49999 3.5C6.49999 4.60457 5.60455 5.5 4.49998 5.5C3.39542 5.5 2.49998 4.60457 2.49998 3.5M2.49998 3.5L-1.52588e-05 3.5M15 11.5L12.5 11.5M12.5 11.5C12.5 10.3954 11.6046 9.5 10.5 9.5C9.39542 9.5 8.49998 10.3954 8.49998 11.5M12.5 11.5C12.5 12.6046 11.6046 13.5 10.5 13.5C9.39542 13.5 8.49998 12.6046 8.49998 11.5M8.49998 11.5H-1.51316e-05"
        stroke="black"
      />
    </svg>
  );
}

export default AdjustHorizontal;
