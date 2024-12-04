import "./App.css";
import Card from "./components/Card";

function App() {
  let name = "Pramod";
  console.log(name);

  return (
    <>
      <h1 className="text-3xl text-center">React Components</h1>
      <h2 className="text-2xl text-center underline">Name:{name}</h2>
           {/* calling Card component */}
      <div className="flex gap-5 mt-10">
        <Card name={"Pablo"} age={55} occupation={"Criminal"} />
        <Card name={"Pramod"} age={25} occupation={"SDE-I"} />
        <Card name={"Abc"} age={10} occupation={"Abc"} />
        <Card name={"Abc"} age={10} occupation={"Abc"} />
        <Card name={"Abc"} age={10} occupation={"Abc"} />
        <Card name={"Abc"} age={10} occupation={"Abc"} />
      </div>
    </>
  );
}

export default App;