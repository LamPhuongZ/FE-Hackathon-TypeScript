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
  const [allDistricts, setAllDistricts] = useState<District[]>([]); // Lưu tất cả districts
  const [districts, setDistricts] = useState<District[]>([]); // Lưu districts sau khi lọc
  const [selectedProvinceId, setSelectedProvinceId] = useState<number | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getDataAddress = async () => {
      setLoading(true);

      try {
        const response = await axios.get("/datas/address.json", {
          headers: {
            "Content-Type": "application/json",
          },
        });

        setProvinces(response.data.province);
        setAllDistricts(response.data.district); // Lưu tất cả districts
        setLoading(false);
      } catch (error) {
        console.log(error);

        setError("Failed to load address data");
        setLoading(false);
      }
    };

    getDataAddress();
  }, []);

  useEffect(() => {
    // Mỗi khi selectedProvinceId thay đổi, cập nhật districts
    if (selectedProvinceId !== null) {
      const filteredDistricts = allDistricts.filter(
        (district) => district.provinceId === selectedProvinceId
      );
      setDistricts(filteredDistricts);
    }
  }, [selectedProvinceId, allDistricts]);

  const setProvinceAndFetchDistricts = (provinceId: number) => {
    setSelectedProvinceId(provinceId);
  };

  return { provinces, districts, setProvinceAndFetchDistricts, loading, error };
};
