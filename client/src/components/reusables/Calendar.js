import { Grid, GridItem } from "@chakra-ui/react";

function Calendar() {
  const date = "5/8/2022";
  const recCenterOpen = 5;
  const recCenterClose = 8;
  const resources = [
    { id: "1", name: "Court 1" },
    { id: "2", name: "Court 2" },
    { id: "3", name: "Court 3" },
    { id: "4", name: "Field 1" },
    { id: "5", name: "Field 2" },
  ];
  const reservationCalendarIds = [
    "calendarId:7",
    "calendarId:8",
    "calendarId:9",
    "calendarId:10",
    "calendarId:11",
    "calendarId:14",
    "calendarId:23",
  ];
  const numOfResources = resources.length;
  const gridColumns = numOfResources + 1;
  const recCenterHours = recCenterClose - recCenterOpen;

  const dynamicGridTemplate = createDynamicGridTemplate();
  const dynamicColumns = `80px repeat(${numOfResources}, 1fr)`;
  const dynamicRows = `repeat(${recCenterHours + 1}, 1fr})`;
  const calendarTopRow = [];
  const calendarBody = [];

  calendarTopRow.push(formatSquare());

  resources.forEach((resource) =>
    calendarTopRow.push(resourceSquare(resource))
  );

  for (let i = 0; i < recCenterHours * gridColumns; i++) {
    const calendarId = i + gridColumns;
    if (calendarId % gridColumns === 0) {
      calendarBody.push(timeSquare(calendarId, i));
    } else {
      calendarBody.push(calendarSquare(calendarId));
    }
  }

  function createDynamicGridTemplate() {
    let gridTemplate = "";
    for (
      let i = 0;
      i < gridColumns + recCenterHours + numOfResources * recCenterHours;
      i++
    ) {
      if (i % gridColumns === 0) {
        gridTemplate = gridTemplate + `"calendarId:${i}`;
      } else if ((i + 1) % gridColumns === 0) {
        gridTemplate = gridTemplate + ` calendarId:${i}"`;
      } else {
        gridTemplate = gridTemplate + ` calendarId:${i}`;
      }
    }
    return gridTemplate;
  }

  function formatSquare() {
    return <GridItem key="format" bg="white" area={"calendarId:0"}></GridItem>;
  }

  function resourceSquare(resource) {
    return (
      <GridItem
        key={resource.id}
        bg="teal.300"
        area={`calendarId:${resource.id}`}
        borderRadius="md"
        boxShadow="md"
        p={2}
        fontWeight="semibold"
      >
        {resource.name}
      </GridItem>
    );
  }

  function timeSquare(calendarId, iteration) {
    return (
      <GridItem
        key={calendarId}
        area={`calendarId:${calendarId}`}
        bg="teal.100"
        borderRadius="md"
        boxShadow="md"
        p={3}
        fontWeight="semibold"
      >
        {iteration / gridColumns + recCenterOpen}:00
      </GridItem>
    );
  }

  function calendarSquare(calendarId) {
    const reservedSquare = reservationCalendarIds.includes(
      `calendarId:${calendarId}`
    );
    if (reservedSquare) {
      return reservedTimeSquare(calendarId);
    } else {
      return availableTimeSquare(calendarId);
    }
  }

  function reservedTimeSquare(calendarId) {
    return (
      <GridItem
        key={calendarId}
        area={`calendarId:${calendarId}`}
        w="100%"
        bg="gray.200"
        color="gray.400"
        borderRadius="md"
        p={3}
        fontWeight="semibold"
        boxShadow="md"
        data-date={date}
        data-time={Math.floor(calendarId / gridColumns) - 1 + recCenterOpen}
        data-resource-index={(calendarId % gridColumns) - 1}
      >
        Unavailable
      </GridItem>
    );
  }

  function availableTimeSquare(calendarId) {
    return (
      <GridItem
        key={calendarId}
        area={`calendarId:${calendarId}`}
        w="100%"
        bg="green.300"
        borderRadius="md"
        boxShadow="md"
        as="button"
        _hover={{ background: "green.400" }}
        onClick={handleClick}
        data-date={date}
        data-time={Math.floor(calendarId / gridColumns) - 1 + recCenterOpen}
        data-resource-index={(calendarId % gridColumns) - 1}
      ></GridItem>
    );
  }

  function handleClick(e) {
    e.preventDefault();
    console.log(e);
    console.log(e.target.dataset.date);
    console.log(e.target.dataset.time);
    console.log(e.target.dataset.resourceIndex);
    console.log(resources[e.target.dataset.resourceIndex]);
  }

  return (
    <div>
      <h2>Calendar</h2>
      <Grid
        templateAreas={dynamicGridTemplate}
        gridTemplateColumns={dynamicColumns}
        gridTemplateRows={dynamicRows}
        gap={4}
        m={4}
      >
        {calendarTopRow}
        {calendarBody}
      </Grid>
    </div>
  );
}

export default Calendar;
