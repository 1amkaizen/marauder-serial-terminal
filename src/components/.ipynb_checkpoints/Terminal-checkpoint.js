import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import { Select, MenuItem, FormControl, InputLabel, Typography } from '@mui/material';

import { attacks } from './attacks';  // Import file attacks.js
import { spamBeaconTypes } from './spamBeacon';

import TerminalOutput from './TerminalOutput';
import TerminalInput from './TerminalInput';

const Terminal = (props) => {
    const [input, setInput] = React.useState('');
    const [history, setHistory] = React.useState([]);
    const [selectedAttack, setSelectedAttack] = React.useState('');
    const [selectedSpamBeacon, setSelectedSpamBeacon] = React.useState('');  // State untuk spam beacon
    const received = React.useRef('');

React.useEffect(() => {
    const str = `${received.current}${props.received?.value || ''}`;
    const lines = str.split('\n');

    let newReceived = str;
    const newLines = [];

    if (lines.length > 1) {
        newReceived = lines.pop();

        lines.forEach(line => {
            newLines.push({
                type: 'output',
                value: `${line}`,
                time: props.received?.time || new Date(),
            });
        });
    }
    setHistory((current) => current.concat(newLines));
    received.current = newReceived;
}, [props.received]);


    const handleAttackChange = (event) => {
        setSelectedAttack(event.target.value);
        setSelectedSpamBeacon('');  // Reset jenis spam beacon ketika serangan berubah
    };

    const handleSpamBeaconChange = (event) => {
        setSelectedSpamBeacon(event.target.value);
    };

    const handleSend = () => {
        props.send(input);

        setHistory([
            ...history,
            {
                type: 'userInput',
                value: input,
                time: new Date(),
            },
        ]);
        setInput('');
    };

    const handleKeyDown = (e) => {
        if (props.ctrl) {
            let charCode = String.fromCharCode(e.which).toUpperCase();

            if ((e.ctrlKey || e.metaKey) && charCode === 'C') {
                e.preventDefault();
                props.sendRaw(3);
            } else if ((e.ctrlKey || e.metaKey) && charCode === 'D') {
                e.preventDefault();
                props.sendRaw(4);
            }
        }
    };

    return (
        <Grid container spacing={1} sx={{ p: 0.75 }} onKeyDown={handleKeyDown}>
            <Grid item xs={12}>
                <TerminalOutput
                    history={history}
                    setHistory={setHistory}
                    setInput={setInput}
                    openSettings={props.openSettings}
                    echo={props.echo}
                    time={props.time}
                    clearToast={props.clearToast}
                />
            </Grid>

            <Grid item xs={12}>
                <TerminalInput
                    input={input}
                    setInput={setInput}
                    send={handleSend}
                />
            </Grid>

            {selectedAttack && (
                <Grid item xs={12}>
                    
                    {attacks[selectedAttack].description}
                </Grid>
            )}

            {/* Dropdown untuk memilih jenis serangan */}
            <Grid item xs={12}>
                <FormControl fullWidth>
                    <InputLabel id="attack-select-label">Pilih Serangan</InputLabel>
                    <Select
                        labelId="attack-select-label"
                        value={selectedAttack}
                        label="Pilih Serangan"
                        onChange={handleAttackChange}
                    >
                        {Object.keys(attacks).map((attackKey) => (
                            <MenuItem value={attackKey} key={attackKey}>
                                {attacks[attackKey].name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>

            {/* Jika serangan adalah Spam Beacon, tampilkan dropdown kedua */}
            {selectedAttack === 'spamBeacon' && (
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel id="spambeacon-select-label">Pilih Jenis Spam Beacon</InputLabel>
                        <Select
                            labelId="spambeacon-select-label"
                            value={selectedSpamBeacon}
                            label="Pilih Jenis Spam Beacon"
                            onChange={handleSpamBeaconChange}
                        >
                            <MenuItem value="Access Point Spam Clone">Access Point Spam Clone</MenuItem>
                            <MenuItem value="List Spam Beacon">List Spam Beacon</MenuItem>
                            <MenuItem value="Random Spam Beacon">Random Spam Beacon</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            )}

            {/* Menampilkan deskripsi berdasarkan pilihan Spam Beacon */}
            {selectedSpamBeacon && selectedAttack === 'spamBeacon' && (
                <Grid item xs={12}>
                    <Typography variant="h6" style={{ marginTop: '16px' }}>
                        Deskripsi untuk {selectedSpamBeacon}:
                    </Typography>
                    <Typography>
                    {spamBeaconTypes[selectedSpamBeacon]?.description || 
                     `Deskripsi untuk jenis ${selectedSpamBeacon} akan ditampilkan di sini.`}
                    </Typography>

                </Grid>
            )}
        </Grid>
    );
};

Terminal.propTypes = {
    received: PropTypes.object,
    send: PropTypes.func,
    sendRaw: PropTypes.func,
    openSettings: PropTypes.func,
    echo: PropTypes.bool,
    time: PropTypes.bool,
    ctrl: PropTypes.bool,
    clearToast: PropTypes.func,
};

export default Terminal;
