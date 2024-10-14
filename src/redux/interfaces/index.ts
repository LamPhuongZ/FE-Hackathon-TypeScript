export interface LoginTypes {
  username: string;
  password: string;
}

export interface User {
  fullname: string;
  age: string;
  avatar: string;
  isVerified: boolean;
  numOfJob: number;
  star: string;
  createdDate: Date;
  address: string;
  provinceId: string;
  districtId: string;
  jobSkills: JobSkill[];
}

export interface JobSkill {
  id: number;
  skill: string;
  description: string;
}

export interface InitialState {
  user: User | null;
  isLoading: boolean;
  isError: boolean;
}
