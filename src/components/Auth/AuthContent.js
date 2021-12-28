import styles from "./AuthContent.module.scss";
import AuthHeader from "./AuthHeader";
import AuthBody from "./AuthBody";
import AuthFooter from "./AuthFooter";
import EmailBody from "./EmailBody";

function AuthContent({ header, body, emailBody, footer }) {
  return (
    <div className={styles.container}>
      {header && (
        <AuthHeader
          featuredIcon={header.featuredIcon}
          title={header.title}
          text={header.text}
        />
      )}
      {body && (
        <AuthBody
          alert={body.alert}
          inputs={body.inputs}
          defaultForm={body.defaultForm}
          formikForm={body.formikForm}
          checkboxText={body.checkboxText}
          rowButton={body.rowButton}
          actionButton={body.actionButton}
          socialButton={body.socialButton}
        />
      )}
      {emailBody && (
        <EmailBody
          inputs={emailBody.inputs}
          form={emailBody.form}
          verificationCode={emailBody.verificationCode}
          button={emailBody.button}
        />
      )}
      {footer && (
        <AuthFooter
          text={footer.text}
          icon={footer.icon}
          button={footer.button}
        />
      )}
    </div>
  );
}

export default AuthContent;
