import { Routes, Route } from 'react-router-dom'
import { Fragment } from "react";
import Header from './components/Header/index.jsx';

import Home from "./pages/Home/index.jsx"
import RecipeBook from "./pages/RecipeBook/index.jsx"
import Recipe from "./pages/Recipe/index.jsx"
import Error from "./pages/Error/index.jsx"

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/livre-de-recettes" element={<RecipeBook/>} />
        <Route path="/recette/:id" element={<Recipe/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </Fragment>
  )
}

export default App
