
import { useState }      from 'react';
import { Routes, Route } from "react-router-dom";

import Home          from './pages/home';
import Quiz          from './pages/quiz';
import Result        from './pages/result';

import Header        from './components/header';
import Sidebar       from './components/sidebar';
import Footer        from './components/footer';
import Login         from './components/login';
import QuizSelector  from './components/quiz_selector';
import ErrorBoundary from './components/error_boundary';

import styles  from './app.module.scss';
import Results from './pages/results';

function App() {

  const [ token, setToken ] = useState( null );
  const [ user, setUser ]   = useState( null );

  return (
    
    <ErrorBoundary>

      {token ? (

        <div className={ styles[ "app-container" ] }>

          <div className={ styles.header }>

            <Header setToken={ setToken } setUser={ setUser } user={ user } />

          </div>

          <div className={ styles.sidebar }>

            <Sidebar token={ token } />

          </div>

          <div className={ styles.content }>

            <QuizSelector token={ token } />

            <Routes>

              <Route path="/" element={ <Home token={ token } /> } />
              
              <Route path="/quiz/:id" element={ <Quiz token={ token } /> } />

              <Route path="/result/:id" element={ <Result token={ token } />} />
              <Route path="/results" element={ <Results token={ token } />} />

            </Routes>

          </div>
          
          <div className={ styles.footer }>

            <Footer />

          </div>

        </div>

      ) : (

        <Login setToken={ setToken } setUser={ setUser } />

      )}

    </ErrorBoundary>

  );

}

export default App;