import * as React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import { Alert } from 'reactstrap';

const appointmentURL = 
class Trainerscheduler extends React.Component {
    constructor() {
        super(...arguments);
        this.data = [{
                Id: 2,
                Subject: 'Meet Your Trainers',
                StartTime: new Date(2021, 5, 15, 10, 0),
                EndTime: new Date(2021, 5, 15, 11, 30),
                IsAllDay: false,
                RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=5',
            }];
    }

    addAppointment = (newFav) => {
        //console.log(newFav)
        let postOption = {
          method: "POST",
          headers: {
            "Content-Type": 'application/json',
            Accepts: 'application/json'
          },
          body: JSON.stringify(newFav)
        }
        console.log(postOption)
      
       fetch(favoriteURL, postOption, {crossDomain: true}, {withCredentials: true})
            .then(res => res.json())
            .then(this.setState({ favorites: [...this.state.favorites, newFav] }))
        }

    render() {
        return (
		<div>
<ScheduleComponent height='850px' selectedDate={new Date(2021, 5, 15)} eventSettings={{ dataSource: this.data }}>
<Inject style={{backgroundColor: "green"}} services={[Day, Week, WorkWeek, Month, Agenda]}/>
</ScheduleComponent>
<div>
<Alert color="dark">
        Please select desired appointment time and date. Don't schedule appointment on the gray box or double-book a trainer. If you wish to change your appointment or delete it, make sure to come back here to update that- Enjoy your session!
      </Alert>
</div>
</div>
		)
    }
}
export default Trainerscheduler;

