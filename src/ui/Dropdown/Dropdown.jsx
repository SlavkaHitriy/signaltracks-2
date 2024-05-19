import { Box, Menu } from '@mui/material';
import { useState } from 'react';
import styles from './index.module.scss';
import { ArrowDownIcon } from '@/assets/icons/ArrowDownIcon.jsx';

export const Dropdown = ({ children, customChildren, ...otherProps }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Box className={styles.button} onClick={handleClick}>
                {children}
                <ArrowDownIcon />
            </Box>
            <Menu
                id='basic-menu'
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                {...otherProps}
            >
                Test
            </Menu>
        </div>
    );
};
