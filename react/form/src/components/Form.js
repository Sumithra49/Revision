import { useRef } from "react";

const Form = ({ name, setName, feedback, setFeedback, onAddFeedback }) => {
  const ratingRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const rating = parseInt(ratingRef.current.value);

    if (!name.trim() || !feedback.trim()) {
      alert("Name and feedback cannot be empty");
      return;
    }

    onAddFeedback({
      id: Date.now(),
      name,
      feedback,
      rating: isNaN(rating) ? 0 : rating,
      timestamp: new Date(),
    });

    setName("");
    setFeedback("");
    ratingRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit} className="form-box">
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Feedback:</label>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
      </div>
      <div>
        <label>Rating (1–5):</label>
        <input type="number" min="1" max="5" ref={ratingRef} />
      </div>
      <button className="submit" type="submit">
        Submit Feedback
      </button>
    </form>
  );
};

export default Form;
