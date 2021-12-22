import styles from './Form.module.scss';
import FormikInput from './FormikInput';
import { Formik, Form } from 'formik';

function FormikForm({ inputs, children, ...props }) {
  const input = inputs?.map(input => (
    <FormikInput
      key={input.id}
      label={input.label}
      id={input.id}
      name={input.name}
      type={input.type}
      {...input}
    />
  ));

  return (
    <Formik {...props}>
      <Form className={styles.form}>
        {inputs && <div className={styles.field}>{input}</div>}
        {children}
      </Form>
    </Formik>
  );
}

export default FormikForm;
