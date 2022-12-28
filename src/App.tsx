import React,{useState} from 'react';
import {Popconfirm,Table} from 'antd';
import './App.css';
import MyModal from './components/MyModal';

interface DataType{
  key:React.Key;
  name:string;
  age:number;
  address:string;
  action:string;

}
const dataSource =[
  {
    key: '0',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
    action: 'delete',
  },
  {
    key: '1',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
    action: 'delete',
  },
];


const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',

  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'adress',
  },
  {
    title: 'Action',
    key: 'action',
    
  },
];

const App: React.FC = () =>
(<>
  <Table dataSource={dataSource} columns={columns} />
  <div>
    <MyModal></MyModal>
  </div>
</>
)

export default App;
