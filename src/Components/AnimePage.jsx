import { useEffect, useState } from "react";
// import "./styles.css";
import Title from "./Title";
import Info from "./Info";
import Entry from "./Board";
export default function PokemonPage() {
  const [name, setName] = useState("Pikachu");
  const [data, setData] = useState({});

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    fetch(url).then((response) => response.json().then(setData));
  }, [name]);

  return (
    <div className="App">
      <Title text="Pokemon Finder" />
      {/* <Entry action={(s) => console.log(s)} /> */}
      <Entry action={setName} />
      <Info name={name} data={data} />
    </div>
  );
}
