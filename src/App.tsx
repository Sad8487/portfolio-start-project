import "./styles/globalStyle.css";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/main/Main";
import { Footer } from "./layout/footer/Footer";

function App() {
  return (
    <div className="App">
        <Header />
        <Main />
        <Footer />
    </div>
  );
}

export default App;
