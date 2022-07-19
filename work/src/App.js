import Dashboard from './landingpage/landingpage';
import TopHeader from './landingpage/header/topheader';
import './App.css';
import Midle from './landingpage/midlepage/midle';


function App() {
  return (
    <div className="App">
      <Dashboard  />
      <TopHeader />
      <Midle />
    </div>
  )
}

export default App;
