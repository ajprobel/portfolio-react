import { useState } from 'react';

function Contact() {

  // define states for name, email, message
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const handleClick = (e) => {
    // using standard email regex pattern, will return true or false using email state
    const validateEmail = () => {
      return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    };
    e.preventDefault();

    if (!name) {
      window.alert("Error: Please Enter Your Name");
      return;
    }
    if (!email) {
      window.alert("Error: Please Enter Your Email");
      return;
    }
    if (!message) {
      window.alert("Error: Please Enter A Message");
      return;
    }
    if (!validateEmail()) {
      window.alert("Error: Invalid Email Address");
      return;
    }
    window.alert("Thanks! Message Sent")
    setName('');
    setEmail('');
    setMessage('');
    document.getElementById("emailInput").value = '';
    document.getElementById("nameInput").value = '';
    document.getElementById("messageInput").value = '';
    return;
  }

  const emailChange = () => {
    const emailInput = document.getElementById("emailInput").value.trim();
    setEmail(emailInput);
  }

  const nameChange = () => {
    const nameInput = document.getElementById("nameInput").value.trim();
    setName(nameInput);
  }

  const messageChange = () => {
    const messageInput = document.getElementById("messageInput").value.trim();
    setMessage(messageInput);
  }

  const formStyle = {
    backgroundColor: "rgb(10, 7, 0)",
    boxShadow: "0px 0px 8px 2px rgb(184, 165, 116)"
  };

  const btnStyle = {
    backgroundColor: "rgb(200, 150, 0)",
    color: "black"
  };

  return (
    <>
      <h1 className="mb-5">Contact Me</h1>
      <div className="container m-3 p-3" style={formStyle}>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              aria-describedby="emailHelp"
              onChange={emailChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Name
            </label>
            <input
              type="name"
              className="form-control"
              id="nameInput"
              onChange={nameChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="messageInput"
              rows="3"
              onChange={messageChange}
            ></textarea>
          </div>
          <button type="submit" className="btn" style={btnStyle} onClick={handleClick}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
