const FeedbackList = ({ feedbackList, onClear }) => {
  if (feedbackList.length === 0) {
    return <p className="text-gray-500 mt-6">No Feedback Yet</p>;
  }

  if (feedbackList.length > 10) {
    return (
      <p className="text-yellow-600 mt-6">
        Too many results, please refine your search.
      </p>
    );
  }

  return (
    <div className="mt-6">
      <button
        className="mb-4 bg-red-600 text-white px-4 py-2 rounded"
        onClick={onClear}
      >
        Clear All Feedback
      </button>

      <div className="space-y-4">
        {feedbackList.map((entry) => (
          <div
            key={entry.id}
            className={`feedback-card ${entry.rating === 5 ? "highlight" : ""}`}
          >
            <p>
              <strong>Name:</strong> {entry.name}
            </p>
            <p>
              <strong>Feedback:</strong> {entry.feedback}
            </p>
            <p>
              <strong>Rating:</strong> {entry.rating}
            </p>
            <p className="feedback-meta">{entry.timestamp.toLocaleString()}</p>
          </div>
        ))}

        <button className="clear" onClick={onClear}>
          Clear All Feedback
        </button>
      </div>
    </div>
  );
};

export default FeedbackList;
