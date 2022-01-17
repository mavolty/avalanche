import styles from './Dropdown.module.scss';
import { Link } from 'react-router-dom';
import { Menu } from '@headlessui/react';

function Dropdown({ button, items, account }) {
  return (
    <Menu as='div' className={styles.container}>
      {({ open }) => (
        <>
          <Menu.Button className={styles.button}>
            <span className={styles.buttonText}>{button.text}</span>
            {button.icon}
          </Menu.Button>
          {open && (
            <div className={styles.dropdown}>
              {account && (
                <div className={styles.header}>
                  {account.avatar}
                  <div className={styles.headerInfo}>
                    <p className={styles.headerName}>{account.name}</p>
                    <p className={styles.headerEmail}>{account.email}</p>
                  </div>
                </div>
              )}
              <Menu.Items as='ul' static className={styles.items}>
                {items.map(item => (
                  <Menu.Item as='li' key={item.text}>
                    {({ active }) => {
                      if (item.element === 'link')
                        return (
                          <Link
                            to={item.target}
                            className={`${active ? styles.itemActive : ''} ${
                              styles.item
                            }`}
                          >
                            {item.text}
                          </Link>
                        );

                      if (item.element === 'button')
                        return (
                          <button
                            className={`${active ? styles.itemActive : ''} ${
                              styles.item
                            }`}
                            {...item}
                          >
                            {item.text}
                          </button>
                        );
                    }}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </div>
          )}
        </>
      )}
    </Menu>
  );
}

export default Dropdown;
