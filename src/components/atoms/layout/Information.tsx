import React from "react";

const Information = () => {
  return (
    <>
      <div className="w-full h-[40px] md:h-[61px] relative"></div>
      <section className="main-content">
        <div className="flex ">
          <div className="">
            <h2 className="text-black font-semibold text-3xl">SCHEDULE</h2>
          </div>
          <div className="self-stretch flex-col justify-end items-center gap-2 inline-flex pb-[10px]">
            <div className="w-[22px] h-3 pb-[5px] relative">
              <img src="/images/arrow.jpg" alt="" className="" />
            </div>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-sm text-black">スケジュールがありません。</p>
        </div>
      </section>
      <div className="w-full h-[40px] md:h-[61px] relative"></div>
      <section className="main-content">
        <div className="flex w-[66%] mx-auto">
          <div className="md:w-[768px] flex-col justify-start items-start gap-2 flex mx-auto ">
            <div className="justify-start items-end gap-2 inline-flex w-full">
              <h2 className="text-black font-semibold text-3xl ">NEWS</h2>
            </div>
          </div>
          <div className=" md:w-[768px] border-primary flex-col justify-start items-start mx-auto py-4 hover:opacity-70 hover:bg-red-50">
            <div className="w-[22px] h-3 pb-[5px] relative">
              <img src="/images/arrow.jpg" alt="" className="" />
            </div>
          </div>
        </div>
        <div className=" md:w-[768px] border-t border-b border-red-500 border-primary flex-col justify-start items-start mx-auto py-4 hover:opacity-70 hover:bg-red-50">
          <p className="text-black text-sm leading-[21px] pb-2">
            2024/2/1 (木)
          </p>
          <p className="text-black self-stretch md:leading-[27px] txt-limit-two-line md:txt-limit mb-2">
            新刊「スポーツクライミングのコンディショニング」発売！
          </p>
          <p className="self-stretch md:leading-[27px] txt-limit-two-line md:txt-limit"></p>
        </div>
      </section>
      <div className="w-full h-[40px] md:h-[61px] relative"></div>
    </>
  );
};

export default Information;
