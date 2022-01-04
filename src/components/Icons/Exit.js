import styles from './Exit.module.scss';

function Exit({ color, ...props }) {
  return (
    <svg
      className={styles[color]}
      width='15'
      height='15'
      viewBox='0 0 15 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M13.5 7.5L10.5 10.75M13.5 7.5L10.5 4.5M13.5 7.5L4 7.5M8 13.5H1.5L1.5 1.5L8 1.5'
        stroke='black'
      />
    </svg>
  );
}

export default Exit;
