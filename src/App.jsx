import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-light_blue relative">
        {/* header section */}
        <div className="absolute top-0 w-full h-[196px] bg-white flex justify-center items-center">
          <div className="flex flex-col items-center text-primary font-[500px]">
            <h3 className="text-[30px]">Patient Referral Form</h3>
            <h2 className="text-[27px]">Hayes Valley Health San Francisco</h2>
          </div>
        </div>
        <div className="flex flex-col items-center gap-[28px] absolute top-[196px] pt-[34px]">
          <div className="flex flex-col leading-[32px] justify-center items-center text-primary gap-[8px]">
            <p className="text-[24px]">Referral Patients</p>
            <p className="text-[20px]">You can add up to five patients at a time</p>
          </div>
          <div class="flex h-[64px]  w-[782px] rounded-lg">
            <div class="h-full w-[40px] bg-base_1 text-white flex justify-center items-center rounded-s-[4px]  ">
              1
            </div>
            <div class="flex justify-between items-center px-[16px] w-full bg-white rounded-e-[4px]">
              <p>Rosa Diaz</p>
              <section className="flex gap-[16px]">
                <img src="/delete.svg" alt="Mail Icon" />
                <img src="/expand_more.svg" alt="Down arrow Icon" />
              </section>
            </div>
          </div>
        </div>
      </div>
      {/* main seciton */}
    </>
  );
}

export default App;
