import { useEffect, useState } from "react";
import axios from "axios";

export interface Province {
  id: number;
  name: string;
}

export interface District {
  id: number;
  name: string;
  provinceId: number;
}

export const useAddress = () => {
  const [provinces, setProvinces] = useState<Province[]>([]);
  const [districts, setDistricts] = useState<District[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProvinces = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/datas/address.json", {
          headers: {
            "Content-Type": "application/json",
          },
        });

        setProvinces(
          response.data.province.map((prov: Province) => ({
            id: Number(prov.id),
            name: prov.name,
          }))
        );
        setLoading(false);
      } catch (error) {
        console.error("Error loading provinces:", error);
        setError("Failed to load province data");
        setLoading(false);
      }
    };

    getProvinces();
  }, []);

  const getDistrictsByProvince = async (
    provinceId: number
  ): Promise<District[]> => {
    setLoading(true);
    try {
      const response = await axios.get("/datas/address.json", {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Lọc quận theo provinceId
      const filteredDistricts = response.data.district
        .filter((district: District) => Number(district.provinceId) === provinceId)
        .map((district: District) => ({
          id: Number(district.id), // Chuyển đổi id thành số
          name: district.name,
          provinceId: Number(district.provinceId), // Chuyển đổi provinceId thành số
        }));

      setDistricts(filteredDistricts); // Cập nhật danh sách quận
      setLoading(false);
      return filteredDistricts; // Trả về District[]
    } catch (error) {
      console.error("Error loading districts:", error);
      setError("Failed to load district data");
      setLoading(false);
      return []; // Trả về mảng rỗng trong trường hợp lỗi
    }
  };

  return { provinces, districts, loading, error, getDistrictsByProvince };
};
