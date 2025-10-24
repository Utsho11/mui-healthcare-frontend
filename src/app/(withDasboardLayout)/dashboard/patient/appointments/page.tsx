'use client';
import { Box, Chip, IconButton } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import VideocamIcon from '@mui/icons-material/Videocam';
import Link from 'next/link';
import { dateFormatter } from '@/utils/dateFormatter';
import { useGetMyAppointmentsQuery } from '@/redux/api/appoinmentApi';
import { getTimeIn12HourFormat } from '../../doctor/schedules/components/MultiSelectedFieldChip';
import MUIChip from '@/components/Shared/MUIChip/MUIChip';

const PatientAppointmentsPage = () => {
   const { data, isLoading } = useGetMyAppointmentsQuery({});
   const appointments = data?.appointments;
   const meta = data?.meta;

   const columns: GridColDef[] = [
      {
         field: 'name',
         headerName: 'Doctor Name',
         flex: 1,
         renderCell: ({ row }) => {
            return row.doctor.name;
         },
      },
      {
         field: 'appointmentDate',
         headerName: 'Appointment Date',
         headerAlign: 'center',
         align: 'center',
         flex: 1,
         renderCell: ({ row }) => {
            return dateFormatter(row.schedule.startDate);
         },
      },
      {
         field: 'appointmentTime',
         headerName: 'Appointment Time',
         headerAlign: 'center',
         align: 'center',
         flex: 1,
         renderCell: ({ row }) => {
            return getTimeIn12HourFormat(row.schedule.startDate);
         },
      },

      {
         field: 'paymentStatus',
         headerName: 'Payment Status',
         flex: 1,
         headerAlign: 'center',
         align: 'center',
         renderCell: ({ row }) => {
            return row.paymentStatus === 'PAID' ? (
               <MUIChip label={row.paymentStatus} type='success' />
            ) : (
               <MUIChip label={row.paymentStatus} type='error' />
            );
         },
      },
      {
         field: 'action',
         headerName: 'Join',
         flex: 1,
         headerAlign: 'center',
         align: 'center',
         renderCell: ({ row }) => {
            return (
               <IconButton
                  component={Link}
                  href={`/video?videoCallingId=${row?.videoCallingId}`}
                  disabled={row.paymentStatus === 'UNPAID'}
               >
                  <VideocamIcon
                     sx={{
                        color:
                           row.paymentStatus === 'PAID' ? 'primary.main' : '',
                     }}
                  />
               </IconButton>
            );
         },
      },
   ];

   return (
      <Box>
         {!isLoading ? (
            <Box my={2}>
               <DataGrid
                  rows={appointments ?? []}
                  columns={columns}
                  loading={isLoading}
               />
            </Box>
         ) : (
            <h1>Loading.....</h1>
         )}
      </Box>
   );
};

export default PatientAppointmentsPage;