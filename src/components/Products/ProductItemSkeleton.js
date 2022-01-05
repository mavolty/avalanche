import ContentLoader from 'react-content-loader';

function ProductItemSkeleton(props) {
  return (
    <ContentLoader
      speed={3}
      width='100%'
      height='100%'
      viewBox='0 0 292 426'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
      {...props}
    >
      <rect x='0' y='0' rx='2' ry='2' width='292' height='338' />
      <rect x='0' y='362' rx='2' ry='2' width='85' height='12' />
      <rect x='0' y='385' rx='2' ry='2' width='292' height='16' />
      <rect x='0' y='410' rx='2' ry='2' width='115' height='16' />
    </ContentLoader>
  );
}

export default ProductItemSkeleton;
