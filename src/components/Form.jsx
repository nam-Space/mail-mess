import React from 'react'
import {Formik, Form, Field} from 'formik'
import * as Yup from "yup"
import Mail from './Mail'
import {useNavigate} from 'react-router-dom'

const SignUpSchema = Yup.object().shape({
    name: Yup.string()
        .required("Required"),
    email: Yup.string()
        .required("Required")
        .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Required"),
    phone: Yup.string()
        .required("Required"),
    message: Yup.string()
        .required("Required")
})

const FormRegister = () => {
    const navigate = useNavigate()

    return (
        <div className='form-register'>
            <h1>Sign up</h1>
            <Formik 
                initialValues={{
                    name: "",
                    email: "",
                    phone: "",
                    message: ""
                }}
                validationSchema={SignUpSchema}
                onSubmit={values => {
                    console.log('Add contact successfully!!!')
                    navigate('/mail')
                }}
            >
                {({errors, touched}) => (
                    <Form>
                        <div className={errors.name && touched.name && 'custom-input-error'}>
                            <label htmlFor="name">Name</label>
                            <Field name="name"/>
                            {errors.name && touched.name && (
                                <div className='error'>{errors.name}</div>
                            )}
                            <br></br>
                        </div>
                        
                        <div className={errors.email && touched.email && 'custom-input-error'}>
                            <label htmlFor="email">Email</label>
                            <Field name="email" type='email'/>
                            {errors.email && touched.email && (
                                <div className='error'>{errors.email}</div>
                            )}
                            <br></br>
                        </div>

                        <div className={errors.phone && touched.phone && 'custom-input-error'}>
                            <label htmlFor="phone">Phone</label>
                            <Field name='phone' type='number'/>
                            {errors.phone && touched.phone && (
                                <div className='error'>{errors.phone}</div>
                            )}
                            <br></br>
                        </div>
                        
                        <div className={errors.message && touched.message && 'custom-input-error'}>
                            <label htmlFor="message">Message</label>
                            <Field name='message' type='text'/>
                            {errors.message && touched.message && (
                                <div className='error'>{errors.message}</div>
                            )}
                            <br></br>
                        </div>
                        

                        <button type='submit'>Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default FormRegister