import { BrowserRouter as Router, Route, Routes, Redirect, Navigate } from "react-router-dom";
import { useEffect, useState, lazy, Suspense } from "react";

import DummyTable from "../tabs/dummyTable.js";
import Header from "../header/Hearder.js";

import './App.scss';
function App() {
  const [tabs, setTabs] = useState()
  const [loadingStatus, setLoadingStatus] = useState('loading')
  const [elements, setElements] = useState()
  const [mainUrl, setMainUrl] = useState()


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
    setElements(data.map((tab, i) => {
      const { id, order, path } = tab
      const MyComponent = lazy(() => import(`../${path}`), [])
      if (order === 0) {
        setMainUrl(id)
        return (
          <Route path={`/${id}`} element={<MyComponent />} />
        )
      } else {
        return (
          <Route path={`/${id}`} element={<MyComponent />} />
        )
      }
    }))
  }

  return (
    <Router>
      <div className="App">
        <Header tabs={loadingStatus === "idle" ? tabs : null} />
        <Suspense fallback={<div>loading</div>}>
          <Routes>
            <Route path='/' element={<Navigate to={mainUrl !== undefined ? mainUrl : null} />} />
            {elements === undefined ? 'loading' : elements}
          </Routes>
        </Suspense>

      </div>
    </Router>

  );
}

export default App;
