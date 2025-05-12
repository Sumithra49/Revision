import { useEffect, useMemo, useState } from "react";
import "./App.css";
import FeedbackList from "./components/FeedbackList";
import Form from "./components/Form";
import Search from "./components/Search";

const App = () => {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [feedbackList, setFeedbackList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("recent");

  const handleAddFeedback = (newFeedback) => {
    setFeedbackList((prev) => [...prev, newFeedback]);
  };

  const handleClearFeedback = () => {
    setFeedbackList([]);
  };

  useEffect(() => {
    if (feedbackList.length > 0) {
      console.log("New feedback added");
    }

    return () => {
      console.log("FeedbackFormManager unmounted");
    };
  }, [feedbackList]);

  const filteredFeedback = useMemo(() => {
    const filtered = feedbackList.filter((entry) =>
      entry.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortOption === "rating") {
      return [...filtered].sort((a, b) => b.rating - a.rating);
    }

    return [...filtered].sort((a, b) => b.timestamp - a.timestamp);
  }, [feedbackList, searchTerm, sortOption]);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Feedback Form Manager</h1>

      <Form
        name={name}
        setName={setName}
        feedback={feedback}
        setFeedback={setFeedback}
        onAddFeedback={handleAddFeedback}
      />

      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />

      <FeedbackList
        feedbackList={filteredFeedback}
        onClear={handleClearFeedback}
      />
    </div>
  );
};

export default App;
