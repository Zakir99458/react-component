import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name:"Mobile", price:"15000"},
    {name:"Mug", price:"150"},
    {name:"Noodles", price:"18000"},
    {name:"Pitzza", price:"100"},
    {name:"Bodna", price:"100"},

  ]
  return (
    <div className="App">
        {/* <Product name="Mobile" price="15000"></Product>
        <Product name="Mug" price="1700"></Product>
        <Product name="Noodles" price="1900"></Product>
        <Product name="Pitzza" price="1600"></Product> */}

        {
          products.map(product => <Product name={product.name} price={product.price}></Product>)
        }
    </div>
  );
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
