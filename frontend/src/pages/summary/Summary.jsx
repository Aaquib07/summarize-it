import React, { useState } from "react";
import axios from "axios";
import "./summary.css";
import Navbar from "../../components/navbar/Navbar";

const Summary = () => {
  const [response, setResponse] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const summaryRoute = process.env.REACT_APP_API_URL

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        summaryRoute,
        {
          text: text,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const summary_text = response.data.summary_text;
      setResponse(summary_text);
    } catch (error) {
      console.error("Error fetching data ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="summary">
      <Navbar />
      <div className="information">
        <h1 className="title">
          Convert your long paragraphs into short summaries
        </h1>
        <div className="text-section">
          <div className="text-para">
            <h2>Sample Text</h2>
            <textarea
              name=""
              className="textbox"
              rows={20}
              cols={70}
              placeholder="Enter your text"
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          </div>
          {!loading && !response && (
            <div className="instruction">
              <h3>Summary will be displayed here.</h3>
            </div>
          )}
          {loading && (
            <div className="loading-screen">
              <h3>Loading...</h3>
            </div>
          )}
          {!loading && response && (
            <div className="response">
              <h2>Extracted Summary</h2>
              <div className="summarybox">
                <p>{response}</p>
              </div>
            </div>
          )}
        </div>
        <div className="button">
            <button onClick={handleClick}>Summarize</button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
