import ContentLoader from 'react-content-loader';

function ProductCategoriesSkeleton(props) {
  return (
    <ContentLoader
      speed={3}
      width='100%'
      height='100%'
      viewBox='0 0 286 22'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
      {...props}
    >
      <rect x='35' y='2' rx='5' ry='5' width='50%' height='18' />
      <rect x='3' y='0' rx='4' ry='4' width='22' height='22' />
    </ContentLoader>
  );
}

export default ProductCategoriesSkeleton;
