import './feedback.scss';
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
    <section className="feedback">
      <div className="feedback__group">
        <h2 className="title">
          Họ nói về chúng tôi
          <span className="line"></span>
          <img
            src={iconFeedback}
            alt="icon-star-four-fill"
            width={30}
            height={30}
          />
        </h2>
        <div className="feedback__cards">
          {feedbackData.map((item, index) => (
            <Card
              key={index}
              className="w-full h-[300px] lg:w-[411px] lg:h-[376px] rounded-[24px] p-[18px_22px_34px_22px] shadow-[0px_6px_58px_0px_rgba(196,203,214,0.5)]"
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
      </div>
    </section>
  );
}
