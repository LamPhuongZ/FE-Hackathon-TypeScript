import * as yup from "yup";

export const ProfileSchema = yup.object({
  fullName: yup.string().required("Vui lòng nhập họ tên đầy đủ"),
  email: yup
    .string()
    .email("Vui lòng nhập đúng email")
    .required("Vui lòng nhập email đầy đủ"),
  date: yup.date().required("Vui lòng nhập ngày sinh"),
  phone: yup.string().required("Vui lòng nhập số điện thoại"),
  // join: yup.string().required("Vui lòng kiểm tra lại ngày tham gia"),
  address: yup.string().required("Vui lòng nhập địa chỉ"),

  avatar: yup
    .mixed()
    .required("Vui lòng tải ảnh khuôn mặt của bạn")
    .test("fileSize", "Kích thước tệp quá lớn", (value) => {
      return value instanceof File ? value.size <= 2000000 : false;
    })
    .test("fileType", "Định dạng tệp không được hỗ trợ", (value) => {
      return value instanceof File
        ? ["image/jpeg", "image/png", "image/jpg"].includes(value.type)
        : false;
    }),

  frontCard: yup
    .mixed()
    .required("Vui lòng tải CCCD/CMND mặt trước")
    .test("fileSize", "Kích thước tệp quá lớn", (value) => {
      return value instanceof File ? value.size <= 2000000 : false;
    })
    .test("fileType", "Định dạng tệp không được hỗ trợ", (value) => {
      return value instanceof File
        ? ["image/jpeg", "image/png", "image/jpg"].includes(value.type)
        : false;
    }),

  backCard: yup
    .mixed()
    .required("Vui lòng tải CCCD/CMND mặt sau")
    .test("fileSize", "Kích thước tệp quá lớn", (value) => {
      return value instanceof File ? value.size <= 2000000 : false;
    })
    .test("fileType", "Định dạng tệp không được hỗ trợ", (value) => {
      return value instanceof File
        ? ["image/jpeg", "image/png", "image/jpg"].includes(value.type)
        : false;
    }),
});

export const JobProfileSchema = yup.object({
  titlePost: yup.string().required("Vui lòng nhập tiêu đề ứng tuyển"),
  phone: yup.string().required("Vui lòng nhập số điện thoại"),
  jobType: yup.string().required("Vui lòng chọn loại công việc"),
  address: yup.string().required("Vui lòng nhập địa chỉ"),
  district: yup.string().required("Vui lòng nhập quận, huyện"),
  province: yup.string().required("Vui lòng nhập tỉnh, thành phố"),

  pic1: yup
    .mixed()
    .nullable()
    .required("Vui lòng tải ảnh về công việc và nơi làm việc của bạn")
    .test("fileSize", "Kích thước tệp quá lớn", (value) => {
      return value instanceof File ? value.size <= 2000000 : false;
    })
    .test("fileType", "Định dạng tệp không được hỗ trợ", (value) => {
      return value instanceof File
        ? ["image/jpeg", "image/png", "image/jpg"].includes(value.type)
        : false;
    }),
  pic2: yup
    .mixed()
    .nullable()
    .required("Vui lòng tải ảnh về công việc và nơi làm việc của bạn")
    .test("fileSize", "Kích thước tệp quá lớn", (value) => {
      return value instanceof File ? value.size <= 2000000 : false;
    })
    .test("fileType", "Định dạng tệp không được hỗ trợ", (value) => {
      return value instanceof File
        ? ["image/jpeg", "image/png", "image/jpg"].includes(value.type)
        : false;
    }),
  pic3: yup
    .mixed()
    .nullable()
    .required("Vui lòng tải ảnh về công việc và nơi làm việc của bạn")
    .test("fileSize", "Kích thước tệp quá lớn", (value) => {
      return value instanceof File ? value.size <= 2000000 : false;
    })
    .test("fileType", "Định dạng tệp không được hỗ trợ", (value) => {
      return value instanceof File
        ? ["image/jpeg", "image/png", "image/jpg"].includes(value.type)
        : false;
    }),
  pic4: yup
    .mixed()
    .nullable()
    .required("Vui lòng tải ảnh về công việc và nơi làm việc của bạn")
    .test("fileSize", "Kích thước tệp quá lớn", (value) => {
      return value instanceof File ? value.size <= 2000000 : false;
    })
    .test("fileType", "Định dạng tệp không được hỗ trợ", (value) => {
      return value instanceof File
        ? ["image/jpeg", "image/png", "image/jpg"].includes(value.type)
        : false;
    }),
  description: yup.string().required("Vui lòng nhập mô tả công việc"),
});
