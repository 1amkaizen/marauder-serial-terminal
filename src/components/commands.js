import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

const Command = () => {
  const [open, setOpen] = useState(false);
  const [command, setCommand] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCommandChange = (e) => setCommand(e.target.value);

  const executeCommand = () => {
    // Fungsi untuk menjalankan command sesuai pilihan
    console.log(`Executing: ${command}`);
    handleClose();
  };

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>Open Command Menu</Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Command Options</DialogTitle>
        <DialogContent>
          <FormControl fullWidth>
            <InputLabel>Select Command</InputLabel>
            <Select
              value={command}
              onChange={handleCommandChange}
              label="Command"
            >
              <MenuItem value="deauth">Deauthentication</MenuItem>
              <MenuItem value="evil_portal">Evil Portal</MenuItem>
              <MenuItem value="dns_spoofing">DNS Spoofing</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">Cancel</Button>
          <Button onClick={executeCommand} color="primary">Execute</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Command;

