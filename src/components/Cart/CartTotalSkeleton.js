import ContentLoader from 'react-content-loader';

function CartTotalSkeleton(props) {
  return (
    <ContentLoader
      speed={2}
      width='100%'
      height='18'
      viewBox='0 0 135 18'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
      {...props}
    >
      <rect x='0' y='0' rx='8' ry='8' width='100%' height='18' />
    </ContentLoader>
  );
}

export default CartTotalSkeleton;
