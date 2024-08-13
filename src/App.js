import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import feedbackData from './data/feedbackData';
import FeedbackList from './components/Feedbacklist';
import FeedbackStats from './components/FeedbackStats';
import FeebbackForm from './components/FeebbackForm';

function App() {
  const [feedback, setFeedback] = useState(feedbackData);
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete this')) {
      setFeedback(feedback.filter((item) => item.id !== id));
      console.log(id);
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeebbackForm />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
