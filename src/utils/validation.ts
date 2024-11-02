import * as yup from "yup";

export const ProfileSchema = yup.object({
  fullname: yup.string().required("Vui lòng nhập họ tên đầy đủ"),
  email: yup
    .string()
    .email("Vui lòng nhập đúng email")
    .required("Vui lòng nhập email đầy đủ"),
  dob: yup.string().required("Vui lòng nhập ngày sinh"),
  phone: yup.string().required("Vui lòng nhập số điện thoại"),
  createdDate: yup.string().required("Vui lòng kiểm tra lại ngày tham gia"),
  provinceId: yup.number().required("Vui lòng chọn tỉnh / thành phố"),
  districtId: yup.number().required("Vui lòng chọn quận / huyện"),
  address: yup.string().required("Vui lòng nhập địa chỉ"),
  jobSkills: yup.array().min(1, "Vui lòng chọn ít nhất một kỹ năng").nullable(),

  oldPassword: yup.string().nullable(),
  newPassword: yup.string().nullable(),

  avatar: yup.mixed().nullable().required("Vui lòng tải ảnh khuôn mặt của bạn"),

  imgFrontOfCard: yup
    .mixed()
    .nullable()
    .required("Vui lòng tải CCCD/CMND mặt trước"),

  imgBackOfCard: yup
    .mixed()
    .nullable()
    .required("Vui lòng tải CCCD/CMND mặt sau"),
});

export const JobProfileSchema = yup.object({
  title: yup.string().required("Vui lòng nhập tiêu đề ứng tuyển"),
  phone: yup.string().required("Vui lòng nhập số điện thoại"),
  jobTypeId: yup.number().required("Vui lòng chọn loại công việc"),
  address: yup.string().required("Vui lòng nhập địa chỉ"),
  districtId: yup.number().required("Vui lòng nhập quận, huyện"),
  provinceId: yup.number().required("Vui lòng nhập tỉnh, thành phố"),
  startDate: yup.string().required("Vui lòng nhập ngày bắt đầu"),
  endDate: yup.string().required("Vui lòng nhập ngày kết thúc"),
  duration: yup.number().required("Vui lòng nhập khoảng thời gian"),

  // Validation cho danh sách ảnh
  imageJobDetails: yup
    .array()
    .of(
      yup.object({
        file: yup
          .mixed()
          .nullable()
          .required("Vui lòng tải lên ảnh") // Bắt buộc phải có file
          .test("fileType", "Định dạng ảnh không được hỗ trợ", (value) => {
            if (!value) return false; // Kiểm tra nếu không có giá trị
            return (
              value instanceof File &&
              ["image/jpeg", "image/png", "image/jpg"].includes(value.type)
            );
          })
          .test("fileSize", "Kích thước ảnh quá lớn (tối đa 2MB)", (value) => {
            if (!value) return false; // Kiểm tra nếu không có giá trị
            return value instanceof File && value.size <= 2 * 1024 * 1024;
          }),
      })
    )
    .min(1, "Vui lòng tải ít nhất một ảnh") // Phải có ít nhất 1 ảnh được tải lên
    .required("Vui lòng tải lên ít nhất một ảnh"),

  // pic1: yup
  //   .mixed()
  //   .nullable()
  //   .required("Vui lòng tải ảnh về công việc và nơi làm việc của bạn"),
  // .test("fileSize", "Kích thước tệp quá lớn", (value) => {
  //   return value instanceof File ? value.size <= 2000000 : false;
  // })
  // .test("fileType", "Định dạng tệp không được hỗ trợ", (value) => {
  //   return value instanceof File
  //     ? ["image/jpeg", "image/png", "image/jpg"].includes(value.type)
  //     : false;
  // }),
  // pic2: yup
  //   .mixed()
  //   .nullable()
  //   .required("Vui lòng tải ảnh về công việc và nơi làm việc của bạn")
  //   .test("fileSize", "Kích thước tệp quá lớn", (value) => {
  //     return value instanceof File ? value.size <= 2000000 : false;
  //   })
  //   .test("fileType", "Định dạng tệp không được hỗ trợ", (value) => {
  //     return value instanceof File
  //       ? ["image/jpeg", "image/png", "image/jpg"].includes(value.type)
  //       : false;
  //   }),
  // pic3: yup
  //   .mixed()
  //   .nullable()
  //   .required("Vui lòng tải ảnh về công việc và nơi làm việc của bạn")
  //   .test("fileSize", "Kích thước tệp quá lớn", (value) => {
  //     return value instanceof File ? value.size <= 2000000 : false;
  //   })
  //   .test("fileType", "Định dạng tệp không được hỗ trợ", (value) => {
  //     return value instanceof File
  //       ? ["image/jpeg", "image/png", "image/jpg"].includes(value.type)
  //       : false;
  //   }),
  // pic4: yup
  //   .mixed()
  //   .nullable()
  //   .required("Vui lòng tải ảnh về công việc và nơi làm việc của bạn")
  //   .test("fileSize", "Kích thước tệp quá lớn", (value) => {
  //     return value instanceof File ? value.size <= 2000000 : false;
  //   })
  //   .test("fileType", "Định dạng tệp không được hỗ trợ", (value) => {
  //     return value instanceof File
  //       ? ["image/jpeg", "image/png", "image/jpg"].includes(value.type)
  //       : false;
  //   }),
  description: yup.string().required("Vui lòng nhập mô tả công việc"),
});
