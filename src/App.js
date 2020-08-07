import React from "react";
import logo from "./logo.svg";
import "./App.css";

// Reactstrap
import { CardColumns } from "reactstrap";

// Components
import FunctionGreet from "./components/FunctionGreet";
import ClassGreet from "./components/ClassGreet";
import Post from "./components/Post";
import Clock from "./components/Clock";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <FunctionGreet firstName="Melissa" lastName="Castillo" />
        <ClassGreet firstName="Vicente" lastName="Muñoz" />
        <ClassGreet firstName="David" lastName="Moranchel" />
      </header> */}
      <Clock />

      {/* 
        Crear un componente funcional que renderice una Card 
        haciendo referencia al post de un blog
        
        Busquen referencias de blogs y la estructura de sus posts
      
        Tips:
        - Primero abstraigan el objeto Post (esto es tu componente y sus props)
        - Utilicen reactstrap para que se vea cute!
      */}

      {/* <CardColumns>
        <Post
          title="Amazing card"
          subtitle="This is the card!"
          content="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          image="https://picsum.photos/id/1/100/100"
          tags={"life,olv"}
        />
        <Post
          title="Amazing card"
          subtitle="This is the card!"
          content="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          image="https://picsum.photos/id/2/100/100"
          tags={"life,food"}
        />
        <Post
          title="Amazing card"
          subtitle="This is the card!"
          content="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          image="https://picsum.photos/id/3/100/100"
          tags={"life,food"}
        />
      </CardColumns> */}
    </div>
  );
}

export default App;
