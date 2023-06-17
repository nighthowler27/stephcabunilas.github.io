"use client"
import * as React from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import styles from './calendar.module.css'

export default function Calendar() {
    const currentDate = dayjs();
  return (
    <div className={styles.dateSelectorContainer}>
        <LocalizationProvider dateAdapter={AdapterDayjs} >
            <DatePicker defaultValue={currentDate} />
        </LocalizationProvider>
    </div>
    
  );
}