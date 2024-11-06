import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
  ///=============calculating the average with reduce ============================
  const { feedback } = useContext(FeedbackContext);

  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;
  average = Math.round(average * 10) / 10;
  console.log();

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average ratings : {average} </h4>
    </div>
  );
}

export default FeedbackStats;
