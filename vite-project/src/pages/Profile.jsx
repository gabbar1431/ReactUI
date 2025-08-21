
import profile from "../assets/pfp.png";
import camera from "../assets/cam.webp";
import { useLocation } from "react-router-dom";
import { useRef, useState } from "react";

export const Profile = () => {
  const location = useLocation();
  const data = location.state;

  const [pfpUrl, setPfpUrl] = useState(profile);
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPfpUrl(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-start bg-[#0087fd00] overflow-hidden">
      <div className="relative w-[375px] h-[670px] bg-[#f7f8f9] border border-[#dcdcdc] mt-6">
        <section className="w-full flex flex-col ">
          <div className="flex flex-col gap-4">
            {/* Heading */}
            <div className="text-[1rem] font-semibold text-[#323232] bg-white w-[370px] h-[50px] flex p-3 ">
              Account Settings
            </div>

            {/* Profile Image + Name/Email */}
            <div className="flex items-center gap-4">
              <div className="relative w-[80px] h-[80px] ml-5">
                <img
                  src={pfpUrl}
                  alt="Profile"
                  className="rounded-full w-full h-full object-cover"
                />
                <div
                  onClick={handleUploadClick}
                  className="absolute bottom-0 right-0 cursor-pointer"
                >
                  <img src={camera} alt="Upload" className="w-6 h-6 " />
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </div>
              </div>

              <div>
                <h4 className="text-[1rem] font-semibold">
                  {data?.name || "Marry Doe"}
                </h4>
                <p className="text-[#74777b] text-[0.875rem]">
                  {data?.email || "Marry@gmail.com"}
                </p>
              </div>
            </div>

            {/* Bio / Description */}
            <p className="text-[0.85rem] text-[#323232] leading-6 border-t border-[#dddddd] pt-4 ml-4 font-bold">
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
              Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
              Erat, Sed Diam
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};
