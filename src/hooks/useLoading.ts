import { useSelector } from "react-redux";
import { RootState } from "../redux/configStore";

const useLoading = () => {
  const { isLoading: jobLoading } = useSelector(
    (state: RootState) => state.jobReducer
  );

  return jobLoading;
};

export default useLoading;
