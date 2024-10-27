import { useMemo } from "react";
import dayjs from "dayjs";

export default function useFormattedDate(dateTimeString?: Date | string) {
  const formattedDate = useMemo(() => {
    if (!dateTimeString) return "Ngày không hợp lệ";
    return dayjs(dateTimeString).isValid()
      ? dayjs(dateTimeString).format("DD-MM-YYYY HH:mm:ss")
      : "Ngày không hợp lệ";
  }, [dateTimeString]);

  return formattedDate;
}


