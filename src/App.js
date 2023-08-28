import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Api from "./Api";

function App() {
  const data = Api.map((item) => {
    return <Main key={item.id} item={item} />;
  });

  return (
    <div className="App">
      <Header />
      {data}
    </div>
  );
}

export default App;
