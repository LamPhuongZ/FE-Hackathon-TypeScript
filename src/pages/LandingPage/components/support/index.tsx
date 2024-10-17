import iconBriefcaseFill from "../../../../assets/icons/briefcase-fill.svg";
import iconEaselFill from "../../../../assets/icons/easel-fill.svg";
import iconShieldFill from "../../../../assets/icons/shield-fill.svg";
import iconVector from "../../../../assets/icons/vector.svg";
import Card from "../../../../components/card/Card";

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
    <section className="flex flex-col justify-center items-center bg-[#F1F2FD]">
      <div className="mb-2 text-center font-medium text-4xl mt-10 capitalize">
        <h1>Tại sao chọn chúng tôi ?</h1>
        <img src={iconVector} alt="vector" />
      </div>
      <div className="form-layout-col3 mt-12">
        {content.map((item) => {
          return (
            <Card
              key={item.id}
              className="bg-white px-[47px] py-[110px] rounded-[20px] shadow-custom w-[380px] lg:h-[510px] md:h-[300px]"
            >
              <div className="flex flex-col gap-5 items-center">
                <img src={item.src} alt="icon-support" width={98} height={86} />
                <h1 className="text-4xl font-bold text-center capitalize">
                  {item.des}
                </h1>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
