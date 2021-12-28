import styles from './AuthBody.module.scss';
import CheckboxText from '../UI/CheckboxText';
import Form from '../UI/Form';
import Button from '../UI/Button';
import SocialButton from '../UI/SocialButton';
import Alert from '../UI/Alert';
import FormikForm from '../UI/FormikForm';

function AuthBody({
  alert,
  inputs,
  defaultForm,
  formikForm,
  checkboxText,
  rowButton,
  actionButton,
  socialButton,
}) {
  let rowForm, actionForm;

  if (checkboxText || rowButton) {
    rowForm = (
      <div className={styles.row}>
        {checkboxText && <CheckboxText {...checkboxText} />}
        {rowButton && <Button {...rowButton} />}
      </div>
    );
  }

  if (actionButton || socialButton) {
    actionForm = (
      <div className={styles.actions}>
        {actionButton && <Button {...actionButton} />}
        {socialButton && <SocialButton {...socialButton} />}
      </div>
    );
  }

  return (
    <>
      {alert && <Alert {...alert} />}
      {defaultForm && (
        <Form inputs={inputs} {...defaultForm}>
          {rowForm}
          {actionForm}
        </Form>
      )}
      {formikForm && (
        <FormikForm inputs={inputs} {...formikForm}>
          {rowForm}
          {actionForm}
        </FormikForm>
      )}
    </>
  );
}

export default AuthBody;
