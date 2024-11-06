import './App.css';
import Header from './components/Header';

import FeedbackList from './components/Feedbacklist';
import FeedbackStats from './components/FeedbackStats';
import FeebbackForm from './components/FeebbackForm';
import AboutPage from './components/pages/AboutPage';
import { FeedbackProvider } from './context/FeedbackContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutIconLink from './components/AboutIconLink';

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeebbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>

            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>

        <AboutIconLink />
      </Router>
    </FeedbackProvider>
  );
}

export default App;
