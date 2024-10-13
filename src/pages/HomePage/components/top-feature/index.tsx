import FindJob from "../find-job";
import imgJob from "../../../../assets/images/img-job.png";
import Field from "../../../../components/field/Field";
import Label from "../../../../components/label/Label";
import Input from "../../../../components/input/Input";
import Button from "../../../../components/button/Button";
import { JobData } from "../../interfaces";

const jobData: JobData[] = [
  {
    id: "1",
    title: "Vệ sinh căn hộ, gia đình",
    address: "Số 5 đường 5, phường 5",
    description:
      "Mô tả chung về dịch vụ vệ sinh căn hộ, gia đình. Mô tả chung về dịch vụ ...",
    image: imgJob,
  },
  {
    id: "2",
    title: "Vệ sinh căn hộ, gia đình",
    address: "Số 5 đường 5, phường 5",
    description:
      "Mô tả chung về dịch vụ vệ sinh căn hộ, gia đình. Mô tả chung về dịch vụ ...",
    image: imgJob,
  },
  {
    id: "3",
    title: "Vệ sinh căn hộ, gia đình",
    address: "Số 5 đường 5, phường 5",
    description:
      "Mô tả chung về dịch vụ vệ sinh căn hộ, gia đình. Mô tả chung về dịch vụ ...",
    image: imgJob,
  },
  {
    id: "4",
    title: "Vệ sinh căn hộ, gia đình",
    address: "Số 5 đường 5, phường 5",
    description:
      "Mô tả chung về dịch vụ vệ sinh căn hộ, gia đình. Mô tả chung về dịch vụ này cần thêm thông tin. Vui lòng xem thêm",
    image: imgJob,
  },
  {
    id: "5",
    title: "Vệ sinh căn hộ, gia đình",
    address: "Số 5 đường 5, phường 5",
    description:
      "Mô tả chung về dịch vụ vệ sinh căn hộ, gia đình. Mô tả chung về dịch vụ ...",
    image: imgJob,
  },
  {
    id: "6",
    title: "Vệ sinh căn hộ, gia đình",
    address: "Số 5 đường 5, phường 5",
    description:
      "Mô tả chung về dịch vụ vệ sinh căn hộ, gia đình. Mô tả chung về dịch vụ ...",
    image: imgJob,
  },
];

export default function TopFeature() {
  return (
    <section className="top-feature">
      <div className="content-input px-[70px] py-12">
        <div className="form-layout-col3">
          <Field>
            <Label htmlFor="search">Tìm Kiếm</Label>
            <Input
              name="search"
              placeholder="Tìm kiếm"
            />
          </Field>
          <Field>
            <Label htmlFor="chooseType">Loại Công Việc</Label>
            <Input name="chooseType" placeholder="Loại Công Việc" />
          </Field>
          <Field>
            <p className="text-2xl font-bold pt-11">
              Khu vực: Thành phố HỒ CHÍ MINH
            </p>
          </Field>
        </div>
        <Button title="Chọn Ứng Viên" className="bg-[#3F8CFF]" />
      </div>
      <FindJob data={jobData} />
    </section>
  );
}