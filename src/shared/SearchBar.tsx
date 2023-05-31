import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';

const SearchBar = () => {
    return (
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 600, opacity: 0.5 }}
        >
            <IconButton type="button" sx={{ p: '10px', color: 'black' }} aria-label="search">
                <SearchIcon />
            </IconButton>
            <InputBase
                sx={{ ml: 1, flex: 1, }}
                placeholder="www.FreshFinds.com"
                inputProps={{ 'aria-label': 'www.FreshFinds.com' }}
            />
            <IconButton type="button" sx={{ p: '10px', color: 'black' }} aria-label="send">
                <SendIcon />
            </IconButton>
        </Paper>
    );
}

export default SearchBar