import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import Badge from '@mui/material/Badge';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';


function Calender(){
        const [value, setValue] = useState(new Date());
        const [highlightedDays, setHighlightedDays] = useState([]);
        return (
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDatePicker
              variant='static'
              orientation='portrait'
              value={value}
              disableFuture
              onChange={(newValue) => setValue(newValue)}
              renderInput={(params) => {
                <TextField id="outlined-basic" label="Outlined" variant="outlined" {...params} />;
              }}
              renderDay={(day, _value, DayComponentProps) => {
                const isSelected =
                  !DayComponentProps.outsideCurrentMonth &&
                  highlightedDays.indexOf(day.getDate()) >= 0;
      
                return (
                  <Badge
                    key={day.toString()}
                    overlap='circular'
                    badgeContent={isSelected ? '🏋️' : undefined}
                  >
                    <PickersDay {...DayComponentProps} />
                  </Badge>
                );
              }}
            />
          </LocalizationProvider>
        )
}
export default Calender