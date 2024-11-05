import { SearchOutlined } from "@ant-design/icons";
import banner1 from "../../../../assets/images/banner1.png";
import banner2 from "../../../../assets/images/banner2.png";
import Button from "../../../../components/button/Button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../../../redux/configStore";
import { Province, useAddress } from "../../../../hooks/useAddress";
import { useNavigate } from "react-router-dom";
import useLoading from "../../../../hooks/useLoading";
import LoadingData from "../../../../components/loading-data/loadingData";
import {
  setSearchInputProvince,
  setSearchInputType,
  setSearchInputTitle,
} from "../../../../redux/reducers/jobReducer";
import { getJobTypeAPI, JobType } from "../../../../redux/reducers/typeReducer";

export default function Banner() {
  const { provinces } = useAddress();
  const showLoading = useLoading();

  const { objJobType } = useSelector(
    (state: RootState) => state.typeReducer
  );
  const dispatch: DispatchType = useDispatch();
  const navigate = useNavigate();

  const [searchInput, setSearchInput] = useState("");
  const [searchProvince, setSearchProvince] = useState(0);

  const getDataJobTypeList = async () => {
    const actionAPI = getJobTypeAPI();
    dispatch(actionAPI);
  };

  useEffect(() => {
    getDataJobTypeList();
  }, []);

  const handleSkillClick = (jobTypeId: number, jobTypeName: string) => {

    if (objJobType && objJobType.id) {
      dispatch(setSearchInputType(objJobType.id));
    }
    const params = new URLSearchParams();
    params.append("jobTypeId", jobTypeId.toString()); // Chuyển skillId thành chuỗi

    navigate(`/search?${params.toString()}&&jobTypeName=${jobTypeName}`);
  };

  const handleSearchClick = () => {
    dispatch(setSearchInputTitle(searchInput || ""));
    dispatch(setSearchInputProvince(searchProvince));
    const params = new URLSearchParams();

    if (searchInput) {
      params.append("query", searchInput);
    } else {
      params.delete("query");
    }

    if (searchProvince !== 0) {
      dispatch(setSearchInputProvince(searchProvince));
      params.append("provinceId", searchProvince.toString());
    } else {
      dispatch(setSearchInputProvince(searchProvince));
      params.delete("provinceId"); // Sửa lỗi chính tả '+provinceId'
    }

    navigate(`/search${params.toString() ? `?${params.toString()}` : ""}`);
  };

  if (!Array.isArray(objJobType) || objJobType.length === 0) {
    return <div className="banner">{showLoading && <LoadingData />}</div>;
  }

  return (
    <div className="banner">
      <div className="banner__top !hidden  md:!flex md:!items-center">
        <div className="banner__left ">
          <img src={banner1} alt="img-banner" className="w-full h-full " />
        </div>
        <div className="banner__content cssanimation typing ">
          <h1 className="text xl:!text-[50px] md:!text-[20px] ">Kết nối việc làm, Cơ hội mới, cuộc sống mới</h1>
        </div>
        <div className="banner__right  ">
          <img src={banner2} alt="img-banner" className="text-right w-full h-full mb-2 " />
        </div>
      </div>

      <div className="banner__group xl:!w-full !p-0">
        <div className="banner__search w-full">
          <SearchOutlined
            className="icon__search"
            style={{ fontSize: "24px" }}
          />
          <input
            type="text"
            placeholder="Tìm kiếm"
            className="input__search !w-[50%] "
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <div className="line"></div>
          <select
            className="select__area bg-[transparent] w-[20%] !text-xs md:w-[30%] md:!text-lg"
            onChange={(e) => {
              setSearchProvince(~~e.target.value);
              console.log(e.target.value);
            }}
          >
            <option  value="0">
              Tất cả địa điểm
              
            </option>
            {provinces?.map((province: Province, index: number) => (
              <option value={province.id} key={`${province.id}_${index}`}>
                {province.name}
              </option>
            ))}
          </select>
          <Button
            title="Tìm kiếm"
            className="btn__search !w-[20%]"
            circle={false}
            onClick={handleSearchClick}
          />
        </div>

        <div className="popular__keywords">
          <div className="popular__keywords__group">
            <span className="title">Từ khóa phổ biến:</span>
            <div className="skills">
              {Array.isArray(objJobType) && objJobType.length > 0 ? (
                objJobType
                  .slice(0, 10)
                  .map((keyword: JobType, index: number) => (
                    
                    <Button
                      key={index}
                      title={<a href="#searchItems">
                          {keyword.name}
                        </a> }
                      className="btn__jobSkill"
                      circle={false}
                      color="custom"
                      onClick={() => handleSkillClick(keyword.id, keyword.name)}
                    />
                  ))
              ) : (
                <p>Không có từ khóa phổ biến</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
