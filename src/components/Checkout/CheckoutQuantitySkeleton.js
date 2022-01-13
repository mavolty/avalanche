import ContentLoader from 'react-content-loader';

function CheckoutQuantitySkeleton(props) {
  return (
    <ContentLoader
      speed={2}
      width='40'
      height='14'
      viewBox='0 0 40 14'
      backgroundColor='#e4e7ec'
      foregroundColor='#d0d5dd'
      {...props}
    >
      <rect x='0' y='0' rx='8' ry='8' width='100%' height='100%' />
    </ContentLoader>
  );
}

export default CheckoutQuantitySkeleton;
