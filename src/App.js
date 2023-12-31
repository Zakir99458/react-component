import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  return (
    <div className="App">
       {/* <Counter></Counter> */}
       {<ExternalUsers></ExternalUsers>}

    </div>
  );
}

function User(props){

  return(
    <div className='product'>
      <h2>Name: {props.name}</h2>
      <h3>Email: {props.email}</h3>
    </div>
  )
}

function ExternalUsers(){
  const [users, setUsers] = useState([]);
  
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
  },[])
  
  return(
    <div>
      <h3>External Users</h3>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0);
  // console.log(count, setCount);

  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  }
  
  const handleDecrease = () => {
    const newCount = count - 1;
    setCount(newCount);
  }
  
  return (
    <div> 
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}

function Product(props){
  const productStyle = {
    border: '3px solid blue',
    borderRadius: "10px"
  }
  return (
    <div className='product' style={productStyle}>
      <h3>Name: {props.name}</h3>
      <h4>Price: {props.price}</h4>
    </div>
  )
}

export default App;

//  {/* <Product name="Mobile" price="15000"></Product>
//         <Product name="Mug" price="1700"></Product>
//         <Product name="Noodles" price="1900"></Product>
//         <Product name="Pitzza" price="1600"></Product> */}

//         {
//           products.map(product => <Product name={product.name} price={product.price}></Product>)
//         }

// const products = [
//   {name:"Mobile", price:"15000"},
//   {name:"Mug", price:"150"},
//   {name:"Noodles", price:"18000"},
//   {name:"Pitzza", price:"15000"},
//   {name:"Bodna", price:"100"},

// ]