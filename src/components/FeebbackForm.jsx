import Card from './shared/Card';
import { useState } from 'react';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

function FeebbackForm({ handleAdd }) {
  const [text, setText] = useState('');
  const [btnDisable, setBtnDisabled] = useState('false');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState('10');

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage('at least 10 characters needed');
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 0) {
      const newFeedback = {
        text,
        rating,
      };

      handleAdd(newFeedback);
      setText('');
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How will you rate your service with our company</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="write a review"
            value={text}
          />

          <Button type="submit" isDisabled={btnDisable}>
            send
          </Button>
        </div>
        <div>{message && <div className="message">{message}</div>}</div>
      </form>
    </Card>
  );
}

export default FeebbackForm;
