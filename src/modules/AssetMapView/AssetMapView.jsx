import { Chip, Stack, Typography } from '@mui/material'
import React from 'react'
import { FormikProvider, useFormik } from 'formik'
import { DefaultSelect } from '@/ui/DefaultSelect/index.js'
import { DefaultIconButton } from '@/ui/DefaultIconButton/index.js'
import { ArrowsIcon } from '@/assets/icons/ArrowsIcon.jsx'
import { FilterIcon } from '@/assets/icons/FilterIcon.jsx'
import { DotsIcon } from '@/assets/icons/DotsIcon.jsx'
import { SearchInput } from '@/components/SearchInput/index.js'
import { items } from '@/modules/AssetMapView/data/items.js'
import { ColorStatus } from '@/ui/ColorStatus/index.js'
import { Difference } from '@/ui/Difference/index.js'

export const AssetMapView = () => {
  const formik = useFormik({
    initialValues: {
      machines: 'All Machines',
      search: '',
    },
  })

  return (
    <FormikProvider value={formik}>
      <Stack width='100%' direction='row'>
        <Stack borderRight='1px solid' borderColor='neutral.50' width={300} flexShrink={0}>
          <Stack p='20px 12px 20px 24px' borderBottom='1px solid' borderColor='neutral.50' direction='row' gap='8px'>
            <DefaultSelect defaultValue='All Machines' name='machines' amount={23} />
            <DefaultIconButton icon={<DotsIcon />} />
          </Stack>
          <Stack p='20px 12px 20px 24px' borderBottom='1px solid' borderColor='neutral.50' direction='row' gap='8px'>
            <SearchInput name='search' />
            <DefaultIconButton icon={<ArrowsIcon />} />
            <DefaultIconButton icon={<FilterIcon />} />
          </Stack>
          <Stack
            p='12px 12px 12px 24px'
            borderBottom='1px solid'
            borderColor='neutral.50'
            direction='row'
            gap='12px'
            alignItems='center'
          >
            <Chip label='LIVE' sx={{ px: '16px' }} />
            <Typography variant='footnoteMedium'>Compared to: Yesterday</Typography>
          </Stack>
          <Stack flex={1} overflow='auto'>
            {items.map((item, index) => (
              <Stack
                key={`${item.title}-${index}`}
                p='16px 12px 16px 24px'
                borderBottom='1px solid'
                borderColor='neutral.50'
                gap='16px'
                alignItems='flex-start'
              >
                <Typography variant='h3'>{item.title}</Typography>
                <Stack direction='row' alignItems='center' gap={1}>
                  <ColorStatus size={8} code={1} />
                  <Typography variant='footnote'>First active: {item.firstActive}</Typography>
                </Stack>
                <Chip label={item.tag} />
                <Stack gap={1}>
                  <Typography variant='footnote'>Utilization Rate</Typography>
                  <Stack direction='row' alignItems='center' gap={2}>
                    <Typography variant='h3'>{item.utilizationRate}%</Typography>
                    <Difference isDown={item.utilizationDifference < 0}>{item.utilizationDifference}pp from yesterday</Difference>
                  </Stack>
                </Stack>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </FormikProvider>
  )
}
