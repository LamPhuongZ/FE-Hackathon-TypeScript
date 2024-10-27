import { useForm } from "react-hook-form";
import Field from "../../components/field/Field";
import Input from "../../components/input/Input";
import Label from "../../components/label/Label";
import ImageUploadProps from "../../components/image-upload/ImageUpload";
import Textarea from "../../components/textarea/Textarea";
import Button from "../../components/button/Button";
import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../redux/configStore";
import { getJobTypeAPI, JobType } from "../../redux/reducers/typeReducer";
import Dropdown from "../../components/dropdown/Dropdown";
import DropdownSelect from "../../components/dropdown/DropdownSelect";
import DropdownList from "../../components/dropdown/DropdownList";
import DropdownOption from "../../components/dropdown/DropdownOption";
import { JobProfileSchema } from "../../utils/validation";
import { District, Province, useAddress } from "../../hooks/useAddress";
import { postDataJobAPI, PostJobType } from "../../redux/reducers/jobReducer";
import moment from "moment";

export default function FormApplication() {
  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(JobProfileSchema),
    defaultValues: {
      title: "",
      phone: "",
      address: "",
      startDate: "",
      endDate: "",
      duration: 0,
      districtId: 0,
      provinceId: 0,
      jobTypeId: 0,
      description: "",
      imageJobDetails: undefined,
    },
  });
  const [resetTrigger, setResetTrigger] = useState(false); // Reset trigger state
  const { provinces, districts } = useAddress();

  const { objJobType } = useSelector((state: RootState) => state.typeReducer);
  const dispatch: DispatchType = useDispatch();

  const [selectedJobType, setSelectedJobType] = useState<JobType>();
  const [selectedProvince, setSelectedProvince] = useState<Province>();
  const [selectedDistrict, setSelectedDistrict] = useState<District>();

  const handleClickOption = async (item: JobType) => {
    setSelectedJobType(item);
    setValue("jobTypeId", ~~item.id);
  };

  const handleSelectedProvince = (item: Province) => {
    setSelectedProvince(item);
    setValue("provinceId", ~~item.id);
  };

  const handleSelectedDistrict = (item: District) => {
    setSelectedDistrict(item);
    setValue("districtId", ~~item.id);
  };

  const getDataJobTypeList = async () => {
    const actionAPI = getJobTypeAPI();
    dispatch(actionAPI);
  };

  useEffect(() => {
    getDataJobTypeList();
  }, []);

  const [imagesDeleted, setImagesDeleted] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]); // Trạng thái xóa ảnh

  const handleImageRemove = (index: number) => {
    setImagesDeleted((prev) => {
      const newState = [...prev];
      newState[index] = true; // Đánh dấu ảnh đã bị xóa
      return newState;
    });
  };

  const handlePost = async (values: PostJobType) => {
    try {
      const payload = {
        ...values,
        startDate: values.startDate
          ? moment(values.startDate).format("YYYY-MM-DDTHH:mm:ss.ssssss")
          : null,
        endDate: values.endDate
          ? moment(values.endDate).format("YYYY-MM-DDTHH:mm:ss.ssssss")
          : null,
      };
      console.log("Dữ liệu form:", payload); // Kiểm tra dữ liệu

      // Gửi request thông qua dispatch action
      await dispatch(postDataJobAPI(payload, dispatch));

      // Kiểm tra xem có ảnh nào đã bị xóa không
      if (imagesDeleted.some((deleted) => deleted)) {
        toast.error("Vui lòng tải lại ảnh!");
        return;
      }

      toast.success("Đã đăng bài thành công!");
      reset(); // Reset form sau khi đăng bài thành công
      setResetTrigger(true); // Kích hoạt reset cho ảnh
    } catch (error) {
      toast.error("Đăng bài thất bại!");
      console.error("Add error:", error);
    }
  };

  useEffect(() => {
    if (resetTrigger) {
      setResetTrigger(false); // Reset the trigger after handling it
    }
  }, [resetTrigger]);

  useEffect(() => {
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message);
    }
  }, [errors]);
  console.log("🚀 ~ useEffect ~ arrErrors:", Object.values(errors));

  return (
    <div className="py-20 px-[72px]">
      <div className="bg-white py-4 shadow-md px-11 rounded-xl">
        <div className="mb-5 py-10">
          <div>
            <h1 className="text-[40px] font-semibold capitalize">
              Đăng bài ứng tuyển
            </h1>
          </div>
        </div>
        <form onSubmit={handleSubmit(handlePost)}>
          <div className="mb-5 lg:mb-10">
            <Field>
              <Label htmlFor="title">Tiêu đề ứng tuyển</Label>
              <Input
                name="title"
                placeholder="Nhập tiêu đề"
                control={control}
              />
            </Field>
          </div>
          <div className="form-layout-col4">
            <div className="col-span-1">
              <Field>
                <Label htmlFor="startDate">Ngày bắt đầu</Label>
                <Input
                  type="date"
                  dateFormat="YYYY-MM-DDTHH:mm:ss.ssssss"
                  name="startDate"
                  placeholder="Nhập ngày bắt đầu"
                  control={control}
                />
              </Field>
            </div>
            <div className="col-span-1">
              <Field>
                <Label htmlFor="endDate">Ngày kết thúc</Label>
                <Input
                  type="date"
                  dateFormat="YYYY-MM-DDTHH:mm:ss.ssssss"
                  name="endDate"
                  placeholder="Nhập ngày kết thúc"
                  control={control}
                />
              </Field>
            </div>
            <div className="col-span-2">
              <Field>
                <Label htmlFor="duration">Khoảng thời gian</Label>
                <Input
                  type="number"
                  name="duration"
                  min={0}
                  placeholder="Nhập khoảng thời gian"
                  control={control}
                />
              </Field>
            </div>
          </div>
          <div className="form-layout">
            <Field>
              <Label htmlFor="phone">Số điện thoại</Label>
              <Input
                type="tel"
                name="phone"
                placeholder="Nhập số điện thoại"
                control={control}
              />
            </Field>
            <Field>
              <Label>Loại công việc</Label>
              <Dropdown>
                <DropdownSelect
                  value={`${selectedJobType?.name || "Loại công việc"}`}
                ></DropdownSelect>
                <DropdownList>
                  {(Array.isArray(objJobType) ? objJobType : []).map(
                    (item: JobType) => (
                      <DropdownOption
                        name="jobTypeId"
                        key={item.id}
                        onClick={() => handleClickOption(item)}
                      >
                        {item.name}
                      </DropdownOption>
                    )
                  )}
                </DropdownList>
              </Dropdown>
            </Field>
          </div>
          <div className="form-layout-col4">
            <div className="col-span-2">
              <Field>
                <Label htmlFor="address">Địa chỉ</Label>
                <Input
                  name="address"
                  placeholder="Nhập địa chỉ, tên đường"
                  control={control}
                />
              </Field>
            </div>
            <div className="col-span-1">
              <Field>
                <Label>Tỉnh / Thành phố</Label>
                <Dropdown>
                  <DropdownSelect
                    value={`${selectedProvince?.name || "Tỉnh / Thành phố"}`}
                  ></DropdownSelect>
                  <DropdownList>
                    {(Array.isArray(provinces) ? provinces : []).map(
                      (item: Province) => (
                        <DropdownOption
                          name="provinceId"
                          key={item.id}
                          onClick={() => handleSelectedProvince(item)}
                        >
                          {item.name}
                        </DropdownOption>
                      )
                    )}
                  </DropdownList>
                </Dropdown>
              </Field>
            </div>
            <div className="col-span-1">
              <Field>
                <Label>Quận / Huyện</Label>
                <Dropdown>
                  <DropdownSelect
                    value={`${selectedDistrict?.name || "Quận / Huyện"}`}
                  ></DropdownSelect>
                  <DropdownList>
                    {(Array.isArray(districts) ? districts : []).map(
                      (item: District) => (
                        <DropdownOption
                          name="districtId"
                          key={item.id}
                          onClick={() => handleSelectedDistrict(item)}
                        >
                          {item.name}
                        </DropdownOption>
                      )
                    )}
                  </DropdownList>
                </Dropdown>
              </Field>
            </div>
          </div>
          <div className="mt-24">
            <Label htmlFor="">Tải ảnh về công việc và nơi làm việc</Label>
            <div className="border border-solid border-[#D5D5D5] rounded-3xl p-4 mt-10 mb-20">
              <div className="grid grid-cols-2 gap-6">
                {Array.from({ length: 4 }, (_, index) => (
                  <ImageUploadProps
                    key={`imageJobDetails${index + 1}`}
                    name={`imageJobDetails${index + 1}`}
                    onFileSelect={(file: File | null) => {
                      if (file) {
                        setValue(`imageJobDetails.${index + 1}`, { file }); // Lưu tệp tin vào state
                        setImagesDeleted((prev) => {
                          prev[index] = false;
                          return prev;
                        });
                      } else {
                        console.error("Không có tệp nào được chọn");
                      }
                    }}
                    resetTrigger={resetTrigger}
                    onRemove={() => handleImageRemove(index)} // Gọi hàm xóa ảnh
                  />
                ))}
              </div>
            </div>
          </div>
          <div>
            <Field>
              <Label htmlFor="description">Mô tả</Label>
              <Textarea
                name="description"
                control={control}
                placeholder="Mô tả ..."
              ></Textarea>
            </Field>
          </div>
          <Button type="submit" title="Đăng Bài" className="w-full mt-10" />
        </form>
      </div>
    </div>
  );
}
