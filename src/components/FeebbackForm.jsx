import Card from './shared/Card';

function FeebbackForm() {
  return (
    <Card>
      <form>
        <h2>How will you rate your service with our company</h2>
        {/* this the rating check field */}
        <div className="input-group">
          <input type="text" placeholder="type your feedback" />
          <button type="submit">send</button>
        </div>
      </form>
    </Card>
  );
}

export default FeebbackForm;
