import styles from './Tab.module.scss';
import { Tab } from '@headlessui/react';

function MyTab({ content }) {
  return (
    <Tab.Group>
      <Tab.List className={styles.list}>
        {content.tabs.map(tab => (
          <Tab
            key={tab.id}
            className={({ selected }) =>
              selected ? styles.tab + ' ' + styles.tabSelected : styles.tab
            }
          >
            {tab.text}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className={styles.panels}>
        {content.panels.map(panel => (
          <Tab.Panel key={panel.id} className={styles.panel}>
            {panel.text}
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}

export default MyTab;
