import ContentLoader from 'react-content-loader';

function CartImageSkeleton(props) {
  return (
    <ContentLoader
      speed={2}
      width='100%'
      height='100%'
      viewBox='0 0 104 104'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
      {...props}
    >
      <rect x='0' y='0' rx='2' ry='2' width='100%' height='100%' />
    </ContentLoader>
  );
}

export default CartImageSkeleton;
