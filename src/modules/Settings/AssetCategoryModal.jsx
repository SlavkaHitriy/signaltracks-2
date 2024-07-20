import { Stack } from '@mui/material'
import React from 'react'
import { DefaultInput } from '@/ui/DefaultInput/index.js'
import { DefaultSelect } from '@/ui/DefaultSelect/index.js'

export const AssetCategoryModal = () => {
  return (
    <Stack gap={3} maxWidth={400}>
      <DefaultInput helperText='Group Name' name="assetCategory.groupName" />
      <DefaultSelect
        sx={{
          '.MuiInputBase-root': {
            height: 40,
          },
        }}
        helperText='Status'
        name="assetCategory.status"
      />
      <DefaultInput helperText='Description' name="assetCategory.description" />
    </Stack>
  )
}
