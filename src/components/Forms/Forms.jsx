import { Form, Input, Button } from 'antd';
import React, { useRef } from 'react';

const Forms = () => {

    const form = useRef(null);

    const initialValues = {
        name: '',
        amount: 1,
        price: 0
    };

    const submitHandler = (values) => 
    {
        form.current.resetFields();
    }


    return (
        <div>
            <Form ref={form} onFinish={submitHandler} initialValues={initialValues}
                labelCol={{ span: 8, }}
                wrapperCol={{ span: 16, }}
                style={{ maxWidth: 600, }}>
                <Form.Item name='name' label='Product name:' rules={
                    [{required: true, message: "Name is required"},
                    {min: 3}, 
                    {max: 50},
                    {pattern: /^[a-zA-Z]+$/, message: 'Number error'}
                    ]}>
                    <Input />
                </Form.Item>
                <Form.Item name='amount' label='Product amount:'>
                    <Input />
                </Form.Item>
                <Form.Item name='price' label='Product price:'>
                    <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16, }}>
                    <Button htmlType='submit'>Save</Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Forms;
