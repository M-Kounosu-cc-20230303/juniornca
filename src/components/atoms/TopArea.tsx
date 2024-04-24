import React from 'react';

const TopAre = () => {
  return (
    <section className="flex-col justify-center items-center mx-auto main-content">
      <div
        className="pt-[40px]"
      >
        <div className="w-full md:w-[930px] md:h-[586px] relative mx-auto flex text-center ">
          <div className="">
            <div className="">
              <div
                className="pb-2"
                style={{ width: 750, opacity: 1, transform: 'translate3d(70px, 0px, 0px)' }}
              >
                <img
                  src="/images/Swiper.jpg"
                  alt="トップ画像"
                  className="shadow-default border border-zinc-300 rounded-xl"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="mx-[19px] md:max-w-screen-md md:mx-auto">
        <div
          className="w-full justify-center items-center gap-[4.50px] inline-flex pt-[35px] md:pt-[40px]"
        >
          <div className="w-[14.12px] h-[33px] relative">
            <img
              className="w-full"
              src="/images/leaf_decoration_left.png"
              alt="リーフ左"
            />
          </div>
          <div>
            <span
              className="text-yellow-600 text-[min(5.5vw,50px)] md:text-[27px] font-bold leading-9 text-gradation"
            >
              世界レベル
            </span>
            <span
              className="text-black text-[min(4.5vw,25px)] md:text-lg font-bold leading-normal"
            >
              のトレーニングを体験！
            </span>
          </div>
          <div className="w-[14.13px] h-[33.01px] relative">
            <img
              className="w-full"
              src="/images/leaf_decoration_right.png"
              alt="リーフ右"
            />
          </div>
        </div>
        <div className="w-full md:w-[623px] max-w-[640px] mx-auto">
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default TopAre;
