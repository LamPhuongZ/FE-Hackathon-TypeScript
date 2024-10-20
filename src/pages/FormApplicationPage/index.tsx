import { useForm } from "react-hook-form";
import Field from "../../components/field/Field";
import Input from "../../components/input/Input";
import Label from "../../components/label/Label";
import ImageUploadProps from "../../components/image-upload/ImageUpload";
import Textarea from "../../components/textarea/Textarea";
import Button from "../../components/button/Button";
import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { ProfileSchema } from "../../utils/validation";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../redux/configStore";
import { getJobTypeAPI } from "../../redux/reducers/typeReducer";

export default function FormApplication() {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    // resolver: yupResolver(ProfileSchema),
  });

  const { objJobType } = useSelector((state: RootState) => state.typeReducer);
  console.log("🚀 ~ FormApplication ~ objJobType:", objJobType)
  const dispatch: DispatchType = useDispatch();

  const getDataJobTypeList = async () => {
    const actionAPI = getJobTypeAPI();
    dispatch(actionAPI);
  };

  useEffect(() => {
    getDataJobTypeList();
  }, []);

  const handlePost = async (values) => {
    try {
      console.log("Values:", values);
      toast.success("Đã đăng bài thành công!");
    } catch (error) {
      toast.error("Đăng bài thất bại!");
      console.error("Add error:", error);
    }
  };

  //   useEffect(() => {
  //     const arrErrors = Object.values(errors);
  //     if (arrErrors.length > 0) {
  //       toast.error(arrErrors[0]?.message);
  //     }
  //   }, [errors]);
  //   console.log("🚀 ~ useEffect ~ arrErrors:", Object.values(errors));

  return (
    <div className="py-20 px-[72px]">
      <form onSubmit={handleSubmit(handlePost)}>
        <div className="bg-white py-14 shadow-md px-11 rounded-xl">
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
              <Label htmlFor="typeJob">Loại công việc</Label>
              <Input name="typeJob" control={control}></Input>
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
                    }
                  }}
                />
                <ImageUploadProps
                  name="pic2"
                  onFileSelect={(file: File | null) => {
                    if (file) {
                      setValue("pic2", file);
                    }
                  }}
                />
                <ImageUploadProps
                  name="pic3"
                  onFileSelect={(file: File | null) => {
                    if (file) {
                      setValue("pic3", file);
                    }
                  }}
                />
                <ImageUploadProps
                  name="pic4"
                  onFileSelect={(file: File | null) => {
                    if (file) {
                      setValue("pic4", file);
                    }
                  }}
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
        </div>
      </form>
    </div>
  );
}
