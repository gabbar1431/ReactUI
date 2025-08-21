
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen flex justify-center items-end">
      <div className="w-[380px] h-[667px] bg-[#f7f8f9] border-[#cbcbcb] border-[1px] flex flex-col justify-end m-10">
        <section className="w-full p-4">
          <div className="flex flex-col">
            <h2 className="text-[1.75rem] font-semibold text-[#1e1e1e]">Welcome to PopX</h2>
            <p className="w-[300px] mt-[0.8rem] text-[1.12rem] leading-6 text-[#74777b]">
            {/* <p className="mt-[0.8rem] text-[1.12rem] leading-6 text-[#74777b] font-sans line-clamp-2"> */}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <div className="flex flex-col gap-4 mt-6">
            <button
              onClick={() => navigate("/create-account")}
              className="text-white bg-[#6c25ff] hover:bg-[#642af5] font-medium text-[0.9375rem] px-[0.8rem] py-[0.8rem] rounded-[0.3rem] transition-colors"
            >
              Create Account
            </button>
            <button
              onClick={() => navigate("/login")}
              className="text-[#1e1e1e] bg-[#e0ccff] hover:bg-[#d5b8ff] font-medium text-[0.9375rem] px-[0.8rem] py-[0.8rem] rounded-[0.3rem] transition-colors"
            >
              Already Registered? Login
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
