
import './App.css';
import AccountHeader from './components/common/AccountHeader';
import EduHeader from './components/common/EduHeader';
import AccountFindHeader from  './components/common/AccountFindHeader';
import Footer from './components/common/Footer';


function App() {
  return (
    <div className="App">
      {/* <AccountFindHeader /> */}
      {/* <EduHeader /> */}
      <AccountHeader />
    </div>
  );
}

export default App;