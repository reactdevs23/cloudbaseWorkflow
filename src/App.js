import MainComponent from "./components/MaiComponent/MainComponent";
import {
  analytics,
  calender,
  coconut,
  fingerPrint,
  law,
  logout,
  person,
  plane,
} from "./images";
import Background from "./images/Background";

function App() {
  const images = [
    analytics,
    calender,
    coconut,
    fingerPrint,
    law,
    logout,
    person,
    plane,
    analytics,
    calender,
    coconut,
    fingerPrint,
    law,
    logout,
    person,
    plane,
  ];
  return (
    <div
      style={{ "--primaryColor": "#fff", "--shadowColor": "rgba(0,0,0,.1)" }}
    >
      <MainComponent
        images={images}
        centerImage={person}
        background={<Background color="#000" />}
      />
    </div>
  );
}

export default App;
