import { useState } from "react";
import Form from "./Form";
import "./App.css";

function App() {
  const [patients, setPatient] = useState([
    {
      id: 0,
      fname: "rose",
      lname: "memer",
      dob: "",
      language: "",
      phone: "",
      email: "",
      address: "",
      note: "",
      visible: true,
    },
    {
      id: 1,
      fname: "",
      lname: "",
      dob: "",
      language: "",
      phone: "",
      email: "",
      address: "",
      note: "",
      visible: true,
    },
  ]);
  const [newReferral, setNewReferral] = useState();

  const handleVisibility = (index) => {
    patients.forEach((patient) => {
      if (patient.id === index) {
        patient.visible = !patient.visible;
      }
    });

    setNewReferral((referral) => !referral);
  };
  const addPatient = () => {
    const newPatient = {
      id: patients.length,
      fname: "",
      lname: "",
      dob: "",
      language: "",
      phone: "",
      email: "",
      address: "",
      note: "",
      visible: true,
    };

    setPatient([...patients, newPatient]);
  };
  const deletePatient = (index) => {
    const updatedPatients = patients.filter((patient) => patient.id !== index);
    for (let i = 0; i < updatedPatients.length; i++) {
      updatedPatients[i].id = i;
    }
    setPatient(updatedPatients);
  };

  const handleValues = (e, patientId, field) => {
    const value = e.target.value;
    setPatient((prevPatient) => {
      return prevPatient.map((patient) => {
        if (patient.id === patientId) {
          return {
            ...patient,
            [field]: value,
          };
        }
        return patient;
      });
    });
  };

  const getBgClassNames = (id) => {
    return "bg-base_" + Number(id + 1);
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-light_blue relative">
        {/* header section */}
        <div className="absolute top-0 w-full h-[196px] bg-white flex justify-center items-center">
          <div className="flex flex-col items-center text-primary font-[500px]">
            <h3 className="text-[30px]">Patient Referral Form</h3>
            <h2 className="text-[27px]">Hayes Valley Health San Francisco</h2>
          </div>
        </div>
        <form
          className="flex flex-col items-center gap-[28px]   pt-[230px]"
          action="submit"
        >
          <div className="flex flex-col leading-[32px] justify-center items-center text-primary gap-[8px]">
            <p className="text-[24px]">Referral Patients</p>
            <p className="text-[20px]">
              You can add up to five patients at a time
            </p>
          </div>
          {/* form group */}
          <div className="flex flex-col">
            {/* hideable part */}
            {patients.map((patient, index) => (
              <div key={index}>
                <>
                  <div className="flex flex-col">
                    {/* visible part */}
                    <div className="flex h-[64px] w-[782px]">
                      <div
                        className={`h-full w-[40px] ${getBgClassNames(
                          index
                        )} text-white flex justify-center items-center rounded-tl-[4px] ${
                          !patient.visible && "rounded-bl-[4px]"
                        }   `}
                      >
                        {patient.id + 1}
                      </div>

                      <div className="flex cursor-pointer justify-between items-center px-[16px] w-full bg-white rounded-e-[4px]">
                        {patient.fname === "" ? (
                          <p
                            className="text-[20px] text-base_3 cursor-pointer"
                            onClick={() => handleVisibility(index)}
                          >
                            {" "}
                            New Referral
                          </p>
                        ) : (
                          <p className="text-[20px] text-primary">
                            {patient.fname} {patient.lname}
                          </p>
                        )}
                        <section className="flex flex-initial items-center gap-[16px]">
                          <img
                            src="/delete.svg"
                            alt="Mail Icon"
                            onClick={() => deletePatient(index)}
                            className=" p-2"
                          />
                          <section
                            className="cursor-pointer"
                            onClick={() => handleVisibility(index)}
                          >
                            {!patient.visible ? (
                              <>
                                <img
                                  src="/expand_more.svg"
                                  alt="Down arrow Icon"
                                  className=" p-2"
                                />
                              </>
                            ) : (
                              <>
                                <img
                                  src="/expand_less.svg"
                                  alt="Up arrow Icon"
                                  className=" p-2"
                                />
                              </>
                            )}
                          </section>
                        </section>
                      </div>
                    </div>
                    {patient.visible ? (
                      <div>
                        <div className="flex h-[316px] w-[782px] bg-white justify-center pt-[32px] px-[56px]">
                          {/* two cols of input boxes */}
                          <div className="flex flex-col gap-[38.15">
                            <div className="flex gap-[32px]">
                              {/* first column of inputs */}
                              <div className="flex flex-col gap-[38.15px]">
                                <div className="flex flex-inline items-center gap-[8px]">
                                  <img
                                    src="/user.svg"
                                    alt=""
                                    className="absolute"
                                  />
                                  <input
                                    type="text"
                                    name="fname"
                                    placeholder="First Name"
                                    required
                                    onChange={(e) =>
                                      handleValues(e, patient.id, "fname")
                                    }
                                    value={patient.fname}
                                    className="pl-6 placeholder-base_3 border-base_3 text-base_3 gap-[8px] border-b w-[319px] focus:outline-none focus:border-b-2"
                                  />
                                </div>
                                <div className="flex flex-inline items-center gap-[8px]">
                                  <img
                                    src="/cake.svg"
                                    alt=""
                                    className="absolute"
                                  />
                                  <input
                                    type="date"
                                    name="date"
                                    placeholder="Date of Birth"
                                    onChange={(e) =>
                                      handleValues(e, patient.id, "date")
                                    }
                                    value={patient.dob}
                                    required
                                    className="pl-6 placeholder-base_3 border-base_3 text-base_3 gap-[8px] border-b w-[319px] focus:outline-none focus:border-b-2"
                                  />
                                </div>
                                <div className="flex flex-inline items-center gap-[8px]">
                                  <img
                                    src="/phone.svg"
                                    alt=""
                                    className="absolute"
                                  />
                                  <input
                                    type="text"
                                    name="phone"
                                    onChange={(e) =>
                                      handleValues(e, patient.id, "phone")
                                    }
                                    value={patient.phone}
                                    placeholder="Phone"
                                    required
                                    className="pl-6 placeholder-base_3 border-base_3 text-base_3 gap-[8px] border-b w-[319px] focus:outline-none focus:border-b-2"
                                  />
                                </div>
                              </div>
                              {/* second column of inputs */}
                              <div className="flex flex-col gap-[38.15px]">
                                <div className="flex flex-inline items-center gap-[8px]">
                                  <img
                                    src="/user.svg"
                                    alt=""
                                    className="absolute"
                                  />
                                  <input
                                    type="text"
                                    placeholder="Last Name"
                                    name="lname"
                                    onChange={(e) =>
                                      handleValues(e, patient.id, "lname")
                                    }
                                    value={patient.lname}
                                    required
                                    className="pl-6 placeholder-base_3 border-base_3 text-base_3 gap-[8px] border-b w-[319px] focus:outline-none focus:border-b-2"
                                  />
                                </div>
                                <div className="flex flex-inline items-center gap-[8px]">
                                  <img
                                    src="/translate.svg"
                                    alt=""
                                    className="absolute"
                                  />
                                  <input
                                    type="text"
                                    placeholder="Contact Language"
                                    name="language"
                                    onChange={(e) =>
                                      handleValues(e, patient.id, "language")
                                    }
                                    value={patient.language}
                                    required
                                    className="pl-6 placeholder-base_3 border-base_3 text-base_3 gap-[8px] border-b w-[319px] focus:outline-none focus:border-b-2"
                                  />
                                </div>
                                <div className="relative flex flex-inline items-center ">
                                  <img
                                    src="/mail.svg"
                                    alt=""
                                    className="absolute"
                                  />
                                  <input
                                    type="text"
                                    value={patient.email}
                                    name="email"
                                    onChange={(e) =>
                                      handleValues(e, patient.id, "email")
                                    }
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
                              name="address"
                              onChange={(e) =>
                                handleValues(e, patient.id, "address")
                              }
                              value={patient.address}
                              required
                              className="w-full mt-[30px] placeholder-base_3 border-base_3 text-base_3 gap-[8px] border-b w- focus:outline-none focus:border-b-2"
                            />
                            <input
                              type="text"
                              name="note"
                              onChange={(e) =>
                                handleValues(e, patient.id, "note")
                              }
                              value={patient.notes}
                              placeholder="Notes/Reason"
                              required
                              className="w-full pb-24px mt-[25px] placeholder-base_3 border-base_3 text-base_3 gap-[8px] border-b focus:outline-none focus:border-b-2"
                            />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </>

                <br />
              </div>
            ))}
          </div>
          <p className="text-[14px] cursor-pointer" onClick={addPatient}>
            + ADD ANOTHER PATIENT
          </p>

          <button
            type="submit"
            className="cursor-pointer rounded-full w-full  h-[48px] text-white mb-[1rem] flex justify-center items-center bg-base_5"
          >
            SEND REFERRALS
          </button>
        </form>
      </div>
      {/* main seciton */}
    </>
  );
}

export default App;
