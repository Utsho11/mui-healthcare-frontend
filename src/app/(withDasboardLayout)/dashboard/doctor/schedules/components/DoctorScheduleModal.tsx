/* eslint-disable @typescript-eslint/no-explicit-any */
import MUIModal from "@/components/Shared/MUIModal/MUIModal";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import dayjs from "dayjs";
import { useGetAllScheduleQuery } from "@/redux/api/scheduleApi";
import MultipleSelectedFieldChip from "./MultiSelectedFieldChip";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const DoctorScheduleModal = ({ open, setOpen }: TProps) => {
  const [selectedDate, setSelectedDate] = useState(
    dayjs(new Date()).toISOString()
  );

  const [selectedScheduleIds, setSelectedScheduleIds] = useState<string[]>([]);

  const query: Record<string, any> = {};

  if (!!selectedDate) {
    query["startDate"] = dayjs(selectedDate)
      .hour(0)
      .minute(0)
      .millisecond(0)
      .toISOString();
    query["endDate"] = dayjs(selectedDate)
      .hour(23)
      .minute(59)
      .millisecond(999)
      .toISOString();
  }

  const { data } = useGetAllScheduleQuery(query);
  const schedules = data?.schedules;

  return (
    <MUIModal open={open} setOpen={setOpen} title="Create Doctor Schedule">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Controlled picker"
          value={dayjs(selectedDate)}
          onChange={(newValue) =>
            setSelectedDate(dayjs(newValue).toISOString())
          }
          sx={{ width: "100%" }}
        />
      </LocalizationProvider>
      <MultipleSelectedFieldChip
        schedules={schedules}
        selectedScheduleIds={selectedScheduleIds}
        setSelectedScheduleIds={setSelectedScheduleIds}
      />
    </MUIModal>
  );
};

export default DoctorScheduleModal;
