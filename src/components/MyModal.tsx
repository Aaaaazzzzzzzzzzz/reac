import { Button,Modal} from 'antd';
import React,{useState,FC} from 'react';
const MyModal: React.FC =()=>{
    const[isModalOpen, setIsModalOpen] = useState(false);
    const showModal =()=>{
        setIsModalOpen(true);
    };
    const handleOk =()=>{
        setIsModalOpen(false);
    };
    const handleCancel =()=>{
        setIsModalOpen(false);
    };
    return(
        <>
        <Button type="primary" onClick={showModal}>
        Add
      </Button>
      <Modal title="Add" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>First input</p>
        <p>Second input</p>
        <p>Thirty input</p>
      </Modal>
        
        </>
    )
}
export default MyModal;