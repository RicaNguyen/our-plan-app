"use client";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import {
  GridRowsProp,
  GridRowModesModel,
  GridRowModes,
  DataGrid,
  GridColDef,
  GridToolbarContainer,
  GridActionsCellItem,
  GridEventListener,
  GridRowId,
  GridRowModel,
  GridRowEditStopReasons,
  GridSlots,
  GridSlotsComponentsProps,
} from "@mui/x-data-grid";
import { randomId } from "@mui/x-data-grid-generator";
import { InputBase, Typography } from "@mui/material";
import {
  TILETABLE_COL_HEADERS,
  TILETABLE_INITIAL_ROWS,
  TILETABLE_INITIAL_ROWS_EXAM,
} from "./constants";

declare module "@mui/x-data-grid" {
  interface FooterPropsOverrides {
    lastUpdate: string;
  }
}

interface EditToolbarProps {
  setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
  setRowModesModel: (
    newModel: (oldModel: GridRowModesModel) => GridRowModesModel
  ) => void;
  setAllowEditable: () => void;
  allowEditable: boolean;
}

function EditToolbar(props: EditToolbarProps) {
  const { setRows, setRowModesModel, setAllowEditable, allowEditable } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [...oldRows, { id, name: "", age: "", isNew: true }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: "name" },
    }));
  };

  return (
    <GridToolbarContainer
      sx={{
        my: 2,
      }}
    >
      <Box flex={1}>
        <Typography variant="h6"> Schedule</Typography>
      </Box>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add record
      </Button>
      <Button
        color="warning"
        // startIcon={<AddIcon />}
        onClick={setAllowEditable}
      >
        {allowEditable ? "Cancel Edit Mode" : "Edit Mode"}
      </Button>
    </GridToolbarContainer>
  );
}

function CustomFooterStatusComponent(
  props: NonNullable<GridSlotsComponentsProps["footer"]>
) {
  return (
    <Box sx={{ p: 1, display: "flex" }}>
      <Typography variant="subtitle2" sx={{ fontStyle: "italic", m: 1 }}>
        Last update {props.lastUpdate}
      </Typography>
    </Box>
  );
}

const getLastUpdate = () =>
  new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();

export default function ExamScheduleDataGrid() {
  const [rows, setRows] = useState(TILETABLE_INITIAL_ROWS_EXAM);
  const [lastUpdate, setLastUpdate] = useState<string>(getLastUpdate());
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});
  const [allowEditable, setAllowEditable] = useState(false);

  const handleRowEditStop: GridEventListener<"rowEditStop"> = (
    params,
    event
  ) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  useEffect(() => {
    setLastUpdate(getLastUpdate());
  }, [rows]);

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id: GridRowId) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow!.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow: GridRowModel) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns: GridColDef[] = [
    {
      field: "subject",
      headerName: "Subject",
      type: "string",
      align: "left",
      headerAlign: "left",
      editable: allowEditable,
      sortable: false,
      disableColumnMenu: true,
    },

    {
      field: "dateTime",
      headerName: "Date Time",
      type: "dateTime",
      align: "left",
      headerAlign: "left",
      editable: true,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "room",
      headerName: "Room",
      type: "string",
      align: "left",
      headerAlign: "left",
      editable: true,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "timeAllowance",
      headerName: "Time Allowance",
      type: "number",
      align: "left",
      headerAlign: "left",
      editable: true,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "document",
      headerName: "Document",
      editable: true,
      type: "singleSelect",
      valueOptions: ["Allowance", "Not Allowance"],
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "note",
      headerName: "Note",
      type: "string",
      align: "left",
      headerAlign: "left",
      editable: true,
      sortable: false,
      disableColumnMenu: true,
    },
  ];

  if (allowEditable) {
    columns.push({
      field: "actions",
      type: "actions",
      headerName: "Actions",
      cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              key="Save"
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: "primary.main",
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              key="Cancel"
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            key="Edit"
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            key="Delete"
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    });
  }

  return (
    <Box
      sx={{
        width: "auto",
        "& .actions": {
          color: "text.secondary",
        },
        "& .textPrimary": {
          color: "text.primary",
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        editMode="cell"
        // hideFooter
        // hideFooterPagination
        // hideFooterSelectedRowCount
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        slots={{
          toolbar: EditToolbar as GridSlots["toolbar"],
          footer: CustomFooterStatusComponent,
        }}
        slotProps={{
          footer: { lastUpdate },
          toolbar: {
            setRows,
            setRowModesModel,
            allowEditable,
            setAllowEditable: () => {
              setAllowEditable(!allowEditable);
            },
          },
        }}
      />
    </Box>
  );
}
