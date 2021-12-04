import styles from './CartPlus.module.scss';

function CartPlus({ color, ...props }) {
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
        d="M0.5 0.5L1.1 2.5M1.1 2.5L3.5 10.5H14.5V4.5C14.5 3.39543 13.6046 2.5 12.5 2.5H1.1ZM8.5 4V9M6 6.5H11M12.5 14.5C11.9477 14.5 11.5 14.0523 11.5 13.5C11.5 12.9477 11.9477 12.5 12.5 12.5C13.0523 12.5 13.5 12.9477 13.5 13.5C13.5 14.0523 13.0523 14.5 12.5 14.5ZM4.5 13.5C4.5 12.9477 4.94772 12.5 5.5 12.5C6.05228 12.5 6.5 12.9477 6.5 13.5C6.5 14.0523 6.05228 14.5 5.5 14.5C4.94772 14.5 4.5 14.0523 4.5 13.5Z"
        stroke="black"
      />
    </svg>
  );
}

export default CartPlus;
