import ContentLoader from 'react-content-loader';

function CheckoutImageSkeleton(props) {
  return (
    <ContentLoader
      speed={2}
      width='100%'
      height='100%'
      viewBox='0 0 72 72'
      backgroundColor='#d0d5dd'
      foregroundColor='#98a2b3'
      {...props}
    >
      <rect x='0' y='0' rx='2' ry='2' width='100%' height='100%' />
    </ContentLoader>
  );
}

export default CheckoutImageSkeleton;
