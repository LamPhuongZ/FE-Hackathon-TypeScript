import iconFeedback from "../../../../assets/icons/star-four-fill.svg";
import authorImage from "../../../../assets/images/avatar-1.png";
import Card from "../../../../components/card";

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

export function Feedback() {
  return (
    <section className="pt-[61px] pb-[47px] px-[71px] my-[72px] flex flex-col gap-4 bg-white">
      <h2 className="flex justify-start items-center gap-3 text-2xl font-bold mb-2">
        Họ nói về chúng tôi
        <span className="w-[183px] h-[3px] bg-black"></span>
        <img
          className="w-[30px] h-[30px]"
          src={iconFeedback}
          alt="icon-star-four-fill"
        />
      </h2>
      <div className="flex flex-col md:flex-row md:gap-[61px]">
        {feedbackData.map((item, index) => (
          <Card
            key={index}
            width="411px"
            height="376px"
            borderRadius="24px"
            padding="18px 22px 34px 22px"
            boxShadow="0px 6px 58px 0px rgba(196, 203, 214, 0.50)"
          >
            <div className="flex flex-col gap-4">
              <p className="font-normal text-base">{item.text}</p>
              <div className="flex flex-row justify-start items-center">
                <img
                  src={item.image}
                  alt={item.author}
                  className="w-16 h-16 rounded-[73px] mr-4"
                />
                <p className="mt-2 font-bold text-base">{item.author}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
