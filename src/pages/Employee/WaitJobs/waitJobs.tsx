import React from "react";
import Card from "../../../components/card/Card";
import Address from "../../../assets/icons/icon-red-address.svg";
import Ava from "../../../assets/images/ava.jpg"
import logoCheck from "../../../assets/icons/check.svg"
import telephone from "../../../assets/icons/phone.svg"



export const WaitJobs: React.FC = () => {
  return (
     <Card className="w-[90%] border border-[#cacaca] rounded-[12px] p-4 my-6 shadow-xl m-auto">
              <div className="flex flex-row gap-1">
                <div className="col1 w-1/5">
                  <img src={Ava} alt="" className="h-28 w-28 rounded-xl" />
                </div>
                <div className="col2 w-4/5 flex flex-col justify-center">
                  <div className="row1 flex justify-between items-center">
                    <div className="flex gap-2 flex-row items-center justify-center">
                      <h1 className="text-xl font-semibold">Giao hàng</h1>
                      <img src={logoCheck} alt="" className="h-5 w-5" />
                    </div>
                    <div className="flex gap-1 flex-row items-center justify-center">
                      <img src={Address} alt="" className="h-5 w-5" />
                      <h1 className="font-normal text-sm">Quận 7, TP.HCM</h1>
                    </div>
                  </div>
                  <hr className="mt-2 mb-6" />
                  <div className="row2 flex justify-between items-center">
                    <div className="flex flex-row gap-2 justify-center items-center">
                      <p className="py-1 px-2 rounded-full bg-gray-200 w-auto text-center font-medium">
                        Dọn nhà
                      </p>
                      <div className="h-7 w-px bg-black" />
                    
                    </div>
                    <div className="flex items-center gap-2">
                      <img src={telephone} alt="" className="h-6 w-6" />
                      <p className="pt-2 font-semibold text-lg">098765432</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
  );
};
