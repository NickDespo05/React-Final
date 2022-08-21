import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import React, { useState, useRef } from "react";
import Main from "./components/Main";
import { DisplayContext } from "./context/DisplayContext";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
    const [displayNombre, setDisplayNombre] = useState(null);

    const displayName = useRef("");
    const handleDisplay = () => {
        if (displayNombre === "skills") {
            setDisplayed(<Skills />);
        } else if (displayNombre === "projects") {
            setDisplayed(<Projects />);
        } else if (displayNombre === "about") {
            setDisplayed(<About />);
        } else {
            setDisplayed(<Main />);
        }
    };

    const [displayed, setDisplayed] = useState(<Main />);

    const handleName = (e, term) => {
        e.preventDefault();
        setDisplayNombre(term);
        handleDisplay();
    };

    return (
        <div className="App">
            <DisplayContext.Provider
                value={{
                    term: displayName,
                    handleChange: handleName,
                }}
            >
                <NavigationBar />
                {displayed}
            </DisplayContext.Provider>
        </div>
    );
}

export default App;
