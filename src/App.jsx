import ListArticles from './components/ListArticles';
import AddArticle from './components/AddArticle';
import EditArticle from './components/EditArticle';
import Menu from './Menu';
import ListCards from './components/clientSide/ListCards';
import { CartProvider } from "use-shopping-cart";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from "./components/clientSide/Cart"
function App() {
  return (
    <>
      {/*<ListArticles />*/}
      <CartProvider>
        <Router>
          <Menu />
          <Routes>
            <Route path='/articles' element={<ListArticles />} />
            <Route path='/AddArticle' element={<AddArticle />} />
            <Route path='/editArticle/:id' element={<EditArticle />} />
            <Route path='/' element={<ListCards />} />
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </Router >
      </CartProvider>
    </>
  );

}
export default App; 