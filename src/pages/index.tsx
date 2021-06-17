import { Box, Grid } from '@material-ui/core'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'

export default function Dashboard() {
  return (
    <Box> 
      <Header />
      <Box>
        <Sidebar />
        
      </Box>
    </Box>
  )
}
