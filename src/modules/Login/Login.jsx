import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import showPasswordIcon from '/icons/show-password.svg';
import hidePasswordIcon from '/icons/hide-password.svg';
import { useState } from 'react';
import { FormikProvider, useFormik } from 'formik';

export const Login = () => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (values) => {
            console.log(values);
            navigate('/asset-listing');
        },
    });
    const [showPassword, setShowPassword] = useState(false);

    return (
        <Stack
            alignItems={'flex-start'}
            justifyContent={'center'}
            bgcolor={'#000000'}
            py={10}
            px={20}
            width={'100%'}
            position={'relative'}
            overflow={'hidden'}
        >
            <Box
                src={'/assets/login-bg.png'}
                component={'img'}
                sx={{
                    width: '1000px',
                    height: '600px',
                    position: 'absolute',
                    left: '500px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                }}
            />
            <FormikProvider value={formik}>
                <Stack alignItems={'center'} justifyContent={'center'} width={'100%'} maxWidth={350}>
                    <Box width={285} height={54} src={'/icons/logo.svg'} component={'img'} mb={4} />
                    <Typography color={'common.white'} fontWeight={700} fontSize={25} mb={2}>
                        Sign In
                    </Typography>
                    <Typography color={'common.white'} mb={3}>
                        Hi! Welcome back, lets get to work.
                    </Typography>
                    <Box component={'form'} onSubmit={formik.handleSubmit} width={'100%'}>
                        <Stack spacing={1.5} width={'100%'}>
                            <Stack direction={'column'} width={'100%'}>
                                <Typography mb={1.5} color={'common.white'}>
                                    Email
                                </Typography>
                                <TextField
                                    sx={{
                                        '& .MuiInputBase-input': {
                                            padding: '17px 25px',
                                            borderRadius: '10px',
                                            background: 'white',
                                            border: '1px solid #E1E3E8',
                                        },
                                    }}
                                    type={'email'}
                                    placeholder='example@oilservices.com'
                                    name={'email'}
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                />
                            </Stack>
                            <Stack direction={'column'} width={'100%'}>
                                <Typography mb={1.5} color={'common.white'}>
                                    Password
                                </Typography>
                                <Box position={'relative'}>
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: '50%',
                                            right: '30px',
                                            transform: 'translateY(-50%)',
                                            cursor: 'pointer',
                                            zIndex: 1,
                                            width: '24px',
                                            height: '24px',
                                            objectFit: 'contain',
                                        }}
                                        component={'img'}
                                        src={showPassword ? hidePasswordIcon : showPasswordIcon}
                                        onClick={() => setShowPassword((prevState) => !prevState)}
                                    />
                                    <TextField
                                        sx={{
                                            '& .MuiInputBase-input': {
                                                lineHeight: '5',
                                                padding: '17px 60px 17px 25px',
                                                borderRadius: '10px',
                                                background: 'white',
                                                border: '1px solid #E1E3E8',
                                                '&::placeholder': {
                                                    position: 'absolute',
                                                    top: '50%',
                                                    transform: 'translateY(calc(-50% + 2px))',
                                                },
                                            },
                                        }}
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder='*************************'
                                        name={'password'}
                                        onChange={formik.handleChange}
                                        value={formik.values.password}
                                    />
                                </Box>
                            </Stack>
                            <Typography
                                sx={{
                                    color: 'common.white',
                                    textDecoration: 'underline',
                                    cursor: 'pointer',
                                    fontSize: 13,
                                    textAlign: 'right',
                                    '&:hover': {
                                        textDecoration: 'none',
                                    },
                                }}
                            >
                                Forgot Password?
                            </Typography>
                            <Button
                                sx={{
                                    fontSize: 20,
                                    py: 1.2,
                                    borderRadius: '30px',
                                    maxWidth: 300,
                                    width: '100%',
                                    alignSelf: 'center',
                                    bgcolor: 'common.white',
                                    color: 'common.black',
                                    textTransform: 'capitalize',
                                    '&:hover': {
                                        bgcolor: 'common.white',
                                    },
                                }}
                                type={'submit'}
                            >
                                Sign In
                            </Button>
                        </Stack>
                    </Box>
                    <Typography color={'common.white'} mt={4}>
                        SIGNALTRACKS, LLC
                    </Typography>
                </Stack>
            </FormikProvider>
        </Stack>
    );
};
