import React, { useRef, useState } from 'react';
import { Button, Input, Form, Modal } from 'antd';

const AddToDo = ({ addTask }) => {
  const form = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
   
  const submitHandler= (values)=>{
    addTask(values.name);
    form.current.resetFields();
    handleCancel();
  }
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add Task
      </Button>
      <Modal footer={null} title="Basic Modal" open={isModalOpen} onCancel={handleCancel}>
        <Form onFinish={submitHandler} ref={form}>
          <Form.Item name="name" rules={[{required: true}]}>
            <Input />
          </Form.Item>
          <Form.Item>
            <Button htmlType='submit' type='primary'>Save</Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

//const AddToDo = ({ addTask }) => {
// const [name, setName] = useState('');
//
//
// const submitHandler = (e) => {
//   e.preventDefault();
//   if (name.trim().length) { 
//     addTask(name);
//     setName('');
//   }
// };
//
// const handleChange = (e) => { 
//   setName(e.target.value);
// }
//
// return (
//   <div>
//     <form onSubmit={submitHandler}>
//       <input type="text" value={name} onChange={handleChange} /> <button>Add</button>
//     </form>
//   </div>
// );
//}

export default AddToDo;
