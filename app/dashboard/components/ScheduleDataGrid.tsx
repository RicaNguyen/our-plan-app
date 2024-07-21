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
import { TILETABLE_COL_HEADERS, TILETABLE_INITIAL_ROWS } from "./constants";

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

export default function ScheduleDataGrid() {
  const [rows, setRows] = useState(TILETABLE_INITIAL_ROWS);
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

  const columns: GridColDef[] = TILETABLE_COL_HEADERS.map(
    (colHeader): GridColDef => {
      if (colHeader.field === "time") {
        return {
          field: "time",
          headerName: "Time",
          editable: allowEditable,
          sortable: false,
          disableColumnMenu: true,
          renderEditCell: (params) => (
            <InputBase
              type="time"
              value={params.value}
              onChange={(event) =>
                params.api.setEditCellValue({
                  id: params.id,
                  field: "time",
                  value: event.target.value,
                })
              }
              inputProps={{
                shrink: true,
              }}
            />
          ),
        };
      }

      return {
        field: colHeader.field,
        headerName: colHeader.headerName,
        type: "string",
        align: "center",
        headerAlign: "center",
        editable: allowEditable,
        sortable: false,
        disableColumnMenu: true,
        flex: 1,
      };
    }
  );

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
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: "primary.main",
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
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
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
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
