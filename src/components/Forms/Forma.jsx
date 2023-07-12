import React from 'react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './Forma.module.css'

const initialValues = {
    name: '',
    amount: 1,
    price: 0
};

const PRODUCT_SCHEMA = Yup.object().shape({
    name: Yup.string().min(3).max(50).required(),
    amount: Yup.number().min(1).required(),
    price: Yup.number().min(0).required()
});


const submitHandler = (values, formikBag) => {
    formikBag.resetForm();
}

const Forma = () => {
    return (
        <div>
            <h1>Forma</h1>
            <Formik initialValues={initialValues} onSubmit={submitHandler} validationSchema={PRODUCT_SCHEMA}>
                {({errors}) =>
                    <Form>
                        <div>
                            <Field name="name" plceholder="Name: " />
                            <ErrorMessage component='span' name="name" className={styles.error}/>
                        </div>
                        <div>
                            <Field name="amount" plceholder="Amount: " />
                            <ErrorMessage component='span' name="amount" className={styles.error}/>
                        </div>
                        <div>
                            <Field name="price" plceholder="Price: " />                            
                            <ErrorMessage component='span' name="price" className={styles.error}/>
                        </div>
                        <Field type="submit" value="Add" id="add"/>
                    </Form>
                }
            </Formik>
        </div>
    );
}

export default Forma;
