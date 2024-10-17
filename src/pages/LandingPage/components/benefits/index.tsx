import imgBenefit from "../../../../assets/images/landing-page-benefits.png";
import Vector from "../../../../assets/icons/vector.svg";

export default function Benefits() {
  return (
    <div className="mt-12 text-4xl flex flex-col justify-center items-center font-medium ">
      <div className="text-center mb-2 capitalize">
        <h1>Khám phá công việc</h1>
        <img src={Vector} alt="vector" width={516} height={47} />
      </div>
      <div className="w-full">
        <img
          src={imgBenefit}
          alt="img-benefit"
        />
      </div>
    </div>
  );
}
