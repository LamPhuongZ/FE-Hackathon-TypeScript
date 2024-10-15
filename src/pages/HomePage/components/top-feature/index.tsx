import FindJob from "../find-job";
import Field from "../../../../components/field/Field";
import Label from "../../../../components/label/Label";
import Button from "../../../../components/button/Button";
import { SearchOutlined, FilterOutlined } from "@ant-design/icons";

export default function TopFeature() {
  return (
    <section className="top-feature">
      <div className="content-input px-[70px] py-12">
        <div className="form-layout-col3 flex gap-4">
          <Field>
            <div className="top-feature-group flex-1 relative">
              <Label htmlFor="search">Tìm Kiếm</Label>
              <div className="absolute right-3 top-[70%] transform -translate-y-1/2">
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

          <Field>
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
          </Field>
        </div>
        <Button title="Chọn Ứng Viên" className="w-full h-16 mt-4" />
      </div>
      <FindJob />
    </section>
  );
}
