import './App.scss';
import Modal from './components/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div id="app-container">
      <div id="image-container">
      <div id="sidebar"></div>
        <div id="page-content">
          <Modal />
          <div id="social-icons-container">
            <img className="social-icon" id="fb-icon" src="Facebook.svg" onClick={()=>{console.log('fb click')} }/ >
            <img className="social-icon" src="Instagram.svg" onClick={()=>{console.log('instagram click')} }/ >
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
