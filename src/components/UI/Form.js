import Input from './Input';
import styles from './Form.module.scss';

function Form({ submitHandler, inputs, children }) {
  const input = inputs?.map(input => (
    <Input
      key={input.id}
      label={input.label}
      input={{
        type: input.type,
        id: input.id,
        name: input.name,
        placeholder: input.placeholder,
        autoComplete: input.autoComplete,
      }}
    />
  ));
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      {inputs && <div className={styles.field}>{input}</div>}
      {children}
    </form>
  );
}

export default Form;
