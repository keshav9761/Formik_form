import { useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import { incrementByAmount } from './Redux/counterSlice';
import { useDispatch } from 'react-redux';

const SignUpSchema = yup.object({
    fname: yup.string().min(2, "too short ").max(5, "too much").required("please enter the name"),
    Email: yup.string().required("please enter the email").email("plz valid mail"),
    phone: yup.number("please use number").max(10,"too max").required("fill please"),
    course: yup.string().required("please select any one "),
    gender: yup.string().required("please select one "),
    policy: yup.boolean().oneOf([true], "please cheacked").required("please accept the term and condition"),
    password: yup.string().min(5).required("please enter the password"),
    confirmPassword: yup.string().min(5)
        .oneOf([yup.ref("password"), null], "please same password")
        .required("please enter confirm password")
})


export default function Method2() {
    
    const dispatch = useDispatch()

    const { handleChange, handleSubmit, touched, values, errors, handleBlur, } = useFormik({
        initialValues: {
            fname: '',
            phone: '',
            Email: '',
            course: '',
            gender: '',
            policy: false,
            password: '',
            confirmPassword: ''
        },

        validationSchema: SignUpSchema,

        onSubmit: (values,action) => {
            console.log("form", values)
            dispatch(incrementByAmount(values))
            action.resetForm();
        }
    })
    return (
        <div>
            <h1 className='text-center '>Validation of useFormik Hook</h1>
            <div className='container mt-5'>
                <form className='mx-5'
                    onSubmit={handleSubmit}
                >
                    <label className='my-2'>Name</label>
                    <input type='text' className='form-control'
                        name='fname'
                        value={values.fname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.fname && touched.fname ? (<p className='text-danger'>{errors.fname}</p>) : null}

                    <label className='my-2'>E-mail</label>
                    <input type='email' className='form-control'
                        name='Email'
                        value={values.Email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.Email && touched.Email ? (<p className='text-danger'>{errors.Email}</p>) : null}

                    <label className='my-2'>phone</label>
                    <input type='text' className='form-control'
                        name='phone'
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.phone && touched.phone ? (<p className='text-danger'>{errors.phone}</p>) : null}

                    <label className='my-2'>Course</label>
                    <select className='form-control'
                        name='course'
                        value={values.course}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    >
                        <option value=''>--Select--</option>
                        <option value="BCA">BCA</option>
                        <option value="MCA">MCA</option>
                    </select>
                    {errors.course && touched.course ? (<p className='text-danger'>{errors.course}</p>) : null}

                    <input type='checkbox'
                        name='policy'
                        value={values.policy}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <label className='mx-2 my-2'>Term & condition</label>
                    {errors.policy && touched.policy ? (<p className='text-danger'>{errors.policy}</p>) : null}

                    <div>
                        <input type='radio'
                            name='gender'
                            value="female"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <label className='mx-2'>Femal</label>
                        <input type='radio'
                            name='gender'
                            value="male"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <label className='mx-2'>Male</label>
                    </div>
                    {errors.gender && touched.gender ? (<p className='text-danger'>{errors.gender}</p>) : null}

                    <label>Password</label>
                    <input type='password' className='form-control'
                        name='password'
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.password && touched.password ? (<p className='text-danger'>{errors.password}</p>) : null}

                    <label>Confirm Password</label>
                    <input type='password' className='form-control'
                        name='confirmPassword'
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />

                    {errors.confirmPassword && touched.confirmPassword ? (<p className='text-danger'>{errors.confirmPassword}</p>) : null}

                    <div className='text-center'>
                        <button className="btn btn-warning" type='submit' >Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
