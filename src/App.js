import React from "react";
import logo from "./logo.svg";
import "./App.css";

// Reactstrap
import { CardColumns } from "reactstrap";

// Components
import FunctionGreet from "./components/FunctionGreet";
import ClassGreet from "./components/ClassGreet";
import Post from "./components/Post";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <FunctionGreet firstName="Melissa" lastName="Castillo" />
        <ClassGreet firstName="Vicente" lastName="Muñoz" />
        <ClassGreet firstName="David" lastName="Moranchel" />
      </header>

      {/* 
        Crear un componente funcional que renderice una Card 
        haciendo referencia al post de un blog
        
        Busquen referencias de blogs y la estructura de sus posts
      
        Tips:
        - Primero abstraigan el objeto Post (esto es tu componente y sus props)
        - Utilicen reactstrap para que se vea cute!
      */}

      <CardColumns>
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
      </CardColumns>
    </div>
  );
}

export default App;
