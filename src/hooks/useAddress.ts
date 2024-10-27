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
    const getDataAddress = async () => {
      setLoading(true);

      try {
        const response = await axios.get("/datas/address.json", {
          headers: {
            "Content-Type": "application/json",
          },
        });

        setProvinces(response.data.province);
        setDistricts(response.data.district);
        setLoading(false);
      } catch (error) {
        console.log(error);

        setError("Failed to load address data");
        setLoading(false);
      }
    };

    getDataAddress();
  }, []);

  return { provinces, districts, loading, error };
};
