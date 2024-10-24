import { SearchOutlined } from "@ant-design/icons";
import banner1 from "../../../../assets/images/banner1.png";
import banner2 from "../../../../assets/images/banner2.png";
import Button from "../../../../components/button/Button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../../../redux/configStore";
import {
  getDataJobSkillAPI,
  JobSkill,
} from "../../../../redux/reducers/jobSkillReducer";
import { Province, useAddress } from "../../../../hooks/useAddress";
import { useNavigate } from "react-router-dom";
import useLoading from "../../../../hooks/useLoading";
import LoadingData from "../../../../components/loading-data/loadingData";

export default function Banner() {
  const { provinces } = useAddress();
  const showLoading = useLoading();

  const { objJobSkill } = useSelector(
    (state: RootState) => state.jobSkillReducer
  );
  const dispatch: DispatchType = useDispatch();
  const navigate = useNavigate();

  const [searchInput, setSearchInput] = useState("");

  const getDataJobSkillList = async () => {
    const actionAPI = getDataJobSkillAPI();
    dispatch(actionAPI);
  };

  useEffect(() => {
    getDataJobSkillList();
  }, []);

  const handleSkillClick = (skill: string) => {
    setSearchInput(skill);
  };

  const handleSearchClick = () => {
    if (searchInput) {
      navigate(`/search?query=${encodeURIComponent(searchInput)}`);
    }
  };

  if (!Array.isArray(objJobSkill) || objJobSkill.length === 0) {
    return <div className="banner">{showLoading && <LoadingData />}</div>;
  }

  return (
    <div className="banner">
      <div className="banner__top">
        <div className="banner__left">
          <img src={banner1} alt="img-banner" className="w-full h-full" />
        </div>
        <div className="banner__content cssanimation typing">
          <h1 className="text">Kết nối việc làm, Cơ hội mới, cuộc sống mới</h1>
        </div>
        <div className="banner__right">
          <img src={banner2} alt="img-banner" className="w-full h-full mb-2" />
        </div>
      </div>

      <div className="banner__group">
        <div className="banner__search">
          <SearchOutlined
            className="icon__search"
            style={{ fontSize: "24px" }}
          />
          <input
            type="text"
            placeholder="Tìm kiếm"
            className="input__search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <div className="line"></div>
          <select className="select__area">
            <option value="all">Tất cả địa điểm</option>
            {provinces?.map((province: Province, index: number) => (
              <option key={`${province.id}_${index}`}>{province.name}</option>
            ))}
          </select>
          <Button
            title="Tìm kiếm"
            className="btn__search"
            circle={false}
            onClick={handleSearchClick}
          />
        </div>

        <div className="popular__keywords">
          <div className="popular__keywords__group">
            <span className="title">Từ khóa phổ biến:</span>
            <div className="skills">
              {Array.isArray(objJobSkill) && objJobSkill.length > 0 ? (
                objJobSkill
                  .slice(0, 10)
                  .map((keyword: JobSkill, index: number) => (
                    <Button
                      key={index}
                      title={keyword.skill}
                      className="btn__jobSkill"
                      circle={false}
                      color="custom"
                      onClick={() => handleSkillClick(keyword.skill)}
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
