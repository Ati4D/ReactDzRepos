import React, { useState, useRef } from 'react';
import { Button, Modal, Form, Input } from 'antd';

const EditToDo = ({ Name, editTask, taskId }) => {
    const form = useRef();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const submitHandler = (values) => {
        editTask(taskId, values.name);
        handleCancel();
    }
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Button type='default' onClick={showModal}>Edit</Button>
            <Modal title="Basic Modal" open={isModalOpen} footer={null} onCancel={handleCancel}>
            <Form onFinish={submitHandler} ref={form} initialValues={{name: Name}}>
                    <Form.Item name='name' rules={[{ min: 2 }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType='submit' type='primary'>Save</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}

export default EditToDo;
