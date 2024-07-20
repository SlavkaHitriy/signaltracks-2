import { Stack } from '@mui/material'
import React from 'react'
import { DefaultInput } from '@/ui/DefaultInput/index.js'
import { DefaultSelect } from '@/ui/DefaultSelect/index.js'

export const AssetTypeModal = () => {
  return (
    <Stack gap={3} maxWidth={400}>
      <DefaultInput helperText='Group Name' name="assetType.groupName" />
      <DefaultSelect
        sx={{
          '.MuiInputBase-root': {
            height: 40,
          },
        }}
        helperText='Asset Category'
        name="assetType.category"
      />
      <DefaultInput helperText='Description' name="assetType.description" />
      <DefaultSelect
        sx={{
          '.MuiInputBase-root': {
            height: 40,
          },
        }}
        helperText='Status'
        name="assetType.status"
      />
    </Stack>
  )
}
