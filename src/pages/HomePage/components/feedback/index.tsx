import iconFeedback from "../../../../assets/icons/star-four-fill.svg";
import authorImage from "../../../../assets/images/avatar-1.png";
import Card from "../../../../components/card/Card";

const feedbackData = [
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    author: "Lương Văn A",
    image: authorImage,
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    author: "Lương Văn A",
    image: authorImage,
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    author: "Lương Văn A",
    image: authorImage,
  },
];

export default function Feedback() {
  return (
    <section className="pt-[32px] pb-[47px] my-[40px] bg-white ">
      <div className="flex flex-col lg:items-start">
        <h2 className="flex justify-start items-center gap-3 text-[32px] font-semibold mb-[18px] mx-10">
          Họ nói về chúng tôi
          <span className="w-[183px] h-[3px] bg-black"></span>
          <img
            className="w-[30px] h-[30px]"
            src={iconFeedback}
            alt="icon-star-four-fill"
          />
        </h2>
        <div className="flex flex-row ml-10 gap-6 max-md:flex-col max-md:items-center max-md:mx-6 max-xl:flex-wrap">
          {feedbackData.map((item, index) => (
              <Card
                key={index}
                className="w-[380px] h-auto rounded-[20px] p-[18px_22px_34px_22px] shadow-[0px_6px_58px_0px_rgba(196,203,214,0.5)] max-md:w-full max-xl:w-1/3"
              >
                <div className="flex flex-col gap-4">
                  <p className="font-normal text-base">{item.text}</p>
                  <div className="flex flex-row justify-start items-center">
                    <img
                      src={item.image}
                      alt={item.author}
                      className="w-16 h-16 rounded-[73px] mr-4"
                    />
                    <p className="mt-2 font-semibold text-base">
                      {item.author}
                    </p>
                  </div>
                </div>
              </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
