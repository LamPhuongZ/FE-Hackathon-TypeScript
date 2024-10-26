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
  images: Image[];
  description: string;
  postedDate: Date;
  verified: boolean;
}

export interface PostJobType {
  title: string;
  address: string;
  phone: string;
  districtId: number;
  provinceId: number;
  startDate: string;
  endDate: string;
  duration: number;
  description: string;
  jobTypeId: number;
  imageJobDetails: Image[];
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
}

const initialState: JobState = {
  objJob: null,
  objJobDetails: null,
  objPostJob: null,
  isLoading: false,
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
    setLoading: (state: JobState, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { getJobsAction, getJobDetails, postJobsAction, setLoading } =
  jobReducer.actions;

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

export const postDataJobAPI = (payload: PostJobType, dispatch: DispatchType) => {
  return async () => {
    dispatch(setLoading(true));

    try {
      const formData = new FormData();

      // Duyệt qua các trường trong payload
      for (const key in payload) {
        const value = payload[key as keyof PostJobType];

        if (Array.isArray(value)) {
          value.forEach((img: any, index) => {
            formData.append(`imageJobDetails[${index}].url`, img.url);
            formData.append(`imageJobDetails[${index}].cloudinaryPuclicUrl`, img.cloudinaryPuclicUrl);
            formData.append(`imageJobDetails[${index}].typeOfImg`, img.typeOfImg);
            if (img.file) {
              formData.append(`imageJobDetails[${index}].file`, img.file); // Gửi file lên server
            }
          });
        } else if (typeof value === "number") {
          formData.append(key, value.toString());
        } else if (value instanceof File) {
          formData.append(key, value);
        } else if (typeof value === "string") {
          formData.append(key, value);
        }
      }

      const response = await httpClient.post("/api/v1/job", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const action: PayloadAction<PostJobType> = postJobsAction(response.data);
      dispatch(action);
    } catch (error) {
      console.error("Lỗi khi post dữ liệu:", error);
    } finally {
      dispatch(setLoading(false));
    }
  };
};


