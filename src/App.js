
import { useEffect, useState, Fragment } from 'react';
import { Routes, Route, Link } from "react-router-dom";

import Header  from './components/header';
import Sidebar from './components/sidebar';
import Footer  from './components/footer';
import Error   from './components/error';
import Login   from './components/login';

import Home    from './pages/home';

import styles  from './app.module.scss';
import Quiz from './pages/quiz';
import Result from './pages/result';
import QuizSelector from './components/quiz_selector';


function App() {
  const [ token, setToken ] = useState( null );
  const [ error, setError ] = useState( null );
  const [ user, setUser ]   = useState( null );
  console.log('env', process.env);
  // useEffect(() => {
  // }, [token]);
  

  return (
    
    <Fragment>

      {token ? (
        <div className={styles["app-container"]}>
          <div className={styles.header}>
            <Header setToken={setToken} setUser={setUser} user={user} />
          </div>

          <div className={styles.sidebar}>
            <Sidebar />
          </div>
          <div className={styles.content}>
            { error && <Error error={error} />}
            <QuizSelector token={token} />
            <Routes>
              <Route path="/" element={<Home token={token} />} />
              <Route path="/quiz/:id" element={<Quiz token={token} />} />
              <Route path="/result/:id" element={<Result token={token} />} />
            </Routes>
          </div>
          
          <div className={styles.footer}>
            <Footer />
          </div>
        </div>
      ) : (
        <Login
          setToken={setToken}
          setUser={setUser}
          />
      )}
    </Fragment>

  );
}

export default App;
