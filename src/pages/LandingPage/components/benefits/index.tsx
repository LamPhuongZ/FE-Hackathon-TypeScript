import imgBenefit from "../../../../assets/images/landing-page-benefits.png";
import Vector from "../../../../assets/images/Vector.png";

export default function Benefits() {
  return (
    <div className="mt-10 text-4xl flex flex-col justify-center items-center font-bold ">
      <div className="mb-2">
        <h1>Khám phá công việc</h1>
      </div>
      <div>
        <img src={Vector} alt="" />
      </div>
      <div className="relative top-[-100px] w-full">
        <img src={imgBenefit} className="w-full h-full" />
      </div>
    </div>
  );
}
