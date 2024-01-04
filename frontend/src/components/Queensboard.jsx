import React from "react";
import { IoMdHeart } from "react-icons/io";
import { IoStatsChart } from "react-icons/io5";
import { GiChessQueen } from "react-icons/gi";
const Queensboard = () => {
  const array = Array.from({ length: 10 });
  




  return (
    <div className="w-full pt-[70px] bg-[rgb(0,0,0)] relative">
      <nav className="w-full py-2 bg-black text-pink-600 z-30 flex justify-center items-center absolute top-0 border-b-[1px] border-rose-500 shadow-sm shadow-[rgba(255,90,151,0.45)]">
        <GiChessQueen className="text-[30pt]" />
      </nav>
      <div>
        <div className="h-[] sm:h-[300px] lg:h-[400px] xl:h-[400px] flex flex-col   sm:grid sm:grid-cols-3 gap-2 px-2 justify-center items-center">
          <div className=" sm:col-span-1 h-[300px]  w-full sm:h-full relative flex justify-center items-center  rounded-[30px]  queen ">
            <div className="h-[300px] sm:h-[300px] lg:h-[400px] xl:h-[400px]  z-10 overflow-hidden ">
              <img
                className="object-cover h-full z-10"
                src="https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/8/2022_8$largeimg_1184246021.jpg"
                alt=""
              />
            </div>

            <div>
              <i class="bx bxl-instagram-alt"></i>
            </div>
            <div className="absolute z-10 top-2 right-2  w-[35px]  flex flex-col justify-center items-center py-2 gap-2 bg-[rgb(248,248,248,.5)] rounded-t-full rounded-b-full ">
              <div className="flex flex-col  justify-center items-center">
                <IoMdHeart className="text-[20pt] text-rose-600 drop-shadow-md " />
                <p className="text-[8pt]">4k</p>
              </div>
              <div className="flex flex-col  justify-center items-center drop-shadow-md">
                <IoStatsChart />
                <p className="text-[8pt]">11k</p>
              </div>
            </div>
            <div className="text-rose-600 z-10 text-[20pt] bottom-3 left-2 absolute h-[60px] w-[60px] bg-gradient-to-br from-pink-300 via-purple-50 to-pink-200 rounded-full flex justify-center items-center shadow-[rgba(255,182,221,0.66)] shadow-lg">
              <p>#1</p>
            </div>
          </div>
          <div className=" sm:col-span-1 h-[300px] w-full sm:h-[80%] relative overflow-hidden flex justify-center items-center  rounded-[30px] bg-pink-950 shadow-xl">
            <div className="h-full">
              <img
                className="object-cover h-full "
                src="https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/8/2022_8$largeimg_1184246021.jpg"
                alt=""
              />
            </div>
            <div className="absolute top-2 right-2  w-[35px]  flex flex-col justify-center items-center py-2 gap-2 bg-[rgb(248,248,248,.5)] rounded-t-full rounded-b-full ">
              <div className="flex flex-col  justify-center items-center">
                <IoMdHeart className="text-[20pt] text-rose-600 drop-shadow-md " />
                <p className="text-[8pt]">4k</p>
              </div>
              <div className="flex flex-col  justify-center items-center drop-shadow-md">
                <IoStatsChart />
                <p className="text-[8pt]">11k</p>
              </div>
            </div>
            <div className="text-rose-600 text-[20pt] bottom-3 left-2 absolute h-[60px] w-[60px] bg-gradient-to-br from-pink-300 via-purple-50 to-pink-200 rounded-full flex justify-center items-center shadow-[rgba(255,182,221,0.66)] shadow-lg">
              <p>#2</p>
            </div>
          </div>
          <div className=" sm:col-span-1 h-[300px] w-full sm:h-[60%] relative overflow-hidden flex justify-center items-center  rounded-[30px] bg-pink-950 shadow-xl ">
            <div className="h-full">
              <img
                className="object-cover h-full"
                src="https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/8/2022_8$largeimg_1184246021.jpg"
                alt=""
              />
            </div>
            <div className="absolute top-2 right-2  w-[35px]  flex flex-col justify-center items-center py-2 gap-2 bg-[rgb(248,248,248,.5)] rounded-t-full rounded-b-full ">
              <div className="flex flex-col  justify-center items-center">
                <IoMdHeart className="text-[20pt] text-rose-600 drop-shadow-md " />
                <p className="text-[8pt]">4k</p>
              </div>
              <div className="flex flex-col  justify-center items-center drop-shadow-md">
                <IoStatsChart />
                <p className="text-[8pt]">11k</p>
              </div>
            </div>
            <div className="text-rose-600 text-[20pt] bottom-3 left-2 absolute h-[60px] w-[60px] bg-gradient-to-br from-pink-300 via-purple-50 to-pink-200 rounded-full flex justify-center items-center shadow-[rgba(255,182,221,0.66)] shadow-lg">
              <p>#3</p>
            </div>
          </div>
        </div>
        {/* this part displays the other images  */}
        <div className="w-full grid sm:grid-cols-2 xl:grid-cols-4 px-2 py-2 gap-2 sm:pt-[40px]">
          {array.map((data) => (
            <>
              <div className="w-full h-[250px] bg-pink-950 rounded-[30px] relative ">
                <p className="bg-gradient-to-br from-pink-300 via-purple-50 to-pink-200 h-[40px] w-[40px] rounded-full flex justify-center items-center absolute bottom-2 left-2 shadow-lg shadow-[rgba(255,189,200,0.61)]">
                  #4
                </p>
                <div>
                  <i class="bx bxl-instagram-alt text-[rgba(255,255,255,0.47)] hover:text-[rgb(255,255,255)] absolute right-2 bottom-2 text-[25pt] hover:cursor-pointer "></i>
                </div>
                <div className="absolute top-2 right-2  w-[35px]  flex flex-col justify-center items-center py-2 gap-2 bg-[rgb(248,248,248,.5)] rounded-t-full rounded-b-full ">
                  <div className="flex flex-col  justify-center items-center">
                    <IoMdHeart className="text-[20pt] text-rose-600 drop-shadow-md " />
                    <p className="text-[8pt]">4k</p>
                  </div>
                  <div className="flex flex-col  justify-center items-center drop-shadow-md">
                    <IoStatsChart />
                    <p className="text-[8pt]">11k</p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Queensboard;
