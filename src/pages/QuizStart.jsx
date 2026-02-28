import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/apiClient";
import "../styles/quiz.css";

export default function QuizStart() {
  const navigate = useNavigate();
  const { subjectId, quizId } = useParams();

  const [quizData, setQuizData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchQuiz() {
      try {
        setLoading(true);
        setError(null);

        const res = await api.get(`/quizzes/${quizId}/`);
        setQuizData(res.data);

      } catch (err) {
        console.error("Failed to load quiz:", err);

        if (err.response?.data?.detail) {
          setError(err.response.data.detail);
        } else {
          setError("Unable to load quiz.");
        }
      } finally {
        setLoading(false);
      }
    }

    if (quizId) {
      fetchQuiz();
    }
  }, [quizId]);

  const handleStart = async () => {
    try {
      await api.post(`/quizzes/${quizId}/start/`);

      navigate(`/subjects/quiz/${subjectId}/take/${quizId}`);

    } catch (err) {
      console.error("Failed to start quiz:", err);

      if (err.response?.data?.detail) {
        setError(err.response.data.detail);
      } else {
        setError("Unable to start quiz.");
      }
    }
  };

  if (loading) return <div className="quizDetailPage">Loading quiz...</div>;
  if (error) return <div className="quizDetailPage">{error}</div>;
  if (!quizData) return null;

  return (
    <div className="quizDetailPage">
      <div className="quizDetailBox">

        <button
          className="quizDetailBack"
          onClick={() => navigate(-1)}
        >
          &lt; Back
        </button>

        <h2 className="quizDetailTitle">
          {quizData.subject_name}
        </h2>

        <div className="quizStartCard">
          <h3>{quizData.title}</h3>

          <p>Teacher: {quizData.teacher_name}</p>
          <p>Due Date: {new Date(quizData.due_date).toLocaleString()}</p>
          <p>Questions: {quizData.questions.length}</p>
          <p>
            Duration:{" "}
            {quizData.time_limit_minutes
              ? `${quizData.time_limit_minutes} minutes`
              : "No time limit"}
          </p>

          <button
            className="quizDetailSubmit"
            onClick={handleStart}
          >
            Start Quiz
          </button>
        </div>

      </div>
    </div>
  );
}