import ContentLoader from 'react-content-loader';

function CheckoutNameSkeleton(props) {
  return (
    <ContentLoader
      speed={2}
      width='100%'
      height='14'
      viewBox='0 0 215 14'
      backgroundColor='#e4e7ec'
      foregroundColor='#d0d5dd'
      {...props}
    >
      <rect x='0' y='0' rx='8' ry='8' width='100%' height='100%' />
    </ContentLoader>
  );
}

export default CheckoutNameSkeleton;
