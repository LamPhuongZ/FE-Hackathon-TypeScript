import "./footer.scss";

export default function Footer() {
  return (
    <footer className="max-md:p-4">
      <div className="footer-detail px-10 pt-8 pb-14">
        <div className="footer-line flex justify-between max-md:flex-col max-md:text-center ">
          <div className="footer-line-left flex gap-2 items-center max-md:justify-center">
            <img
              src="/src/assets/images/logo-company.png"
              alt="Company Logo"
              className="h-10"
            />
            <h1 className="font-bold pt-2 max-md:mt-0">Việc Làm Dễ</h1>
          </div>
          <div className="footer-line-right flex gap-2 max-md:justify-center max-md:mt-4">
            <a href="">
              <img
                src="/src/assets/images/FacebookLogo.png"
                alt="Facebook Logo"
                className="h-8"
              />
            </a>
            <a href="">
              <img
                src="/src/assets/images/InstagramLogo.png"
                alt="Instagram Logo"
                className="h-8"
              />
            </a>
            <a href="">
              <img
                src="/src/assets/images/TwitterLogo.png"
                alt="Twitter Logo"
                className="h-8"
              />
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="M144.27 45.93a8 8 0 0 1 9.8-5.66a86.22 86.22 0 0 1 61.66 61.66a8 8 0 0 1-5.66 9.8a8.2 8.2 0 0 1-2.07.27a8 8 0 0 1-7.73-5.94a70.35 70.35 0 0 0-50.33-50.33a8 8 0 0 1-5.67-9.8m-2.33 41.8c13.79 3.68 22.65 12.54 26.33 26.33A8 8 0 0 0 176 120a8.2 8.2 0 0 0 2.07-.27a8 8 0 0 0 5.66-9.8c-5.12-19.16-18.5-32.54-37.66-37.66a8 8 0 1 0-4.13 15.46m81.94 95.35A56.26 56.26 0 0 1 168 232C88.6 232 24 167.4 24 88a56.26 56.26 0 0 1 48.92-55.88a16 16 0 0 1 16.62 9.52l21.12 47.15v.12a16 16 0 0 1-1.27 15.09c-.18.27-.37.52-.57.77L88 129.45c7.49 15.22 23.41 31 38.83 38.51l24.34-20.71a8 8 0 0 1 .75-.56a16 16 0 0 1 15.17-1.4l.13.06l47.11 21.11a16 16 0 0 1 9.55 16.62m-15.88-2h-.11l-47-21.05l-24.35 20.71a8 8 0 0 1-.74.56a16 16 0 0 1-15.75 1.14c-18.73-9.05-37.4-27.58-46.46-46.11a16 16 0 0 1 1-15.7a6 6 0 0 1 .57-.77L96 95.15l-21-47a.6.6 0 0 1 0-.12A40.2 40.2 0 0 0 40 88a128.14 128.14 0 0 0 128 128a40.21 40.21 0 0 0 40-34.93Z"
                  ></path>
                </svg>
                <a href="tel:+84867133779" className="font-semibold">
                  (+84) 86 713 3779
                </a>
              </div>
              <div className="address-detail flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M9.5 7a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0M14 7c0 2.874-3.097 6.016-4.841 7.558a1.74 1.74 0 0 1-2.318 0C5.097 13.016 2 9.874 2 7a6 6 0 1 1 12 0m-1 0A5 5 0 0 0 3 7c0 1.108.615 2.395 1.57 3.683c.934 1.258 2.087 2.377 2.933 3.126a.74.74 0 0 0 .994 0c.846-.749 2-1.867 2.933-3.126C12.385 9.395 13 8.108 13 7"
                  ></path>
                </svg>
                <p className="font-semibold">Quận 7, Hồ Chí Minh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
