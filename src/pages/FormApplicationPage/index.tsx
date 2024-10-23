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
      titlePost: "",
      phone: "",
      address: "",
      jobType: "",
      description: "",
      pic1: undefined,
      pic2: undefined,
      pic3: undefined,
      pic4: undefined,
    },
  });
  const [resetTrigger, setResetTrigger] = useState(false); // Reset trigger state

  const { objJobType } = useSelector((state: RootState) => state.typeReducer);
  const dispatch: DispatchType = useDispatch();

  const [selectedJobType, setSelectedJobType] = useState<JobType>();

  const handleClickOption = async (item: JobType) => {
    setSelectedJobType(item);
    setValue("jobType", item.name);
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

  const handlePost = async () => {
    try {
      // Kiểm tra xem có ảnh nào đã bị xóa không
      if (imagesDeleted.some((deleted) => deleted)) {
        toast.error("Vui lòng tải lại ảnh!");
        return;
      }
      toast.success("Đã đăng bài thành công!");
      reset({
        titlePost: "",
        phone: "",
        address: "",
        jobType: "",
        description: "",
        pic1: undefined,
        pic2: undefined,
        pic3: undefined,
        pic4: undefined,
      });
      setResetTrigger(true); // Trigger reset on image components
      setSelectedJobType(undefined);
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
            <h1 className="text-[40px] font-semibold capitalize">Đăng bài ứng tuyển</h1>
          </div>
        </div>
        <form onSubmit={handleSubmit(handlePost)}>
          <div className="mb-5 lg:mb-10">
            <Field>
              <Label htmlFor="titlePost">Tiêu đề ứng tuyển</Label>
              <Input
                name="titlePost"
                placeholder="Nhập tiêu đề"
                control={control}
              ></Input>
            </Field>
          </div>
          <div className="form-layout">
            <Field>
              <Label htmlFor="phone">Số điện thoại</Label>
              <Input
                name="phone"
                placeholder="Nhập số điện thoại"
                control={control}
              ></Input>
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
                        name="jobType"
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
                ></Input>
              </Field>
            </div>
            <div className="col-span-1">
              <Field>
                <Label htmlFor="district">Quận / Huyện</Label>
                <Input
                  name="district"
                  placeholder="Nhập quận, huyện"
                  control={control}
                ></Input>
              </Field>
            </div>
            <div className="col-span-1">
              <Field>
                <Label htmlFor="province">Tỉnh / Thành Phố</Label>
                <Input
                  name="province"
                  placeholder="Nhập tỉnh, thành phố"
                  control={control}
                ></Input>
              </Field>
            </div>
          </div>
          <div className="mt-24">
            <Label htmlFor="">Tải ảnh về công việc và nơi làm việc</Label>
            <div className="border border-solid border-[#D5D5D5] rounded-3xl p-4 mt-10 mb-20">
              <div className="grid grid-cols-2 gap-6">
                <ImageUploadProps
                  name="pic1"
                  onFileSelect={(file: File | null) => {
                    if (file) {
                      setValue("pic1", file);
                      setImagesDeleted((prev) => {
                        prev[0] = false;
                        return prev;
                      }); // Đánh dấu ảnh chưa bị xóa
                    }
                  }}
                  resetTrigger={resetTrigger}
                  onRemove={() => handleImageRemove(0)} // Gọi hàm xóa ảnh
                />
                <ImageUploadProps
                  name="pic2"
                  onFileSelect={(file: File | null) => {
                    if (file) {
                      setValue("pic2", file);
                      setImagesDeleted((prev) => {
                        prev[1] = false;
                        return prev;
                      }); // Đánh dấu ảnh chưa bị xóa
                    }
                  }}
                  resetTrigger={resetTrigger}
                  onRemove={() => handleImageRemove(1)} // Gọi hàm xóa ảnh
                />
                <ImageUploadProps
                  name="pic3"
                  onFileSelect={(file: File | null) => {
                    if (file) {
                      setValue("pic3", file);
                      setImagesDeleted((prev) => {
                        prev[2] = false;
                        return prev;
                      }); // Đánh dấu ảnh chưa bị xóa
                    }
                  }}
                  resetTrigger={resetTrigger}
                  onRemove={() => handleImageRemove(2)} // Gọi hàm xóa ảnh
                />
                <ImageUploadProps
                  name="pic4"
                  onFileSelect={(file: File | null) => {
                    if (file) {
                      setValue("pic4", file);
                      setImagesDeleted((prev) => {
                        prev[3] = false;
                        return prev;
                      }); // Đánh dấu ảnh chưa bị xóa
                    }
                  }}
                  resetTrigger={resetTrigger}
                  onRemove={() => handleImageRemove(3)} // Gọi hàm xóa ảnh
                />
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
