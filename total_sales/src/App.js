import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

function App() {

  var [name, setName] = useState("Mobile");
  var [price, setPrice] = useState(10000);
  var [totalSales, setTotalSales] = useState(0);
  var [notes, setNotes] = useState("");
  var [messageList, setMessageList] = useState([]);
  const calculate = (e) => {
    e.preventDefault();
    console.log("Price: ", price);
    var oneCrore = 10000000;
    var totalNumberOfSales = oneCrore/price;
    setTotalSales(totalNumberOfSales);

    var message = "Name: " + name
       + "; price: " + price 
       + "; totalSales:" + totalNumberOfSales;
    console.log("message:" , message);
      
    setMessageList([...messageList, message]);

    // console.log("messageList:", messageList);

  };

  return (
    <div className="App">
      <h1>Crore</h1>
      <h2> Total Sales</h2>
      
      <form onSubmit={calculate}>
        <label htmlFor="name">Name:</label><br/>
        <input type="text" 
          id="name" 
          name="name" 
          value={name}
          onChange={e => setName(e.target.value)} /><br/>

        <label htmlFor="price">Price</label><br/>
        <input type="text" 
          id="price" 
          name="price" 
          value={price}
          onChange={e=> setPrice(e.target.value)}
          /><br/>
        
        <label htmlFor="notes">Notes</label><br/>
        <textarea id="notes" name="notes"
          value={notes}
          onChange = {e => setNotes(e.target.value)}
          /><br/>
        <p>Total Number of items to Sell : {totalSales}</p>


        <input type="submit" value="Calculate" />

        <hr/>
        <h3>Message List</h3>
        <div id="messageList">
          {
            messageList.map( (message,index) => {
              return (
                <div className="message" key={index}>
                    <p>{message}</p>
                </div>
              )
            })
          }
        </div>
    </form> 
    </div>
  );
}

export default App;
