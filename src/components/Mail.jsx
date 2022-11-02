import React from 'react'
import * as Yup from 'yup'
import {Formik, Form, Field, ErrorMessage } from 'formik'
import {useNavigate} from 'react-router-dom'

const Mail = () => {
    const navigate = useNavigate()

    const validationSchema = Yup.object().shape({
        to: Yup.string().required('Required'),
        title: Yup.string().required('Required'),
        message: Yup.string().required('Required'),
        file: Yup.object().required('This is object file')
    })

    return (
        <div className="form-register">
            <h1>Mail Form</h1>
            <Formik
                initialValues={{
                    to: '',
                    title: '',
                    message: '',
                    file: {}
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values)
                    navigate('/')
                }}
            >
                {({errors, touched}) => (
                    <Form>
                        <div className={errors.to && touched.to && `custom-input-error`}>
                            <label htmlFor="to">Name</label>
                            <Field 
                                name='to'
                            />
                            {errors.to && touched.to && <span className='error'>{errors.to}</span>}
                        </div>
                        <div className={errors.title && touched.title && `custom-input-error`}>
                            <label htmlFor="title">Title</label>
                            <Field 
                                name='title'
                            />
                            {errors.title && touched.title && <span className='error'>{errors.title}</span>}
                        </div>
                        <div className={errors.message && touched.message && `custom-input-error`}>
                            <label htmlFor="message">Message</label>
                            <Field 
                                name='message'
                            />
                            {errors.message && touched.message && <span className='error'>{errors.title}</span>}
                        </div>
                        <div className={errors.file && touched.file && `custom-input-error`}>
                            <input type="file" name="file"/>
                            {errors.file && touched.file && <span className='error'>{errors.file}</span>}
                        </div>

                        <button type='submit'>Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Mail