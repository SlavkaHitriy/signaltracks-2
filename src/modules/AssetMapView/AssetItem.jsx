import { Stack, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { Tag } from '@/ui/Tag/index.js';
import { useNavigate } from 'react-router-dom';

export const AssetItem = ({ title, temp, speed, tags }) => {
    const navigate = useNavigate();

    return (
        <Stack
            direction={'row'}
            justifyContent={'space-between'}
            gap={3}
            alignItems={'center'}
            py={1.5}
            px={2.5}
            borderBottom={'2px dashed #E1E3E8'}
            sx={{
                cursor: 'pointer',
            }}
            onClick={() => navigate('/asset/1')}
        >
            <Stack gap={1}>
                <Typography fontWeight={500} fontSize={14} color={'secondary.main'} whiteSpace={'nowrap'}>
                    {title}
                </Typography>
                <Stack direction={'row'} alignItems={'center'} gap={2}>
                    <Stack direction={'row'} gap={1}>
                        {tags.map((tag, index) => (
                            <Tag
                                key={`asset-tag-${index}`}
                                text={tag.text}
                                textSize={tag.textSize}
                                borderColor={tag.borderColor}
                                status={tag.status}
                            />
                        ))}
                    </Stack>
                    <Typography whiteSpace={'nowrap'} fontSize={12}>
                        {temp} °F
                    </Typography>
                    <Typography whiteSpace={'nowrap'} fontSize={12}>
                        {speed} mph
                    </Typography>
                </Stack>
            </Stack>
            <ExpandMore
                sx={{
                    transform: 'rotate(-90deg) translateY(5px)',
                    flexShrink: 0,
                }}
            />
        </Stack>
    );
};
