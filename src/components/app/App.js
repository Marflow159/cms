import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState, lazy, Suspense } from "react";

import DummyTable from "../tabs/dummyTable.js";
import Header from "../header/Hearder.js";

import './App.scss';
function App() {

  const [tabs, setTabs] = useState()
  const [loadingStatus, setLoadingStatus] = useState('loading')
  const [elements, setElements] = useState()


  const fetchTabs = () => {
    fetch('http://localhost:3001/tabs')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTabs(data);
        setLoadingStatus('idle')
        createRoute(data)
      })
      .catch((e) => {
        console.log(e);
      })

  }

  useEffect(() => {
    fetchTabs()

  }, [])

  const createRoute = (data) => {
    console.log(data);
    setElements(data.map((tab, i) => {
      const { id, path } = tab
      const MyComponent = lazy(() => import(`../${path}`), [])
      return (
        <Route path={`/${id}`} element={<MyComponent />} />
      )
    }))
    console.log(elements);
  }


  return (
    <Router>
      <div className="App">
        <Header tabs={loadingStatus === "idle" ? tabs : null} />
        <Suspense fallback={<div>loading</div>}>
          <Routes>
            {elements === undefined ? 'loading' : elements}
          </Routes>
        </Suspense>

      </div>
    </Router>

  );
}

export default App;
