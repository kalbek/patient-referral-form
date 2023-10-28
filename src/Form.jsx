import React from "react";
import { useState } from "react";

const Form = ({ newReferral, setNewReferral }) => {
  const handleNewReferral = () => {
    setNewReferral((referral) => !referral);
  };
  return (
    <>
      <div className="flex flex-col">
        {/* visible part */}
        <div className="flex h-[64px] w-[782px]">
          <div
            className={`h-full w-[40px] bg-base_1 text-white flex justify-center items-center rounded-tl-[4px] ${
              !newReferral && "rounded-bl-[4px]"
            }   `}
          >
            1
          </div>

          <div className="flex  justify-between items-center px-[16px] w-full bg-white rounded-e-[4px]">
            {newReferral ? (
              <p className="text-[20px] text-base_3"> New Referral</p>
            ) : (
              <p className="text-[20px] text-primary">Rosa Diaz</p>
            )}
            <section className="flex flex-initial items-center gap-[16px]">
              <img
                className=" cursor-pointer"
                src="/delete.svg"
                alt="Mail Icon"
              />
              <section className="cursor-pointer" onClick={handleNewReferral}>
                {!newReferral ? (
                  <>
                    <img src="/expand_more.svg" alt="Down arrow Icon" />
                  </>
                ) : (
                  <>
                    <img src="/expand_less.svg" alt="Up arrow Icon" />
                  </>
                )}
              </section>
            </section>
          </div>
        </div>
        <form action="">
          <div class="flex h-[316px] w-[782px] bg-white justify-center pt-[32px] px-[56px]">
            {/* two cols of input boxes */}
            <div className="flex flex-col gap-[38.15">
              <div className="flex gap-[32px]">
                {/* first column of inputs */}
                <div className="flex flex-col gap-[38.15px]">
                  <div className="flex flex-inline items-center gap-[8px]">
                    <img src="/user.svg" alt="" className="absolute" />
                    <input
                      type="text"
                      placeholder="First Name"
                      required
                      className="pl-6 placeholder-base_3 border-base_3 text-base_3 gap-[8px] border-b w-[319px] focus:outline-none focus:border-b-2"
                    />
                  </div>
                  <div className="flex flex-inline items-center gap-[8px]">
                    <img src="/cake.svg" alt="" className="absolute" />
                    <input
                      type="text"
                      placeholder="Date of Birth"
                      required
                      className="pl-6 placeholder-base_3 border-base_3 text-base_3 gap-[8px] border-b w-[319px] focus:outline-none focus:border-b-2"
                    />
                  </div>
                  <div className="flex flex-inline items-center gap-[8px]">
                    <img src="/phone.svg" alt="" className="absolute" />
                    <input
                      type="text"
                      placeholder="Phone"
                      required
                      className="pl-6 placeholder-base_3 border-base_3 text-base_3 gap-[8px] border-b w-[319px] focus:outline-none focus:border-b-2"
                    />
                  </div>
                </div>
                {/* second column of inputs */}
                <div className="flex flex-col gap-[38.15px]">
                  <div className="flex flex-inline items-center gap-[8px]">
                    <img src="/user.svg" alt="" className="absolute" />
                    <input
                      type="text"
                      placeholder="Last Name"
                      required
                      className="pl-6 placeholder-base_3 border-base_3 text-base_3 gap-[8px] border-b w-[319px] focus:outline-none focus:border-b-2"
                    />
                  </div>
                  <div className="flex flex-inline items-center gap-[8px]">
                    <img src="/translate.svg" alt="" className="absolute" />
                    <input
                      type="text"
                      placeholder="Contact Language"
                      required
                      className="pl-6 placeholder-base_3 border-base_3 text-base_3 gap-[8px] border-b w-[319px] focus:outline-none focus:border-b-2"
                    />
                  </div>
                  <div className="relative flex flex-inline items-center ">
                    <img src="/mail.svg" alt="" className="absolute" />
                    <input
                      type="text"
                      placeholder="Email"
                      required
                      className=" pl-6 placeholder-base_3 border-base_3 text-base_3 gap-[8px] border-b w-[319px] focus:outline-none focus:border-b-2"
                    />
                  </div>
                </div>
              </div>
              <input
                type="text"
                placeholder="Address"
                required
                className="w-full mt-[30px] placeholder-base_3 border-base_3 text-base_3 gap-[8px] border-b w- focus:outline-none focus:border-b-2"
              />
              <input
                type="text"
                placeholder="Notes/Reason"
                required
                className="w-full pb-24px mt-[25px] placeholder-base_3 border-base_3 text-base_3 gap-[8px] border-b focus:outline-none focus:border-b-2"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
