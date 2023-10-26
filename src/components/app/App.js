import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.scss';
import { useEffect } from "react";


function App() {

  const fetchTabs = () => {
    fetch('http://localhost:3001/tbs')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      })
  }

  useEffect(() => {
    fetchTabs()
  }, [])


  return (
    <Router>
      <div className="App">
        <Routes>

        </Routes>
      </div>
    </Router>

  );
}

export default App;
