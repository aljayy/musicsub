import Container from "./components/container";
import Info from "./components/info-container";
import hero from "./images/illustration-hero.svg";

function App() {
  return (
    <Container>
      <div>
        <img src={hero} alt="Woman dancing to music" />
      </div>
      <Info />
    </Container>
  );
}

export default App;
