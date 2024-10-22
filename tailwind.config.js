/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "0rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "3.125rem",
        "2xl": "7rem",
      },
    },
    extend: {
      colors: {
        "custom-white": "#f1f2fd",
        "custom-blue": "rgba(63, 140, 255, 0.63)",
        "custom-primary": "#F4F9FD",
        "custom-second": "#6da2f139",
        "tw-text-opacity": "#5694f0",
      },
      screens: {
        
        // updating from chatGPT
        "small-phone": { max: "375px" }, // Điện thoại trung bình (iPhone X)
        "large-phone": { max: "414px" }, // Điện thoại lớn (iPhone 6/7/8 Plus)
        "small-tablet": { max: "840px" }, // Máy tính bảng nhỏ (iPad Mini)
        "small-laptop": { max: "1280px" }, // Laptop nhỏ (MacBook Air)
        "large-desktop": { max: "1440px" }, // Desktop lớn (màn hình lớn)

        "max-md": { max: "700px" }, // max-width 700px
        "max-xl": { max: "1250px" }, // max-width 1250px
      },
      boxShadow: {
        custom:
          "0px 100px 80px 0px rgba(0, 0, 0, 0.07), 0px 41.778px 33.422px 0px rgba(0, 0, 0, 0.05), 0px 22.336px 17.869px 0px rgba(0, 0, 0, 0.04), 0px 12.522px 10.017px 0px rgba(0, 0, 0, 0.04), 0px 6.65px 5.32px 0px rgba(0, 0, 0, 0.03), 0px 2.767px 2.214px 0px rgba(0, 0, 0, 0.02)",
      },

      columnsGrid: "500px minmax(0, 1fr)",
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".flex-center": {
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
        },
        ".flex-between": {
          display: "flex",
          "justify-content": "space-between",
          "align-items": "center",
        },
        ".flex-end": {
          display: "flex",
          "justify-content": "flex-end",
          "align-items": "center",
        },
        ".grid-1": {
          display: "grid",
          "grid-template-columns": "1fr 1fr",
          "align-items": "center",
        },
        ".border-small": {
          border: "1px solid #39442B",
          "border-radius": "25px",
          padding: "10px 16px 10px 16px",
        },
        ".fix-top": {
          position: "fixed",
          top: "20px",
          left: "50px",
          right: "50px",
          "z-index": "100",
        },
        ".paragraph": {
          color: "#FDFDF1", // You might want to change this to 'lightYellow'
          "font-size": "157.5px",
          "font-style": "normal",
          "font-weight": "200",
          "line-height": "173.25px",
          display: "flex",
          "align-items": "flex-start",
          "justify-content": "flex-start",
          position: "absolute",
          "z-index": "100",
          "white-space": "nowrap",
        },
        ".text-container": {
          "font-family": "Fraktion",
          "font-style": "normal",
          "text-transform": "uppercase",
        },
        ".nav-items": {
          "font-family": "Fraktion",
          "font-style": "normal",
          "text-transform": "uppercase",
        },
        ".marquee": {
          "white-space": "nowrap",
          "overflow-y": "hidden",
          "overflow-x": "hidden",
          animation: "marquee 10s linear infinite",
        },
        "@keyframes marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        ".home_hero_text_content": {
          "font-family": "Fraktion",
          "font-style": "normal",
          "text-transform": "uppercase",
          "font-weight": "700",
          "line-height": "17.33px",
          "letter-spacing": "1.575px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        },
        ".transition": {
          transition: "all 0.3s ease-in-out",
        },
        ".about_header_text_title": {
          "font-family": "PP Editorial New",
          "font-style": "italic",
          "text-transform": "uppercase",
          "font-size": "78.8px",
          "font-weight": "200",
          "line-height": "94.5px",
          "letter-spacing": "-1.378px",
        },
        ".about_container": {
          "min-height": "100vh",
          padding: "144px 107px 160px ",
        },
        ".border-primary": {
          "border-radius": "9px",
          border: "1px solid rgba(57, 68, 43, 0.20)",
        },
        ".about-img-container": {
          "flex-basic": "25%",
        },
        ".img": {
          width: "100%",
          height: "18vw",
          "border-radius": "25px",
          objectFit: "cover",
          objectPosition: "center",
        },
        ".vertical-square": {
          "aspect-ratio": "305 / 230",
        },
        ".horizontal-square": {
          "aspect-ratio": " 230/ 305",
        },
        ".about-img-container_img1": {
          position: "relative",
          top: "-100px",
        },
        ".about-img-container_img2": {
          position: "relative",
          top: "150px",
          left: "100px",
        },
        ".about-img-container_img3": {
          position: "relative",
          top: "-200px",
        },
        ".u-bg-green": {
          background: "#39442b",
        },
        ".service_header": {
          textAlign: "start",
          width: "100%",
          overflow: "hidden",
          "font-size": "4.375rem",
          "line-height": "1.1",
          letterSpacing: "0.175em",
          "font-weight": "200",
          color: "lightGray",
          "max-width": "45ch",
          fontFamily: "EditorialItalic",
          "font-style": "italic",
        },
        ".service-container": {
          "min-height": "100vh",
          padding: "144px 107px 160px ",
        },
        ".white-text": {
          color: "lightGray",
          fontFamily: "EditorialItalic",
        },
        ".service-right-header": {
          "font-size": "1rem",
          "line-height": "1.1",
          letterSpacing: "0.175em",
          "font-weight": "200",
          color: "lightGray",
          "max-width": "45ch",
          fontFamily: "EditorialItalic",
          "font-style": "italic",
          "text-align": "justify",
        },
        ".img-container": {
          "border-radius": "22.5px",

          backgroundColor: "#d9d9ce",
          borderRadius: "1.25rem",
          width: "100%",
          paddingTop: "2.25rem",
          paddingLeft: "2.25rem",
          paddingRight: "2.25rem",
          position: "relative",
          overflow: "hidden",
          transform: "none",
          marginTop: "2.25rem",
        },
        ".sub": {
          "letter-spacing": ".1em",
          "text-transform": "uppercase",
          "line-height": "1.1",
          "font-size": "1.15rem",
          "margin-bottom": "1.45rem",
          color: "lightGray",
          fontFamily: "EditorialItalic",
        },
        ".pricing_header": {
          "font-size": "8.75rem",
          "line-height": "1.1",
          "font-weight": "200",
        },
        ".pricing-container": {
          "min-height": "100vh",
          padding: "144px 107px 160px ",
        },
        ".pricing-content": {
          color: "primary",
        },
        ".pricing-right-content": {
          "font-size": "2rem",
          "line-height": "1.1",
          "font-weight": "150",
          "text-align": "start",
        },
        ".col": {
          display: "flex",
          "align-items": "center",
          "justify-content": "flex-start",
        },
        ".index": {
          "font-size": "1.15rem",
          "padding-top": "1.6875rem",
          "padding-bottom": "1.6875rem",
          "padding-right": "1.6875rem",
          height: "fit-content",
          with: "fit-content",
          "border-right": "1px solid #39442B",
        },
        ".content": {
          "margin-left": "1.6875rem",
        },
        ".flip-text:hover": {
          transform: "translateY(-100%)",
        },
        ".bot-items": {
          "font-style": "normal",
          "text-transform": "capitalize",
          height: "2rem",
          color: "lightYellow",
        },
        ".bot-items > h3": {
          transition: "all 0.3s ease-in-out",
        },

        ".bot-items:hover > h3": {
          transform: "translateY(-100%)",
        },
        h3: {
          "font-size": "2rem",
          "letter-spacing": "0.004em",
          "line-height": "1.1",
          "font-weight": "200",
        },
        ".email-input": {
          border: "none",
          outline: "none",
          background: "transparent",
          "placeholder-color": "lightYellow",
          "border-bottom": "1px solid lightYellow",
          padding: "0.5rem 4rem 0.5rem 0.5rem ",
          "margin-top": "2rem",
        },
        ".subscribe-btn": {
          "font-size": "1rem",
          "line-height": "1.1",
          "font-weight": "200",
          "text-transform": "uppercase",
          "letter-spacing": "0.004em",
          padding: "0.5rem 4rem 0.5rem 0.5rem ",
        },
        ".btn-hover": {
          overflow: "hidden",
        },
        ".btn-hover > *": {
          transition: "all 0.3s ease-in-out",
        },
        ".btn-hover:hover > *": {
          transform: "translateY(-100%)",
        },
        ".bottom-60": {
          bottom: "100px",
        },
        ".bottom-24": {
          bottom: "16px",
        },
        ".home_hero_btn_bg > *": {
          transition: "all 0.3s ease-in-out",
        },
        ".home_hero_btn_bg:hover > .home_hero_text_content": {
          color: "white",
        },
        ".home_hero_btn_bg:hover > .home_hero_btn_bg_hover": {
          padding: "90px",
          zIndex: "20",
        },
      };
      addUtilities(newUtilities);
    },
  ],

  // To use custom utilities, add them to the 'utilities' section in your Tailwind config
  // Then you can use them in your HTML or JSX like regular Tailwind classes
  // For example: <div className="flex-center">...</div>
  utilities: {
    ".flex-center": {
      display: "flex",
      "justify-content": "center",
      "align-items": "center",
    },
  },
};
