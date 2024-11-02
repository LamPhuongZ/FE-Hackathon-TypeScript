import { useEffect, useRef } from "react";
import img from "../../assets/images/101.png"
import { useLocation } from "react-router-dom";

export default function PolicyPage() {
  const query = new URLSearchParams(useLocation().search);
  const section = query.get("section");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (section === "policy" && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [section]);

    return (
      <div ref={ref}>
        <div className="px-10 bg-blue-200 py-3 font-medium text-3xl">
          Chính Sách
        </div>
        <div className="content-policy w-11/12 bg-white m-auto my-8 p-10 rounded-2xl shadow-lg">
          <p className="font-normal text-xl mb-10 leading-loose">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
          <p className="font-normal text-xl mb-10 leading-loose">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
          <div className="text-with-image flex justify-between">
            <p className="font-normal text-xl mb-10 leading-loose">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for Many desktop publishing
              packages and web page editors now use Lorem Ipsum as their default
              model text, and a search for
            </p>
            <img
              src={img}
              alt="Image Description"
              className="w-[300px] h-auto"
            />
          </div>
        </div>
      </div>
    );
}
