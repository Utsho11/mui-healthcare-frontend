"use client";

import { getTimeIn12HourFormat } from "@/app/(withDasboardLayout)/dashboard/doctor/schedules/components/MultiSelectedFieldChip";
import { useGetAllDoctorSchedulesQuery } from "@/redux/api/doctorScheduleApi";
import type { DoctorSchedule } from "@/types/doctorSchedules";

import { dateFormatter } from "@/utils/dateFormatter";

import { Box, Button, Stack, Typography } from "@mui/material";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { useState } from "react";
import { useCreateAppointmentMutation } from "@/redux/api/appoinmentApi";
import { useInitialPaymentMutation } from "@/redux/api/paymentApi";
import { useRouter } from "next/navigation";
dayjs.extend(utc);
dayjs.extend(timezone);

const DoctorScheduleSlots = ({ id }: { id: string }) => {
  const [scheduleId, setScheduleId] = useState("");
  const router = useRouter();
  const query: Record<string, any> = {};

  query["doctorId"] = id;

  query["startDate"] = dayjs(new Date())
    .tz("Asia/Dhaka")
    .hour(0)
    .minute(0)
    .second(0)
    .millisecond(0)
    .toISOString();

  query["endDate"] = dayjs(new Date())
    .tz("Asia/Dhaka")
    .hour(23)
    .minute(59)
    .second(59)
    .millisecond(999)
    .toISOString();

  //   console.log({ query });

  const { data, isLoading } = useGetAllDoctorSchedulesQuery({ ...query });

  const doctorSchedules = data?.doctorSchedules;

  //   console.log({ doctorSchedules });

  const currentDate = new Date();
  const today = currentDate.toLocaleDateString("en-US", { weekday: "long" });

  const availableSlots = doctorSchedules?.filter(
    (doctor: DoctorSchedule) => !doctor.isBooked
  );

  query.startDate = dayjs(new Date())
    .add(1, "day")
    .tz("Asia/Dhaka")
    .hour(0)
    .minute(0)
    .second(0)
    .millisecond(0)
    .toISOString();

  query.endDate = dayjs(new Date())
    .add(1, "day")
    .tz("Asia/Dhaka")
    .hour(23)
    .minute(59)
    .second(59)
    .millisecond(999)
    .toISOString();

  //   console.log("queryt", query);

  const { data: tomorrowScheduleData } = useGetAllDoctorSchedulesQuery({
    ...query,
  });

  const doctorTomorrowSchedules = tomorrowScheduleData?.doctorSchedules;

  const availableSlotsForTomorrow = doctorTomorrowSchedules?.filter(
    (doctor: DoctorSchedule) => !doctor.isBooked
  );

  const tomorrowDate = new Date(currentDate);
  tomorrowDate.setDate(currentDate.getDate() + 1);

  const tomorrow = tomorrowDate.toLocaleDateString("en-US", {
    weekday: "long",
  });

  //   console.log({ availableSlotsForTomorrow });

  const [createAppointment] = useCreateAppointmentMutation();
  const [initialPayment] = useInitialPaymentMutation();

  const handleBookAppointment = async () => {
    try {
      console.log({ id, scheduleId });

      if (id && scheduleId) {
        const res = await createAppointment({
          doctorId: id,
          scheduleId,
        }).unwrap();

        // console.log("res1:", res);

        if (res.id) {
          const response = await initialPayment(res.id).unwrap();
          // console.log({ response });

          if (response.paymentUrl && response.paymentUrl !== null) {
            // console.log(response.paymentUrl);
            router.push(response.paymentUrl);
          } else {
            console.error("Payment URL is null or undefined");
            // You could add a toast notification here to inform the user
            alert(
              "Payment service is currently unavailable. Please try again later."
            );
          }
        }
      }
    } catch (error) {
      console.log(error);
      // Add user-friendly error message
      alert("Failed to create appointment. Please try again.");
    }
  };

  return (
    <Box mb={5}>
      <Box sx={{ bgcolor: "white", p: 3, mt: 1 }}>
        <Typography variant="h4" mb={3} color="primary.main">
          Availability
        </Typography>
        <Typography variant="h6" fontSize={16}>
          <b>Today: {dateFormatter(currentDate.toISOString()) + " " + today}</b>
        </Typography>
        <Box sx={{ borderBottom: "2px dashed #d0d0d0", mt: 2, mb: 3 }} />
        <Stack
          direction="row"
          alignItems="center"
          flexWrap="wrap"
          gap={2}
          mb={3}
        >
          {availableSlots?.length ? (
            isLoading ? (
              "Loading..."
            ) : (
              availableSlots?.map((doctorSchedule: DoctorSchedule) => {
                const formattedTimeSlot = `${getTimeIn12HourFormat(
                  doctorSchedule?.schedule?.startDate
                )} - ${getTimeIn12HourFormat(
                  doctorSchedule?.schedule?.endDate
                )}`;

                return (
                  <Button
                    key={doctorSchedule?.scheduleId}
                    color="primary"
                    onClick={() => setScheduleId(doctorSchedule?.scheduleId)}
                    variant={`${
                      doctorSchedule?.scheduleId === scheduleId
                        ? "contained"
                        : "outlined"
                    }`}
                  >
                    {formattedTimeSlot}
                  </Button>
                );
              })
            )
          ) : (
            <span style={{ color: "red" }}>
              No Schedule is Available Today!
            </span>
          )}
        </Stack>
        <Typography variant="h6" fontSize={16}>
          <b>
            Tomorrow:{" "}
            {dateFormatter(tomorrowDate.toISOString()) + " " + tomorrow}
          </b>
        </Typography>
        <Box sx={{ borderBottom: "2px dashed #d0d0d0", mt: 2, mb: 3 }} />
        <Stack direction="row" alignItems="center" flexWrap="wrap" gap={2}>
          {availableSlotsForTomorrow?.length ? (
            isLoading ? (
              "Loading..."
            ) : (
              availableSlotsForTomorrow?.map(
                (doctorSchedule: DoctorSchedule) => {
                  const formattedTimeSlot = `${getTimeIn12HourFormat(
                    doctorSchedule?.schedule?.startDate
                  )} - ${getTimeIn12HourFormat(
                    doctorSchedule?.schedule?.endDate
                  )}`;

                  return (
                    <Button
                      key={doctorSchedule?.scheduleId}
                      color="primary"
                      onClick={() => setScheduleId(doctorSchedule?.scheduleId)}
                      variant={`${
                        doctorSchedule?.scheduleId === scheduleId
                          ? "contained"
                          : "outlined"
                      }`}
                    >
                      {formattedTimeSlot}
                    </Button>
                  );
                }
              )
            )
          ) : (
            <span style={{ color: "red" }}>
              No Schedule is Available Today!
            </span>
          )}
        </Stack>
      </Box>

      <Button
        onClick={handleBookAppointment}
        sx={{ display: "block", mx: "auto" }}
      >
        Book Appointment Now
      </Button>
    </Box>
  );
};

export default DoctorScheduleSlots;
