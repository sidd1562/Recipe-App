import { useState } from "react";
import Search from "./components/Search/Search";
import RecipeList from "./components/List/RecipeList";
import Nav from "./components/Navigation/Nav";
import "./css/App.css";
import Container from "./components/View/Container";
import InnerContainer from "./components/View/InnerContainer";
import RecipeDetails from "./components/Recipe/RecipeDetails";
function App() {
  const [recipeData, setRecipeData] = useState([]);
  const [recipeId, setRecipeId] = useState("680975");
  return (
    <div>
      <Nav />
      <Search recipeData={recipeData} setRecipeData={setRecipeData} />
      <Container>
        <InnerContainer>
          <RecipeList setRecipeId={setRecipeId} recipeData={recipeData} />
        </InnerContainer>
        <InnerContainer>
          <RecipeDetails recipeId={recipeId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
