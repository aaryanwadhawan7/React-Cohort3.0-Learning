import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const Services = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <div>
        <button
          className="notes-btn"
          onClick={() => navigate("/services/notes")}
        >
          Notes
        </button>

        <button className="todo-btn" onClick={() => navigate("/services/todo")}>
          Todo
        </button>
      </div>

      <div className="services">
        <h1>Services Page</h1>
      </div>
    </>
  );
};

export default Services;
