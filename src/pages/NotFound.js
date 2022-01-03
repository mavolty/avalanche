import styles from './NotFound.module.scss';
import Button from '../components/UI/Button';
import Empty from '../components/UI/Empty';
import Icon from '../components/Icons/Icon';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <Empty
        title='404 Not Found'
        text='Halaman yang anda cari tidak ditemukan'
      />
      <div className={styles.actions}>
        <Button
          element='button'
          theme='secondary-gray'
          size='md'
          text='Kembali'
          input={{ onClick: () => navigate(-1) }}
          icon={<Icon name='arrow' direction='left' />}
        />
        <Button
          element='link'
          theme='primary'
          size='md'
          text='Beranda'
          input={{ to: '/' }}
          icon={
            <Icon
              name='home'
              color='white'
              style={{ width: '1rem', height: '1rem' }}
            />
          }
        />
      </div>
    </div>
  );
}

export default NotFound;
