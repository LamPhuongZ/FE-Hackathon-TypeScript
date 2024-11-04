import { useSelector } from "react-redux";
import { RootState } from "../redux/configStore";

const useLoading = () => {
  const { isLoading: jobLoading } = useSelector(
    (state: RootState) => state.jobReducer
  );

  const { isLoading: jobSkillLoading } = useSelector(
    (state: RootState) => state.jobSkillReducer
  );

  const { isLoading: typeLoading } = useSelector(
    (state: RootState) => state.typeReducer
  );

  const { isLoading: userLoading } = useSelector(
    (state: RootState) => state.userReducer
  );

  const isLoading = jobLoading || jobSkillLoading || typeLoading || userLoading;

  return isLoading;
};

export default useLoading;
