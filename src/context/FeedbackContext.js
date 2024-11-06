import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'this is from the context provider 1',
      rating: 10,
    },
    {
      id: 2,
      text: 'this is from the context provider 2',
      rating: 10,
    },
    {
      id: 3,
      text: 'this is from the context provider 3',
      rating: 10,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  // this is a function to edit feedback

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  // this is a function to delete a feedback
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete this')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // this is a function to add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
