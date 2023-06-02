import {Box, IconButton, useTheme, InputBase} from '@mui/material'
import {React, useContext} from 'react'
import {colorModeContext, tokens} from '../../theme'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import SearchIcon from '@mui/icons-material/Search'

const Topbar = () => {
  // const theme = useTheme()
  // const colors = tokens(theme.palette.mode)
  // const name = 'ali'
  //const colorMode = useContext(colorModeContext)

  return (
    <>
      <Box display='flex' justifyContent='space-between' p='2'>
        <Box display='flex' backgroundColor='#434957' borderRadius='3px'>
          <InputBase sx={{ml: 2, flex: 1}} placeholder='search' />
        </Box>
        <IconButton></IconButton>
        cdsdsvdfvdfs
      </Box>
      <div>cdcdcddsdfvgntnyjy</div>
    </>
  )
}

export default Topbar
