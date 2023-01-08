import { useRef } from "react";
function HomePage() {
  const emailRef = useRef(null);
  const feedbackRef = useRef(null);

  function submitHandler(event) {
    event.preventDefault();
    const value = event.target.value;

    const emaildValue = emailRef.current.value;
    const feedbackValue = feedbackRef.current.value;

    const reqBody = {
      email: emaildValue,
      feedback: feedbackValue,
    };

    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((repsonse) => repsonse.json())
      .then((data) => console.log(data));
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form>
        <div>
          <label htmlFor="email">Write your email</label>
          <input type="email" id="email" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea
            rows="5"
            id="feedback"
            type="textarea"
            ref={feedbackRef}
          ></textarea>
        </div>
        <button onClick={submitHandler}>Send feedback</button>
      </form>
    </div>
  );
}

export default HomePage;
