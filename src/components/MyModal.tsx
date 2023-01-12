import { type } from '@testing-library/user-event/dist/type';
import { Button,Modal,Input,Form} from 'antd';
import { stringify } from 'querystring';
import React,{useState,FC} from 'react';

type MymodalProps ={
  handAdd:(dataSet:{name:string,age:string,address:string})=>void
}
const MyModal: React.FC <MymodalProps>=({handAdd})=>{
    const[isModalOpen, setIsModalOpen] = useState(false);
    const showModal =()=>{
        setIsModalOpen(true);
    };
    
    const handleCancel =()=>{
        setIsModalOpen(false);
    };

    const [dataSet,setdataSet] = useState<{
      name:string,
      age:string,
      address:string
    }>({name:'',age:'',address:''})

    const handleOk = () => {
        setIsModalOpen(false);
        handAdd(dataSet);
        setdataSet({name:'',age:'',address:''})

      };

   

    return(
        <>
        <Button type="primary" onClick={showModal}>
        Add
      </Button>
      <Modal title="Add data" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <Input placeholder='name' onChange={(e: any) => {
          setdataSet((p) => {
            return { ...p, name: e.target.value }
          })
        }} value={dataSet.name}
        />
        <Input placeholder='age' onChange={(e: any) => {
          setdataSet((p) => {
            return { ...p, age: e.target.value }
          })
        }} value={dataSet.age} 
        />
        <Input placeholder='address' onChange={(e: any) => {
          setdataSet((p) => {
            return { ...p, address: e.target.value }
          })
        }} value={dataSet.address} 
      />
      </Modal>
        </>
    )
}
export default MyModal;


