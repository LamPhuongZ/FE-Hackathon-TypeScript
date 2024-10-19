import logoCompany from "../../assets/images/logo-company.png";
import logoFacebook from "../../assets/images/FacebookLogo.png";
import logoInstagram from "../../assets/images/InstagramLogo.png";
import logoTwitter from "../../assets/images/TwitterLogo.png";
import iconPhone from "../../assets/icons/phone.svg";
import iconAddress from "../../assets/icons/address.svg";
 
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__detail">
        <div className="footerLine">
          <div className="footerLine__left">
            <img src={logoCompany} alt="Company Logo" className="h-10" />
            <h1 className="font-bold pt-2 max-md:mt-0">Việc Làm Dễ</h1>
          </div>
          <div className="footerLine__right">
            <a href="">
              <img src={logoFacebook} alt="Facebook Logo" className="h-8" />
            </a>
            <a href="">
              <img src={logoInstagram} alt="Instagram Logo" className="h-8" />
            </a>
            <a href="">
              <img src={logoTwitter} alt="Twitter Logo" className="h-8" />
            </a>
          </div>
        </div>
        <hr className="line" />
        <div className="footer__content">
          <div className="footer__col1">
            <h3 className="title">
              Về chúng tôi
            </h3>
            <div className="footer__col1__detail">
              <a href="" className="link">
                Giới thiệu
              </a>
              <a href="" className="link">
                Chính sách
              </a>
              <a href="" className="link">
                Điều khoản dịch vụ
              </a>
              <a href="" className="link">
                Lợi ích
              </a>
            </div>
          </div>
          <div className="footer__col2">
            <h3 className="title">Khám phá</h3>
            <div className="footer__col2__detail">
              <a href="" className="link">
                Tính năng
              </a>
              <a href="" className="link">
                Liên hệ
              </a>
              <a href="" className="link">
                Phát triển
              </a>
            </div>
          </div>
          <div className="footer__col3">
            <h3 className="title">Liên hệ</h3>
            <div className="footer__col3__detail">
              <div className="phone-detail flex gap-2">
                <img src={iconPhone} alt="icon-phone" />
                <a href="tel:+84867133779" className="font-semibold">
                  (+84) 86 713 3779
                </a>
              </div>
              <div className="address-detail flex gap-2">
               <img src={iconAddress} alt="icon-address" />
                <p className="font-semibold">Quận 7, Hồ Chí Minh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
