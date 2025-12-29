import { Button } from "bootstrap/dist/js/bootstrap.min";
// import React from "react";

import React, { useState } from "react";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      console.log({
        email,
        password,
      });

      alert("Login Successful");
      setLoading(false);
      setEmail("");
      setPassword("");
    }, 1500);
  };

  return (
    <>
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow-lg p-4 w-96" style={{ width: "350px" }}>
        <h3 className="text-center mb-4">Login</h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email / Enrollment ID</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter email or ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading}>
            {loading ? "Logging" : "Login"}
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Home;

// const Home = () => {
//   const [fullname, setFullname] = React.useState("");
//   const [email, setEmail] = React.useState("");
//   const [message, setMessage] = React.useState("");

//   const HandaleClearForm  = () => {
//     setFullname("");
//     setEmail("");
//     setMessage("");
//   };

//   const HandleSubmit = async (e) => {
//     e.preventDefault();

//     setTimeout(true);
//       try {
//         const response =await fetch("https://official-joke-api.appspot.com/jokes/random");
//         setTimeout(() => {

//         const data = {
//       fullname,
//       email,
//       message,
//     };
//     console.log(data);
//   }, 5000);
//       } catch (error) {
//         console.log(error.message);

//     }
//       HandaleClearForm();
//     };
//   return (
//     <>

//       <div className="text-center p-5 ">
//         <h1>Login Page</h1>
//         <div className="container">
//           <form onReset={HandaleClearForm} onSubmit={HandleSubmit}>
//             <div className="p-1">
//               <label htmlFor="Email or Enrollment ID">Email or Enrollment ID </label>
//               <input
//                 type="text"
//                 name="Email or Enrollment ID"
//                 id="Email or Enrollment ID"
//                 value={fullname}
//                 onChange={(e) => setFullname(e.target.value)}

//                 placeholder="Enter your Email and ID"
//                 className="text-primary"
//               />
//             </div>
//             <div className="p-1">
//               <label htmlFor="password">password</label>
//               <input
//                 type="password"
//                 name="password"
//                 id="password"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}

//                 placeholder="Enter Password"
//                 className="text-primary"
//               />
//             </div>
{
  /* <div className="p-1">
              <label htmlFor="message">Message</label>
              <input
                type="Message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter Message"
                className="text-primary"
              />
            </div> */
}
//             <button type="reset" className="btn btn-success">Login</button>
//            {/* <button type="submit" className="btn btn-success">submit</button> */}
//           </form>
//         </div>
//       </div>

//     </>
//   );
// };

// export default Home;

{
  /* <div className="bg-light text-dark text-center p-4">
        <h1>“Welcome to Shopping Kart”</h1>
        <h4 className="gap-5">
          Best products at the best prices.
          <br /> Shop smart,
          <br />
          shop easy.
          <br />
          <h6>
            Discover products made for your lifestyle. Great deals updated every
            day. Simple, safe, and smart shopping experience.
          </h6>
        </h4>
        <button
          onClick={() => (window.location.href = "/Product")}
          className="btn btn-secondary p-2"
        >
          Start Shopping
        </button>
      </div> */
}
