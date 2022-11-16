import React, {Component} from 'react';
import {DayPilot, DayPilotCalendar, DayPilotNavigator} from "@daypilot/daypilot-lite-react";
import "./Calendar.css";

const styles = {
  wrap: {
    display: "flex"
  },
  left: {
    marginRight: "10px"
  },
  main: {
    flexGrow: "1"
  }
};

class Calendar extends Component {

  constructor(props) {
    super(props);
    this.calendarRef = React.createRef();
    this.state = {
      viewType: "Week",
      durationBarVisible: false,
      timeRangeSelectedHandling: "Enabled",
      onTimeRangeSelected: async args => {
        const dp = this.calendar;
        const modal = await DayPilot.Modal.prompt("Create a new event:", "Event 1");
        dp.clearSelection();
        if (!modal.result) { return; }
        dp.events.add({
          start: args.start,
          end: args.end,
          id: DayPilot.guid(),
          text: modal.result
        });
      },
      eventDeleteHandling: "Update",
      onEventClick: async args => {
        const dp = this.calendar;
        const modal = await DayPilot.Modal.prompt("Update event text:", args.e.text());
        if (!modal.result) { return; }
        const e = args.e;
        e.data.text = modal.result;
        dp.events.update(e);
      },
    };
  }

  get calendar() {
    return this.calendarRef.current.control;
  }

  componentDidMount() {

    const events = [
      {
        id: 1,
        text: "Event 1",
        start: "2022-11-17T10:30:00",
        end: "2022-11-17T13:00:00"
      },
      {
        id: 2,
        text: "Event 2",
        start: "2022-11-18T09:30:00",
        end: "2022-11-18T11:30:00",
        backColor: "#6aa84f"
      },
      {
        id: 3,
        text: "Event 3",
        start: "2022-11-18T12:00:00",
        end: "2022-11-18T15:00:00",
        backColor: "#f1c232"
      },
      {
        id: 4,
        text: "Event 4",
        start: "2022-11-16T11:30:00",
        end: "2022-11-16T14:30:00",
        backColor: "#cc4125"
      },
    ];

    const startDate = "2022-11-16";

    this.calendar.update({startDate, events});

  }

  render() {
    return (
      <div style={styles.wrap}>
        <div style={styles.left}>
          <DayPilotNavigator
            selectMode={"week"}
            showMonths={1}
            skipMonths={1}
            startDate={"2022-11-16"}
            selectionDay={"2022-11-16"}
            onTimeRangeSelected={ args => {
              this.calendar.update({
                startDate: args.day
              });
            }}
          />
        </div>
        <div style={styles.main}>
          <DayPilotCalendar
            {...this.state}
            ref={this.calendarRef}
          />
        </div>
      </div>
    );
  }
}

export default Calendar;