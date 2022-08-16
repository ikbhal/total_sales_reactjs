import logo from './logo.svg';
import './App.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';

function TabExample() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        Home
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Profile
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        Contact
      </Tab>
    </Tabs>
  );
}

function App() {
  return (
    <div className="App">
      <TabExample/>
    </div>
  );
}

export default App;
