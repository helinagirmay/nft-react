import Header from "./components/Header";
import Footer from "./components/Footer";
import image from "./assets/1.jpg";
import "./app.css";
import Collection from "./components/Collection";

function App() {
  return (
    <div className="app">
      <Header />
      <Collection
        image={image}
        id={0}
        name={"numberOne"}
        traits={[{ value: 7 }]}
      />
      <Footer />
    </div>
  );
}

export default App;
