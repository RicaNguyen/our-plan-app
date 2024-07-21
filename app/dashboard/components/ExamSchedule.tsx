"use client";
import {
  Box,
  Button,
  ButtonGroup,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";
import React, { ChangeEvent } from "react";
import {
  DataGrid,
  GridCellModesModel,
  GridColDef,
  GridRowId,
  GridRowsProp,
} from "@mui/x-data-grid";
import {
  randomCreatedDate,
  randomTraderName,
  randomId,
  randomArrayItem,
} from "@mui/x-data-grid-generator";
const roles = ["Allowance", "Not Allowance"];
const randomRole = () => {
  return randomArrayItem(roles);
};
const initialRows: GridRowsProp = [
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
interface IEvent {
  subject: string;
  type: string;
  room: string;
  campus: string;
  day: string;
  time: string;
  timeAllowance: string;
  document: string;
  note: string;
}

const DEFAULT_EMPTY_EVENT: IEvent = {
  subject: "",
  type: "",
  room: "",
  campus: "",
  day: "",
  time: "",
  timeAllowance: "",
  document: "",
  note: "",
};
interface SelectedCellParams {
  id: GridRowId;
  field: string;
}

export default function ExamScheduleBoard() {
  const [rows, setRows] = React.useState(initialRows);
  const theme = useTheme();
  const [selectedCellParams, setSelectedCellParams] =
    React.useState<SelectedCellParams | null>(null);
  const [cellModesModel, setCellModesModel] =
    React.useState<GridCellModesModel>({});
  const handleCellFocus = React.useCallback(
    (event: React.FocusEvent<HTMLDivElement>) => {
      const row = event.currentTarget.parentElement;
      const id = row!.dataset.id!;
      const field = event.currentTarget.dataset.field!;
      setSelectedCellParams({ id, field });
    },
    []
  );

  const columns: GridColDef[] = [
    {
      field: "subject",
      headerName: "Subject",
      type: "string",
      align: "left",
      headerAlign: "left",
      editable: true,
    },

    {
      field: "dateTime",
      headerName: "Date Time",
      type: "dateTime",
      align: "left",
      headerAlign: "left",
      editable: true,
    },
    {
      field: "room",
      headerName: "Room",
      type: "string",
      align: "left",
      headerAlign: "left",
      editable: true,
    },
    {
      field: "timeAllowance",
      headerName: "Time Allowance",
      type: "number",
      align: "left",
      headerAlign: "left",
      editable: true,
    },
    {
      field: "document",
      headerName: "Document",
      editable: true,
      type: "singleSelect",
      valueOptions: ["Allowance", "Not Allowance"],
    },
    {
      field: "note",
      headerName: "Note",
      type: "string",
      align: "left",
      headerAlign: "left",
      editable: true,
    },
  ];
  return (
    <Paper
      sx={{
        padding: 2,
        display: "flex",
        flexDirection: "column",
        maxWidth: "100%", // prevent overflowing on smaller screens
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box flex={1}>
          <Typography variant="h6">Exam Schedule</Typography>
        </Box>
      </Box>
      <DataGrid rows={rows} columns={columns} hideFooter></DataGrid>
    </Paper>
  );
}
