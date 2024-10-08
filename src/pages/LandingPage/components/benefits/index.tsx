import imgBenefit from "../../../../assets/images/landing-page-benefits.png";
import Vector from "../../../../assets/icons/vector.svg";

export default function Benefits() {
  return (
    <div className="mt-24 text-4xl flex flex-col justify-center items-center font-bold ">
      <div className="mb-2">
        <h1>Khám phá công việc</h1>
      </div>
      <img src={Vector} alt="vector" width={516} height={47} />
      <div className="relative mt-4 top-[-100px] w-full">
        <img src={imgBenefit} className="w-full h-full" width={1440} height={523} />
      </div>
    </div>
  );
}
