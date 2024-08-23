import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Select, MenuItem, InputLabel, FormControl, Button } from '@mui/material';

const MyDialog = () => {
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState('');
    const [url, setUrl] = useState('');
    const [file, setFile] = useState(null);
    const [name, setName] = useState('');

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSelectionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelection(event.target.value);
    };

    const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(event.target.value);
    };

    // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setFile(event.target.files?.[0]);
    // };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };


    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleOpen}>
                Open Dialog
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">My Dialog</DialogTitle>
                <DialogContent>
                    <FormControl fullWidth>
                        <InputLabel id="selection-label">Selection</InputLabel>
                        <Select
                            labelId="selection-label"
                            id="selection"
                            value={selection}
                        // onChange={handleSelectionChange}
                        >
                            <MenuItem value="link">Link</MenuItem>
                            <MenuItem value="file">File</MenuItem>
                        </Select>
                    </FormControl>
                    {selection === 'link' ? (
                        <TextField
                            id="url"
                            label="URL"
                            value={url}
                            onChange={handleUrlChange}
                            fullWidth
                        />
                    ) : (
                        <input
                            type="file"
                            id="file"
                        // onChange={handleFileChange}
                        />
                    )}
                    <TextField
                        id="name"
                        label="Name"
                        value={name}
                        onChange={handleNameChange}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => console.log('Submit')} color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default MyDialog;