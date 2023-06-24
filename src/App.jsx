import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

function App() {
  const consoleLog = () => {
    console.log("clicked");
  };
  return (
    <>
      <Header />
      <button onClick={consoleLog}>Click Me</button>
      <Footer />
    </>
  );
}

export default App;
