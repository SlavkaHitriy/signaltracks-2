import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { FormikProvider, useFormik } from 'formik'
import { DefaultSelect } from '@/ui/DefaultSelect/index.js'

export const AssetMapView = () => {
  const formik = useFormik({
    initialValues: {},
  })

  return (
    <FormikProvider value={formik}>
      <Stack width='100%' direction='row'>
        <Box width={300} flexShrink={0} p='20px 12px 20px 24px'>
          <Stack direction='row' gap={8}>
            <DefaultSelect />
            <Typography color='background'>sdfsfd</Typography>
          </Stack>
        </Box>
      </Stack>
    </FormikProvider>
  )
}
