import { Drawer, List, ListItem, Toolbar, ListItemText, makeStyles, createStyles, ListItemIcon, Typography } from "@material-ui/core";
import GroupIcon from '@material-ui/icons/Group';
import RateReviewIcon from '@material-ui/icons/RateReview';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

const useStyles = makeStyles((theme) =>
  createStyles({
    drawer: {
      width: 240,
      flexShrink: 0,
      top: 1,
    },
    drawerPaper: {
      width: 240,
    },
    drawerContainer: {
      overflow: 'auto',
      marginLeft: 30,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);

export function Sidebar() {
  const classes = useStyles()

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
    <div className={classes.drawerContainer}>
      <List>
          <ListItem button >
            <ListItemIcon><GroupIcon /></ListItemIcon>
            <ListItemText primary='Turmas' />
          </ListItem>
          <ListItem button >
            <ListItemIcon><CalendarTodayIcon /></ListItemIcon>
            <ListItemText primary='A enviar' />
          </ListItem>
          <ListItem button >
            <ListItemIcon><RateReviewIcon /></ListItemIcon>
            <ListItemText primary='A corrigir' />
          </ListItem>
      </List>
    </div>
  </Drawer>  
  )
}