import { Button } from "bootstrap/dist/js/bootstrap.min";
import React from "react";

const Home = () => {
  const [fullname, setFullname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");



  const HandaleClearForm  = () => {
    setFullname("");
    setEmail("");
    setMessage("");
  };

  

  const HandleSubmit = async (e) => {
    e.preventDefault();
   
    setTimeout(true);
      try {
        const response =await fetch("https://official-joke-api.appspot.com/jokes/random");
        setTimeout(() => {

        const data = {
      fullname,
      email,
      message,
    };
    console.log(data);
  }, 5000);
      } catch (error) {
        console.log(error.message);
        
    }
      HandaleClearForm();
    };
  return (
    <>
      

      <div className="text-center p-5">
        <h1>contact us</h1>
        <div className="container">
          <form onReset={HandaleClearForm} onSubmit={HandleSubmit}>
            <div className="p-1">
              <label htmlFor="fullname">Full name </label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                placeholder="Enter your name"
                className="text-primary"
              />
            </div>
            <div className="p-1">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                className="text-primary"
              />
            </div>
            <div className="p-1">
              <label htmlFor="message">Message</label>
              <input
                type="Message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter Message"
                className="text-primary"
              />
            </div>
            <button type="reset" className="btn btn-danger">clear form</button>
            <button type="submit" className="btn btn-success">submit</button>
          </form>
        </div>
      </div>
    </>
  );
};
 
export default Home;