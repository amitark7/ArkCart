import {  useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Shop from './component/Shop';
import Cart from './component/Cart';

function App() {
  const[cart,setCart]=useState([]);
  const[warning,setWarning]=useState(false)
  const[show,setShow]=useState(true)
 

  const handleCart=(item)=>{
    let isPresent=false;

    cart.forEach(element => {
      if(element.id===item.id){
        isPresent=true
      }
    });
    if(isPresent){
      setWarning(true);
      setTimeout(() => {
        setWarning(false)
      }, 2000);
      return;
    }
    setCart([...cart,item]);
    console.log(item)
  }

  const handleClick=(item,d)=>{
    let ind=-1;
    cart.forEach((element,index) => {
      if(element.id===item.id){
        ind=index;
      }
    });
    let tempArr=cart;
    let ans=tempArr[ind].amount +=d;
    tempArr[ind].amount=ans;
    if(tempArr[ind].amount===0){
      tempArr[ind].amount=1;
    }
    setCart([...tempArr]);
    console.log(item)
  }
  return (
    <div>
      <Navbar size={cart.length} setShow={setShow}/>
      {show?<Shop handleCart={handleCart}/>:<Cart cart={cart} setCart={setCart} key={cart.id} handleClick={handleClick}/>}
      {
        warning && <div className='warning'>Item already in your cart</div>
      }
    </div>
  );
}

export default App;
