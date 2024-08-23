import { GridRowsProp } from "@mui/x-data-grid";
import { randomArrayItem, randomCreatedDate, randomId } from "@mui/x-data-grid-generator";
export const TILETABLE_COL_HEADERS = [
  { field: "time", headerName: "Time" },
  {
    field: "monday",
    headerName: "Mon",
  },
  { field: "tuesday", headerName: "Tue" },
  { field: "wednesday", headerName: "Wed" },
  { field: "thursday", headerName: "Thu" },
  { field: "friday", headerName: "Fri" },
  { field: "saturday", headerName: "Sat" },
  { field: "sunday", headerName: "Sun" },
];

export const TILETABLE_INITIAL_ROWS: GridRowsProp = [
  {
    id: randomId(),
    time: "17:00",
    monday: "",
    tuesday: "",
    wednesday: "",
    thursday: "Computer Network",
    friday: "Data sicence",
    saturday: "",
    sunday: "",
  },
  {
    id: randomId(),
    time: "17:30",
    monday: "Math",
    tuesday: "",
    wednesday: "",
    thursday: "",
    friday: "",
    saturday: "",
    sunday: "",
  },
  {
    id: randomId(),
    time: "19:00",
    monday: "",
    tuesday: "Web 1",
    wednesday: "Web 2",
    thursday: "",
    friday: "",
    saturday: "",
    sunday: "",
  },
].sort((a, b) => {
  if (a.time < b.time) return -1;
  return 1;
});
const roles = ["Allowance", "Not Allowance"];
const randomRole = () => {
  return randomArrayItem(roles);
};
export const TILETABLE_INITIAL_ROWS_EXAM: GridRowsProp = [
  {
    id: randomId(),
    subject: "A",
    dateTime: randomCreatedDate(),
    room: "23",
    timeAllowance: 20,
    document: 22,
    note: "",
  },
  {
    id: randomId(),
    subject: "B",
    dateTime: randomCreatedDate(),
    room: "23",
    timeAllowance: 20,
    document: randomRole(),
    note: "",
  },
  {
    id: randomId(),
    subject: "C",
    dateTime: randomCreatedDate(),
    room: "23",
    timeAllowance: 20,
    document: 22,
    note: "",
  },
  {
    id: randomId(),
    subject: "D",
    dateTime: randomCreatedDate(),
    room: "23",
    timeAllowance: 20,
    document: randomRole(),
    note: "",
  },
  {
    id: randomId(),
    subject: "E",
    dateTime: randomCreatedDate(),
    room: "23",
    timeAllowance: 20,
    document: randomRole(),
    note: "",
  },
];

