import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DispatchType } from "../configStore";
import { httpClient } from "../../utils/config";

export interface Job {
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  content: Content[];
  first: boolean;
  last: boolean;
  numberOfElements: number;
  empty: boolean;
}

export interface Content {
  jobId: number;
  title: string;
  address: string;
  phone: string;
  contactPerson: string;
  startDate: Date;
  endDate: Date;
  duration: number;
  jobType: JobType;
  images: Image[] | null | undefined | "";
  description: string;
  postedDate: Date;
  verified: boolean;
  jobApprovalStatus: string;
}

export interface PostJobType {
  title: string;
  address: string;
  phone: string;
  districtId: number;
  provinceId: number;
  startDate: string | null;
  endDate: string | null;
  duration: number;
  description: string;
  jobTypeId: number;
  // pic1: any;
  imageJobDetails: [] | any;
}

export interface Image {
  url: string;
  cloudiaryPuclicUrl: string;
  typeOfImg: string;
}

export interface JobType {
  id: number;
  name: string;
  description: string;
  minPrice: number;
  maxPrice: number;
}

export interface JobState {
  objJob: Job | null;
  objJobDetails: Content | null;
  objPostJob: PostJobType | null;
  isLoading: boolean;
  objJobType: Job | null;
  objJobManager: Job | null;
}

const initialState: JobState = {
  objJob: null,
  objJobDetails: null,
  objPostJob: null,
  isLoading: false,
  objJobType: null,
  objJobManager: null,
};

const jobReducer = createSlice({
  name: "jobReducer",
  initialState,
  reducers: {
    getJobsAction: (state: JobState, action: PayloadAction<Job>) => {
      state.objJob = action.payload;
      state.isLoading = false;
    },
    getJobDetails: (state: JobState, action: PayloadAction<Content>) => {
      state.objJobDetails = action.payload;
      state.isLoading = false;
    },
    postJobsAction: (state: JobState, action: PayloadAction<PostJobType>) => {
      state.objPostJob = action.payload;
      state.isLoading = false;
    },
    postApplyAction: (state: JobState, action: PayloadAction<Job>) => {
      state.objJob = action.payload;
      state.isLoading = false;
    },
    setLoading: (state: JobState, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    getJobTypeId: (state: JobState, action: PayloadAction<Job>) => {
      state.objJobType = action.payload;
      state.isLoading = false;
    },
    getJobsManager: (state: JobState, action: PayloadAction<Job>) => {
      state.objJobManager = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  getJobsAction,
  getJobDetails,
  postJobsAction,
  getJobTypeId,
  getJobsManager,
  postApplyAction,
  setLoading,
} = jobReducer.actions;

export default jobReducer.reducer;

export const getDataJobAPI = (page: number, size: number) => {
  return async (dispatch: DispatchType) => {
    dispatch(setLoading(true));

    try {
      const res = await httpClient.get(
        `/api/v1/job?page=${page}&size=${size}&direction=desc`
      );
      const action: PayloadAction<Job> = getJobsAction(res.data.data);
      dispatch(action);
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const getDataJobDetailAPI = (id: number) => {
  return async (dispatch: DispatchType) => {
    dispatch(setLoading(true));

    try {
      const res = await httpClient.get(`/api/v1/job/${id}`);
      const action: PayloadAction<Content> = getJobDetails(res.data.data);
      dispatch(action);
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const getSearchDataJobAPI = (
  page: number,
  size: number,
  jobTypeId: number
) => {
  return async (dispatch: DispatchType) => {
    dispatch(setLoading(true));

    try {
      const res = await httpClient.get(
        `/api/v1/job?jobTypeId=${jobTypeId}&page=${page}&size=${size}&direction=desc`
      );
      const action: PayloadAction<Job> = getJobsAction(res.data.data);
      dispatch(action);
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const postDataJobAPI = (payload: PostJobType) => {
  return async (dispatch: DispatchType) => {
    dispatch(setLoading(true));

    try {
      const formData = new FormData();

      // Duyệt qua tất cả các thuộc tính của payload
      for (const key in payload) {
        const value = payload[key as keyof PostJobType];

        if (key === "imageJobDetails" && Array.isArray(value)) {
          // Xử lý trường hợp là mảng các file
          value.forEach((img: any) => {
            if (img.file instanceof File) {
              formData.append(`imageJobDetails`, img.file); // Thêm tệp tin vào FormData
            }
          });
        } else if (typeof value === "number") {
          formData.append(key, value.toString()); // Chuyển số thành chuỗi
        } else if (value instanceof File) {
          formData.append(key, value); // Thêm tệp trực tiếp
        } else if (typeof value === "string") {
          formData.append(key, value); // Thêm chuỗi vào FormData
        }
      }

      // Gửi request với FormData
      const response = await httpClient.post("/api/v1/job", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Response:", response);

      const action: PayloadAction<PostJobType> = postJobsAction(response.data);
      dispatch(action);
    } catch (error) {
      console.error("Lỗi khi post dữ liệu:", error);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const getDataJobTypeAPI = (id: number) => {
  return async (dispatch: DispatchType) => {
    dispatch(setLoading(true));

    try {
      const res = await httpClient.get(`api/v1/job?jobTypeId=${id}`);
      const action: PayloadAction<Job> = getJobTypeId(res.data.data);
      dispatch(action);
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const getDataJobManagerAPI = (
  page: number,
  size: number,
  status: string
) => {
  return async (dispatch: DispatchType) => {
    dispatch(setLoading(true));

    try {
      const res = await httpClient.get(
        `/api/v1/job/job-my-self?page=${page}&size=${size}&sort=id&jobApprovalStatusEnum=${status}`
      );
      const action: PayloadAction<Job> = getJobsManager(res.data.data);
      dispatch(action);
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const applyForJobAPI = (jobId: number) => {
  return async (dispatch: DispatchType) => {
    dispatch(setLoading(true));

    try {
      const response = await httpClient.post(
        `https://api.easyjob.io.vn/api/v1/apply-job/${jobId}`
      );
      const action: PayloadAction<Job> = postApplyAction(response.data.data);
      dispatch(action);
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
};
