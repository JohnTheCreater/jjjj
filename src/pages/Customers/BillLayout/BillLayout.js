import React,{useState,useEffect} from 'react'

import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableFooter,
  TableCell,
  TableBody,
  Button,
  Checkbox,
  Icon,
  Table,
  PaymentIcon
} from 'semantic-ui-react'
import axios from 'axios'
import aud from './mx.mp3';
import aud1 from './mx1.mp3';
import { useNavigate } from 'react-router-dom';

const BillLayout = ({}) => {

   const[status1,setStatus1]=useState([])
   const [user, setUser] = useState('');
   const [iconSize, setIconSize] = useState('2xl'); // initial size


   const audio=new Audio(aud)
   const audio1=new Audio(aud1)
  useEffect(()=>{
    axios.get('http://localhost:2718/api/Status').then(status1=>setStatus1(status1.data)).catch(err=>console.log(err))
  },[status1])
  console.log(status1)

  const makePayment=(user)=>{
    axios.post('http://localhost:2718/api/pay',{room:user.room})
    console.log('payment made successfull')
    audio1.play()


  }
  const makeNotify=(user)=>{
    axios.post('http://localhost:2718/api/State',{room:user.room})
    console.log('notification send successfully')
    audio.play()
  }

  const nav=useNavigate()

 

  
  return (
    <div className='p-5'>
<button className='border bg-green-400 p-3 rounded-2xl' onClick={() => nav('/customers/billGeneration')}>generate tax</button>      <Table celled compact definition>
    <TableHeader fullWidth>
      <TableRow >
        
        <TableHeaderCell >Room No</TableHeaderCell>
        <TableHeaderCell>Name</TableHeaderCell>
        <TableHeaderCell>phone number</TableHeaderCell>
        <TableHeaderCell>block name</TableHeaderCell>
        <TableHeaderCell>email</TableHeaderCell>
        <TableHeaderCell>amount</TableHeaderCell>
        <TableHeaderCell className='flex justify-center'>status</TableHeaderCell>

      </TableRow>
    </TableHeader>

    <TableBody>
       
        {


          status1.map(user=>{
            return(
              <TableRow>
               
            <TableCell>{user.room}</TableCell>
           <TableCell>{user.name}</TableCell>
           <TableCell>{user.phone}</TableCell>
          <TableCell>{user.blockname}</TableCell>
          <TableCell>{user.email}</TableCell>
          <TableCell>{user.total}</TableCell>
          <TableCell className={!user.status?'bg-red-300':'bg-green-200'}>{user.status?'paid':(<>
    
    <div className='flex justify-between'>
    
     unpaid
     <button className='border-green text-white bg-green-600  w-20 p-2 rounded-2xl' onClick={()=>makePayment(user)}>pay</button>
     <button className={""} onClick={() =>makeNotify(user)}>
 <Icon name='bell'/> 
  </button>  
  </div>  
 </>
)}</TableCell>
          {console.log(user.status)}
          
          </TableRow>
            )

          })
        }
        
      
    
      
       
    </TableBody>

    <TableFooter fullWidth>
      <TableRow>
        <TableHeaderCell />
        <TableHeaderCell colSpan='6'>
        
         
        </TableHeaderCell>
      </TableRow>
    </TableFooter>
  </Table>
    </div>
  )
  }

export default BillLayout
