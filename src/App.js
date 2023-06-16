import './App.css';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as yup from "yup"

function App() {
  const defaultValue = {
    fname: "",
    course: "",
    email: "",
    phone: "",
    gender: "",
    termcondition: false,
    addmissions: "",
  }
  // const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const ValidationSchema = yup.object().shape({
    fname: yup.string().min(3, "too short").max(20, "too much").required("Please enter the name"),
    course: yup.string().min(2, "too short").max(4, "too much").required("Please enter the current course"),
    email: yup.string().min(3, "too short").max(20, "too much").required("please enter the email").email("please vaild email"),
    phone: yup.number().min(10, "valid number").min(10, "valid number").required("please enter phone number"),

    gender: yup.string().required("please select gender "),
    termcondition: yup.boolean().oneOf([true], "please accept terms and condition"),
    addmission: yup.string().required("please choose only one way")
  })

  const handleSubmit = (values, resetForm) => {
    console.log("form-value", values)
    resetForm();
  }

  return (
    <div className="container">
      <h1 className='text-center my-4'>Form with Validation using Formik and yup</h1>
      <div className='row mx-5 mt-4'>
        <Formik
          initialValues={defaultValue}
          validationSchema={ValidationSchema}
          onSubmit={handleSubmit}
        >
          <Form className='border-solid border-2 shadow p-3'>
            <Field type="text" name="fname" placeholder="Enter the name" className="form-control mt-3" />
            <p className='text-danger'>
              <ErrorMessage name='fname' />
            </p>
            <Field type="text" name="course" placeholder="Enter the couse name" className="form-control  mt-3" />
            <p className='text-danger'>
              <ErrorMessage name='course' />
            </p>
            <Field type="email" name="email" placeholder="Enter the email" className="form-control  mt-3" />
            <p className='text-danger'>
              <ErrorMessage name='email' />
            </p>
            <Field type="text" name="phone" placeholder="Enter the phone" className="form-control  mt-3" />
            <p className='text-danger'>
              <ErrorMessage name='phone' />
            </p>
            {/* {Select box} */}
            <Field component="select" name="gender" className="form-control">
              <option value="" disabled>select</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </Field>
            <p className='text-danger'>
              <ErrorMessage name='gender' />
            </p>
            {/* checkbox */}
            <label>
              <Field type="checkbox" name="termcondition" className="form-inline m-1" />
              I accept the term condition.
            </label>
            <p className='text-danger'>
              <ErrorMessage name='termcondition' />
            </p>
            {/* Radio button */}
            <div className='my-2'>
              <label className='me-3'>
                <Field type="radio" name="addmissions" className="form-inline m-1" />
                Direct addmission
              </label>
              <label>
                <Field type="radio" name="addmissions" className="form-inline m-1" />
                Ref. to any Intrence
              </label>
            </div>
            <p className='text-danger'>
              <ErrorMessage name='addmissions' />
            </p>
            <div className='text-center'>
              <button type="submit" className='btn btn-warning '>Submit</button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default App;
