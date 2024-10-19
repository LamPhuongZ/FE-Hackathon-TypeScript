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
          <div className="footer-line-right flex gap-2 max-md:justify-center max-md:mt-4">
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
        <hr className="mt-4 mb-0 border-none" />
        <div className="footer-content flex justify-around mt-8 max-md:flex-col max-md:items-center">
          <div className="footer-col1 max-md:w-full max-md:text-center max-md:mb-6">
            <h3 className="font-semibold text-2xl max-md:text-xl">
              Về chúng tôi
            </h3>
            <div className="footer-col1-detail flex flex-col mt-5 space-y-3 font-semibold">
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
          <div className="footer-col2 max-md:w-full max-md:text-center max-md:mb-6">
            <h3 className="font-semibold text-2xl max-md:text-xl">Khám phá</h3>
            <div className="footer-col1-detail flex flex-col mt-5 space-y-3 font-semibold">
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
          <div className="footer-col3 max-md:w-full max-md:text-center max-md:mb-6">
            <h3 className="font-semibold text-2xl max-md:text-xl">Liên hệ</h3>
            <div className="footer-col3-detail flex flex-col mt-5 space-y-3 text-base max-md:items-center">
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
