import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <body>
      <div className="App">
        <div className="container">
          <Weather />
          <footer>
            Open-source code built by{" "}
            <a href="https://github.com/BeeMao03" target="_blank">
              Mariel Buzarquis
            </a>
            , available on{" "}
            <a
              href="https://github.com/BeeMao03/react-weather-app-mao"
              target="_blank">
              GitHub
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://weather-app-react-mao.netlify.app/"
              target="_blank">
              Netlify
            </a>
          </footer>
        </div>
      </div>
    </body>
  );
}
