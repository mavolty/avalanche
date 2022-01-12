import styles from './Stepper.module.scss';
import CheckCircle from '../Icons/CheckCircle';

function Stepper({ steps, activeStep, onStepChange }) {
  return (
    <ol className={styles.container}>
      {steps.map((step, index) => (
        <li
          key={index}
          className={`${styles.item} ${
            index <= activeStep ? styles.itemActive : ''
          }`}
          onClick={() => onStepChange(index)}
        >
          {index === activeStep ? (
            <div className={styles.iconActive}>
              <div className={styles.iconInner} />
            </div>
          ) : index < activeStep ? (
            <div className={styles.iconCompleted}>
              <div className={styles.iconInner}>
                <CheckCircle color='primary' />
              </div>
            </div>
          ) : (
            <div className={styles.iconDefault}>
              <div className={styles.iconInner} />
            </div>
          )}
          <h3 className={styles.title}>{step.title}</h3>
          <p className={styles.description}>{step.description}</p>
        </li>
      ))}
    </ol>
  );
}

export default Stepper;
