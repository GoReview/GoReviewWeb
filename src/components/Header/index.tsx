import { Avatar, Box, Typography } from "@material-ui/core";

export function Header() {
  return (
    <Box 
      component="header" 
      display="flex" 
      alignItems="center" 
      justifyContent="space-between" 
      height={80} 
      marginX="auto"
      paddingX={6}
    > 
      <Typography variant="h5">GoReview</Typography>
      <Box component="div" display="flex" alignItems="center" justifyContent="right">
        <Box component="div" marginRight={4} textAlign="right">
          <Typography>Nome completo</Typography>
          <Typography>Endereço de email</Typography>
        </Box>

        <Avatar alt="Nome" />
      </Box>
    </Box>
  )
}