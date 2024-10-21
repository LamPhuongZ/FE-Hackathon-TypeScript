import { FilterOutlined, SearchOutlined } from "@ant-design/icons";
import banner1 from "../../../../assets/images/banner1.png";
import banner2 from "../../../../assets/images/banner2.png";
import Field from "../../../../components/field/Field";
import Label from "../../../../components/label/Label";

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
          <div className="">
            <Field>
              <div className="top-feature-group flex-1 relative">
                <div className="absolute left-3 top-[70%] transform -translate-y-1/2">
                  <SearchOutlined
                    className="text-gray-500"
                    style={{ fontSize: "24px" }}
                  />
                </div>
                <input
                  type="text"
                  name="search"
                  placeholder="Tìm kiếm"
                  className="border rounded-md pl-[20px] pr-12 py-[16px] w-full"
                />
              </div>
            </Field>

            {/* <Field>
              <div className="top-feature-group flex-1 relative">
                <Label htmlFor="chooseType">Loại Công Việc</Label>
                <div className="absolute right-3 top-[70%] transform -translate-y-1/2">
                  <FilterOutlined
                    className="text-gray-500"
                    style={{ fontSize: "24px" }}
                  />
                </div>
                <input
                  type="text"
                  name="chooseType"
                  placeholder="Loại Công Việc"
                  className="border rounded-md pl-[20px] pr-12 py-[16px] w-full"
                />
              </div>
            </Field>
            <Field>
              <p className="text-2xl font-bold pt-11">
                Khu vực: Thành phố HỒ CHÍ MINH
              </p>
            </Field> */}
          </div>
        </div>
      </div>
    </div>
  );
}
