import ContentLoader from 'react-content-loader';

function CartQuantitySkeleton(props) {
  return (
    <ContentLoader
      speed={2}
      width='100%'
      height='100%'
      viewBox='0 0 184 40'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
      {...props}
    >
      <rect x='0' y='0' rx='4' ry='4' width='100%' height='100%' />
    </ContentLoader>
  );
}

export default CartQuantitySkeleton;
