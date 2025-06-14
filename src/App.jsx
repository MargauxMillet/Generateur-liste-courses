import { Routes, Route } from 'react-router-dom'
import { Fragment } from "react";
import Header from './components/Header/index.jsx';

import Home from "./pages/Home/index.jsx"
import RecipeBook from "./pages/RecipeBook/index.jsx"
import Recipe from "./pages/Recipe/index.jsx"
import Error from "./pages/Error/index.jsx"
import NewRecipe from './pages/NewRecipe/index.jsx';

function App() {
  return (
    <Fragment>
      <Header />
      <div className='main'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/livre-de-recettes" element={<RecipeBook/>} />
          <Route path="/recette/:id" element={<Recipe/>} />
          <Route path="/nouvelle-recette" element={<NewRecipe/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </div>
    </Fragment>
  )
}

export default App