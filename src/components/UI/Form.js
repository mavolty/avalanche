import Input from './Input';
import styles from './Form.module.scss';

function Form({ submitHandler }) {
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <Input
        label="Name"
        input={{
          type: 'text',
          id: 'name',
          name: 'name',
          placeholder: 'Enter your name',
        }}
      />
      <Input
        label="Email"
        input={{
          type: 'email',
          id: 'email',
          name: 'email',
          placeholder: 'Enter your email',
        }}
      />
    </form>
  );
}

export default Form;
