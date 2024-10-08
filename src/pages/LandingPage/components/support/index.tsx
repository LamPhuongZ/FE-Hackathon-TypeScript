import iconBriefcaseFill from "../../../../assets/icons/briefcase-fill.svg";
import iconEaselFill from "../../../../assets/icons/easel-fill.svg";
import iconShieldFill from "../../../../assets/icons/shield-fill.svg";
import iconVector from "../../../../assets/icons/vector.svg";

export default function Support() {
  const content = [
    {
      id: 1,
      src: iconBriefcaseFill,
      des: "Dễ dàng tìm việc làm",
    },
    {
      id: 2,
      src: iconEaselFill,
      des: "Giao diện thân thiện với người dùng",
    },
    { id: 3, src: iconShieldFill, des: "Bảo mật thông tin khách hàng" },
  ];

  return (
    <>
      <div className=" flex flex-col justify-center items-center  bg-[#F1F2FD] h-[100vh]">
        <div className="mb-2 font-bold text-4xl mt-10 ">
          <h1>Tại sao chọn chúng tôi ?</h1>
        </div>
        <div>
          <img src={iconVector} alt="vector" />
        </div>
        <div className="flex gap-[50px] items-center mt-10">
          {content.map((item) => {
            return (
              <div
                key={item.id}
                className="bg-white  shadow w-[400px] h-[300px] rounded-[20px] flex flex-col items-center"
              >
                <div className="Icons mt-10">
                  <img src={item.src} alt="icon-support" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-center capitalize">
                    {item.des}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
