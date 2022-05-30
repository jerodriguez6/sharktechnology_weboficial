import React, { Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "aos/dist/aos.css";
import AppRouter from './router'
//scss files
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "assets/css/App.css"


function App() {
  return (
    <React.Fragment>
      <Suspense fallback={null}>
        <AppRouter />
      </Suspense>
    </React.Fragment>
  );
}

export default App;
