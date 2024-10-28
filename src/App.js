import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import feedbackData from './data/feedbackData';
import FeedbackList from './components/Feedbacklist';
import FeedbackStats from './components/FeedbackStats';
import FeebbackForm from './components/FeebbackForm';
import AboutPage from './components/pages/AboutPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutIconLink from './components/AboutIconLink';

function App() {
  const [feedback, setFeedback] = useState(feedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete this')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeebbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
              </>
            }
          ></Route>

          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>

      <AboutIconLink />
    </Router>
  );
}

export default App;
