function FeedbackStats({ feedback }) {
  ///=============calculating the average with reduce ============================

  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;
  average.toFixed(1);

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average ratings : {isNaN(average) ? 0 : average} </h4>
    </div>
  );
}

export default FeedbackStats;