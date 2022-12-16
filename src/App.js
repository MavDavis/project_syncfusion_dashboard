import "./App.css";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Card from "./components/Card";
import obj from "./components/obj";
function App() {
  let cardSmall = obj.map((item) => {
   return <Card key={item.id} obj={item} />;
  });
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <div className="text">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
      <div className="cards">

      {cardSmall}
      </div>

    </div>
  );
}

export default App;
