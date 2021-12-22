import Input from './Input';
import styles from './Form.module.scss';

function MyForm({ inputs, children, ...props }) {
  const input = inputs?.map(input => (
    <Input
      key={input.id}
      label={input.label}
      id={input.id}
      name={input.name}
      type={input.type}
      {...input}
    />
  ));

  return (
    <form className={styles.form} {...props}>
      {inputs && <div className={styles.field}>{input}</div>}
      {children}
    </form>
  );
}

export default MyForm;
