import React from "react";

const FooterLogo = () => {
  return (
    <div className="flex flex-col gap-4 my-4 text-center inset-x-0 bottom-0 main-content h-full">
      <img className="w-[95px] h-[48px] mx-auto" src="/images/logo.jpg" alt="logo" />
      <p className="text-[.875rem] text-zinc-500">©ncajuniorathleteclub</p>
    </div>
  );
};

export default FooterLogo;
