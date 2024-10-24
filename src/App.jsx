import ListArticles from './components/ListArticles'; 
import AddArticle from './components/AddArticle'; 
import EditArticle from './components/EditArticle'; 
import Menu from './Menu'; 
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'; 
 
function App() { 
  return( 
    <> 
    {/*<ListArticles />*/} 
     <Router> 
      <Menu/> 
      <Routes> 
        <Route path='/articles' element={<ListArticles/>}/> 
        <Route path='/AddArticle' element={<AddArticle/>}/> 
        <Route path='/editArticle/:id' element={<EditArticle/>}/> 
        <Route path='/' element={<ListArticles/>}/> 
         
 
      </Routes> 
      </Router> 
    </> 
  ); 
 
} 
export default App; 