import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import AddBlog from './pages/AddArticle/AddArticle';
import BlogDetails from './pages/ArticleDetails/ArticleDetails';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> 
        <div className='content' > 
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/ajouter-article" element={<AddBlog />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />

            
            <Route path="*" element={<NotFound />} />
          </Routes> 
        </div>
      </div>
    </Router>
  );
}

export default App;
