import "./App.css";
import ComponentB from "./components.js/ComponentB";
import ContextProvider from "./context.js/CounterContext";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <ComponentB />
      </ContextProvider>
    </div>
  );
}

export default App;
