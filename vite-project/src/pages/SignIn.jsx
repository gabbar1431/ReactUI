// import { useNavigate } from "react-router";
// import "../css/components/signin.css";

// const SignIn = () => {
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const formData = new FormData(e.target);
//     const data = Object.fromEntries(formData);

//     navigate("/profile", { state: data });
//   };

//   return (
//     <div className="container">
//       <div className="page">
//         <section className="content content-signin">
//           <h2 className="heading">Signin to your PopX account</h2>
//           <p className="description">
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//           </p>

//           <form className="form signin-form" onSubmit={handleSubmit}>
//             <div className="input-group">
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 placeholder="Enter email address"
//                 required
//               />
//               <label htmlFor="email">Email Address</label>
//             </div>

//             <div className="input-group">
//               <input
//                 type="password"
//                 name="pwd"
//                 id="pwd"
//                 placeholder="Enter password"
//                 required
//               />
//               <label htmlFor="pwd">Password</label>
//             </div>

//             <button type="submit" id="submit-btn">
//               Login
//             </button>
//           </form>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default SignIn;

import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    navigate("/profile", { state: data });
  };

  return (
    <div className="w-full h-full flex justify-center">
      <div className="relative w-[375px]  h-[680px] bg-[#f7f8f9]  border border-[#cbcbcb] mt-6 ">
        <section className="absolute w-full flex flex-col p-4 ">
          <h1 className="text-[1.75rem]  w-[200px] font-bold">Signin to your PopX account</h1>
          <p className="mt-[0.8rem] text-[1.12rem] leading-6 text-[#bac1ca] w-[250px] font-bold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>

          <form className="flex flex-col text-[0.9375rem] mt-6" onSubmit={handleSubmit}>
            <div className="relative mb-6 flex flex-col">
              <input type="email" name="email" id="email" placeholder="Enter email address" required className="px-[0.8rem] py-[0.8rem] border border-[#cbcbcb] bg-transparent rounded-[0.3rem] outline-none focus:border-[#f48ac7]" />
              <label htmlFor="email" className="absolute top-[-0.65rem] left-[0.6rem] text-[#6c25ff] text-[0.8125rem] bg-[#f7f8f9] px-1">Email Address</label>
            </div>

            <div className="relative mb-6 flex flex-col">
              <input type="password" name="pwd" id="pwd" placeholder="Enter password" required className="px-[0.8rem] py-[0.8rem] border border-[#cbcbcb] bg-transparent rounded-[0.3rem] outline-none focus:border-[#f48ac7]" />
              <label htmlFor="pwd" className="absolute top-[-0.65rem] left-[0.6rem] text-[#6c25ff] text-[0.8125rem] bg-[#f7f8f9] px-1">Password</label>
            </div>

            {/* <button type="submit" className="text-white bg-[#6c25ff] hover:bg-[#642af5] font-medium text-[0.9375rem] px-[0.8rem] py-[0.8rem] rounded-[0.3rem] transition-colors">
              Login
            </button> */}
            <button
  type="submit"
  className="text-white bg-gray-500 hover:bg-blue-600 active:bg-blue-700 font-medium text-[0.9375rem] px-[0.8rem] py-[0.8rem] rounded-[0.3rem] transition-colors"
>
  Login
</button>

          </form>
        </section>
      </div>
    </div>
  );
};

export default SignIn;
