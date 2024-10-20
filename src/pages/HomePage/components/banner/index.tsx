import banner1 from "../../../../assets/images/banner1.png";
import banner2 from "../../../../assets/images/banner2.png";
import Input from "../../../../components/input/Input";

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner__top">
        <div className="banner__left">
          <img src={banner1} alt="img-banner" className="w-full h-full" />
        </div>
        <div className="banner__content cssanimation typing">
          <h1 className="text">Kết nối việc làm, Cơ hội mới, cuộc sống mới</h1>
        </div>
        <div className="banner__right">
          <img src={banner2} alt="img-banner" className="w-full h-full mb-2" />
        </div>
      </div>

      <div className="banner__group">
        <div className="banner__search">
          
          <Input name="search" placeholder="Tìm kiếm" />
        </div>
      </div>
    </div>
  );
}
