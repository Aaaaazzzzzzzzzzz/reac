import React,{useState} from 'react';
import {Popconfirm,Table} from 'antd';
import './App.css';
import MyModal from './components/MyModal';

interface DataType{
  key:React.Key;
  name:string;
  age:string;
  address:string;
  action:string;

}
const App: React.FC = () => {
const [dataSource,setdataSource] = useState<DataType[]>([
  {
    key: '0',
    name: 'Mike',
    age: '0',
    address: '10 Downing Street',
    action: 'delete',
  },
  {
    key: '1',
    name: 'John',
    age: '0',
    address: '10 Downing Street',
    action: 'delete',
  },
]);


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
    render:(record:{key:React.Key}) =>
    dataSource.length >= 1 ? (
      <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
            <a>Delete</a>
          </Popconfirm>
    ):null
    
  },
];
const [count, setCount] = useState(3);
const handAdd = (dataSet:{name:string,age:string,address:string}) =>{
  setCount(count + 1)

  const newData: DataType = {
    key: count,
    name: dataSet.name,
    age: dataSet.age,
    address: dataSet.address,
    action: ''
  };
  setdataSource([...dataSource, newData]);
};
const handleDelete =(key:React.Key)=>{
  const newData =dataSource.filter((item) => item.key !==key);
  setdataSource(newData);
}

return(<>
  <Table dataSource={dataSource} columns={columns} />
  <div>
    <MyModal handAdd={handAdd}/>
  </div>
</>
)
};

export default App;
