// import React from "react";
// import "../css/components/signup.css";
// import { useNavigate } from "react-router";

// export const SignUp = () => {
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
//         <section className="content content-signup">
//           <h2 className="heading">Create your PopX account</h2>

//           <form className="form signup-form" onSubmit={handleSubmit}>
//             <div className="input-group">
//               <input
//                 type="text"
//                 name="name"
//                 id="name"
//                 placeholder="Enter your full name"
//                 required
//               />
//               <label htmlFor="name">Full Name</label>
//             </div>

//             <div className="input-group">
//               <input
//                 type="number"
//                 maxLength={10}
//                 name="phone"
//                 id="phone"
//                 placeholder="Enter your full name"
//                 required
//               />
//               <label htmlFor="phone" className="required">
//                 Phone number
//               </label>
//             </div>

//             <div className="input-group">
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 placeholder="Enter your email address"
//                 required
//               />
//               <label htmlFor="email" className="required">
//                 Email address
//               </label>
//             </div>

//             <div className="input-group">
//               <input
//                 type="password"
//                 name="pwd"
//                 id="pwd"
//                 placeholder="Enter your password"
//                 required
//               />
//               <label htmlFor="pwd" className="required">
//                 Password
//               </label>
//             </div>

//             <div className="input-group">
//               <input
//                 type="text"
//                 name="comp-name"
//                 id="comp-name"
//                 placeholder="Enter your company name"
//                 required
//               />
//               <label htmlFor="comp-name" className="required">
//                 Company Name
//               </label>
//             </div>

//             <div className="input-group signup-radio">
//               <span className="agency-span required">Are you an Agency?</span>

//               <div className="radio-btns">
//                 <div className="radio-btn">
//                   <input
//                     id="radio-yes"
//                     type="radio"
//                     name="agency"
//                     value={"Yes"}
//                     required
//                   />
//                   <span>Yes</span>
//                 </div>

//                 <div className="radio-btn">
//                   <input
//                     id="radio-no"
//                     type="radio"
//                     name="agency"
//                     value={"No"}
//                     required
//                   />
//                   <span>No</span>
//                 </div>
//               </div>
//             </div>

//             <button id="create-acc-btn" type="submit">
//               Create Account
//             </button>
//           </form>
//         </section>
//       </div>
//     </div>
//   );
// };

import React from "react";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    navigate("/profile", { state: data });
  };

  return (
    <div className="w-full h-full flex justify-center">
      <div className="relative w-[375px] h-[667px] bg-[#f7f8f9] mt-6 ">
        <section className="absolute w-full flex flex-col p-4  border border-[#cbcbcb] ">
          <h1 className="text-[1.70rem] w-[200px] font-bold">Create your PopX account</h1>

          <form className="flex flex-col text-[0.9375rem] mt-6" onSubmit={handleSubmit}>
            <div className="relative mb-6 flex flex-col">
              <input type="text" name="name" id="name" placeholder="Enter your full name" required className="px-[0.8rem] py-[0.8rem] border border-[#cbcbcb] bg-transparent rounded-[0.3rem] outline-none focus:border-[#f48ac7]" />
              <label htmlFor="name" className="absolute top-[-0.65rem] left-[0.6rem] text-[#6c25ff] text-[0.8125rem] bg-[#f7f8f9] px-1">Full Name</label>
            </div>

            <div className="relative mb-6 flex flex-col">
              <input type="text" pattern="\d{10}" title="Enter a 10-digit phone number" name="phone" id="phone" placeholder="Enter your phone number" required className="px-[0.8rem] py-[0.8rem] border border-[#cbcbcb] bg-transparent rounded-[0.3rem] outline-none focus:border-[#f48ac7]" />
              <label htmlFor="phone" className="absolute top-[-0.65rem] left-[0.6rem] text-[#6c25ff] text-[0.8125rem] bg-[#f7f8f9] px-1">Phone number</label>
            </div>

            <div className="relative mb-6 flex flex-col">
              <input type="email" name="email" id="email" placeholder="Enter your email address" required className="px-[0.8rem] py-[0.8rem] border border-[#cbcbcb] bg-transparent rounded-[0.3rem] outline-none focus:border-[#f48ac7]" />
              <label htmlFor="email" className="absolute top-[-0.65rem] left-[0.6rem] text-[#6c25ff] text-[0.8125rem] bg-[#f7f8f9] px-1">Email address</label>
            </div>

            <div className="relative mb-6 flex flex-col">
              <input type="password" name="pwd" id="pwd" placeholder="Enter your password" required className="px-[0.8rem] py-[0.8rem] border border-[#cbcbcb] bg-transparent rounded-[0.3rem] outline-none focus:border-[#f48ac7]" />
              <label htmlFor="pwd" className="absolute top-[-0.65rem] left-[0.6rem] text-[#6c25ff] text-[0.8125rem] bg-[#f7f8f9] px-1">Password</label>
            </div>

            <div className="relative mb-6 flex flex-col">
              <input type="text" name="comp-name" id="comp-name" placeholder="Enter your company name" required className="px-[0.8rem] py-[0.8rem] border border-[#cbcbcb] bg-transparent rounded-[0.3rem] outline-none focus:border-[#f48ac7]" />
              <label htmlFor="comp-name" className="absolute top-[-0.65rem] left-[0.6rem] text-[#6c25ff] text-[0.8125rem] bg-[#f7f8f9] px-1">Company Name</label>
            </div>

            <div className="flex flex-col mb-6">
              <span className="text-[#6c25ff] text-[0.9375rem] mb-2">Are you an Agency?</span>
              <div className="flex gap-6">
                <label className="flex items-center gap-2">
                  <input type="radio" name="agency" value="Yes" required className="scale-[1.3] accent-[#642af5]" />
                  <span>Yes</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="agency" value="No" required className="scale-[1.3] accent-[#642af5]" />
                  <span>No</span>
                </label>
              </div>
            </div>

            <button type="submit" className="text-white bg-[#6c25ff] hover:bg-[#642af5] font-medium text-[0.9375rem] px-[0.8rem] py-[0.8rem] rounded-[0.3rem] transition-colors mt-16">
              Create Account
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};
