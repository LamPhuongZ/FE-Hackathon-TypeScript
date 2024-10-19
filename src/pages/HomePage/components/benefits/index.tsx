import "./benefits.scss";
import ImgCenter from "../../../../assets/images/Benefit_Homepage.png";

export default function Benefits() {
  return (
    <section className="benefits">
      <h1 className="benefits__title">Tiện Ích Của Các Bạn</h1>
      <div className="benefits__content">
        <div className="benefits__left">
          <h2 className="benefits__subtitle">Tìm Việc</h2>
          <p className="benefits__item">
            Tiếp cận công việc dễ dàng, nhanh chóng
          </p>
          <p className="benefits__item">
            Lựa chọn công việc phù hợp với kỹ năng
          </p>
          <p className="benefits__item">Tự do lựa chọn thời gian làm việc</p>
        </div>
        <div className="benefits__center">
          <img
            src={ImgCenter}
            alt="Benefits"
            className="benefits__image my-10"
          />
        </div>
        <div className="benefits__right">
          <h2 className="benefits__subtitle">Tìm Người Thuê</h2>
          <p className="benefits__item">
            Dễ dàng tìm kiếm và tuyển dụng phù hợp
          </p>
          <p className="benefits__item">
            Tiết kiệm thời gian và chi phí tuyển dụng
          </p>
          <p className="benefits__item">
            Tìm kiếm ứng viên nhanh chóng, tiện lợi
          </p>
        </div>
      </div>
    </section>
  );
}
