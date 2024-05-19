import { FastRewind, PlayArrow } from '@mui/icons-material';

export const playTabs = [
    {
        title: 'Play',
        value: 'play',
        icon: (
            <PlayArrow
                sx={{
                    color: '#B5B5BE',
                }}
            />
        ),
        isIconRight: true,
    },
    {
        title: 'Rewind',
        value: 'rewind',
        icon: (
            <FastRewind
                sx={{
                    color: '#B5B5BE',
                }}
            />
        ),
    },
];
