
import './App.css';
import TreeView from './tree-view/index';
import menus from './tree-view/data';

function App() {
  return (
    <div className="App">

      <TreeView menus={menus}/>
    </div>
  );
}

export default App;
