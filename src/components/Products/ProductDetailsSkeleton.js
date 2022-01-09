import ContentLoader from 'react-content-loader';

function ProductDetailsSkeleton(props) {
  return (
    <ContentLoader
      speed={2}
      width={604}
      height={530}
      viewBox='0 0 604 530'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
      {...props}
    >
      <rect x='0' y='8' rx='8' ry='8' width='588' height='24' />
      <rect x='0' y='46' rx='8' ry='8' width='210' height='24' />
      <rect x='0' y='105' rx='4' ry='4' width='170' height='18' />
      <rect x='0' y='160' rx='4' ry='4' width='128' height='18' />
      <rect x='0' y='198' rx='4' ry='4' width='66' height='46' />
      <rect x='82' y='198' rx='4' ry='4' width='66' height='46' />
      <rect x='164' y='198' rx='4' ry='4' width='66' height='46' />
      <rect x='0' y='270' rx='4' ry='4' width='128' height='18' />
      <rect x='0' y='306' rx='4' ry='4' width='184' height='40' />
      <rect x='0' y='406' rx='0' ry='0' width='260' height='48' />
      <rect x='292' y='406' rx='0' ry='0' width='144' height='48' />
    </ContentLoader>
  );
}

export default ProductDetailsSkeleton;
