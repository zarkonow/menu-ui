
import './App.css';
import TreeView from './tree-view/index.jsx';
import menus from './tree-view/data.js';

function App() {
  return (
    <div className="App">

      <TreeView menus={menus}/>
    </div>
  );
}

export default App;
