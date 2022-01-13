import styles from './CheckoutForm.module.scss';
import * as Yup from 'yup';
import Button from '../../components/UI/Button';
import FormikForm from '../../components/UI/FormikForm';
import CheckboxText from '../../components/UI/CheckboxText';

function CheckoutForm({ formInputs, submitHandler }) {
  return (
    <main className={styles.container}>
      <h3 className={styles.heading}>Shipping Information</h3>
      <FormikForm
        inputs={formInputs}
        onSubmit={submitHandler}
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          postalCode: '',
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required('Nama depan harus diisi'),
          lastName: Yup.string().notRequired(),
          email: Yup.string()
            .email('Email tidak valid')
            .required('Email harus diisi'),
          phone: Yup.string().required('Nomor telepon harus diisi'),
          address: Yup.string().required('Alamat harus diisi'),
          city: Yup.string().required('Kota harus diisi'),
          postalCode: Yup.string().required('Kode pos harus diisi'),
        })}
      >
        <CheckboxText
          text='Save contact information'
          input={{
            type: 'checkbox',
            id: 'save-contact',
            name: 'save-contact',
          }}
        />
        <Button
          element='button'
          theme='primary'
          size='lg'
          text='Continue to shipping'
          input={{
            type: 'submit',
          }}
        />
      </FormikForm>
    </main>
  );
}

export default CheckoutForm;
