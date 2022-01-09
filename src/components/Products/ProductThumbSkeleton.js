import ContentLoader from 'react-content-loader';

function ProductThumbSkeleton(props) {
  return (
    <ContentLoader
      speed={2}
      width='100%'
      height='100%'
      viewBox='0 0 85 564'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
      {...props}
    >
      <rect x='0' y='0' rx='0' ry='0' width='100%' height='113' />
      <rect x='0' y='248' rx='0' ry='0' width='100%' height='113' />
      <rect x='0' y='124' rx='0' ry='0' width='100%' height='113' />
      <rect x='0' y='372' rx='0' ry='0' width='100%' height='113' />
      <rect x='0' y='496' rx='0' ry='0' width='100%' height='113' />
    </ContentLoader>
  );
}

export default ProductThumbSkeleton;
