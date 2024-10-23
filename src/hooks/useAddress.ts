import { useEffect, useState } from "react";
import axios from "axios";

export interface Province {
  id: string;
  name: string;
}

export interface Distrist {
  id: string;
  name: string;
  provinceId: string;
}

export interface Ward {
  id: string;
  name: string;
  districtId: string;
}

export const useAddress = () => {
  const [provinces, setProvices] = useState<Province[]>([]);
  const [districts, setDistrists] = useState<Distrist[]>([]);
  const [wards, setWards] = useState<Ward[]>([]);
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

        setProvices(response.data.province);
        setDistrists(response.data.district);
        setWards(response.data.ward);
        setLoading(false);
      } catch (error) {
        console.log(error);

        setError("Failed to load address data");
        setLoading(false);
      }
    };

    getDataAddress();
  }, []);

  return { provinces, districts, wards, loading, error };
};
