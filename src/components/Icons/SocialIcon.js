import Google from './Google';

function SocialIcon({ platform, color }) {
  if (platform === 'google') {
    return <Google color={color} />;
  }
}

export default SocialIcon;
