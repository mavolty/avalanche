import Form from '../UI/Form';
import Button from '../UI/Button';
import VerificationCode from '../UI/VerificationCode';

function EmailBody({ inputs, form, verificationCode, button }) {
  if (!verificationCode && !button) return null;

  return (
    <Form inputs={inputs} {...form}>
      {verificationCode && <VerificationCode size={verificationCode.size} />}
      {button && <Button {...button} />}
    </Form>
  );
}

export default EmailBody;
