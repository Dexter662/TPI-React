import { Route, Routes } from 'react-router';

import Header from './components/Header';
import ArticleList from './components/ArticleList';
import ArticleItem from './components/ArticleItem';

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <Routes>
          <Route path='/' element={<ArticleList />} />
          <Route path='/article/:id' element={<ArticleItem />} />
        </Routes>
      </>
    </div>
  );
}

export default App;