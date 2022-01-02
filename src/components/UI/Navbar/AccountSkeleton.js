import ContentLoader from 'react-content-loader';

function AccountSkeleton(props) {
  return (
    <ContentLoader
      speed={2}
      width={115}
      height={32}
      viewBox='0 0 115 32'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
      {...props}
    >
      <circle cx='98' cy='16' r='16' />
      <rect x='0' y='10' rx='2' ry='2' width='67' height='12' />
    </ContentLoader>
  );
}

export default AccountSkeleton;
