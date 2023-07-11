import {
  Card,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton,
} from "@mui/material";
import { Clear, Create } from "@mui/icons-material";

const TodoList = () => {
  return (
    <Card>
      <List
        sx={{
          bgcolor: "background.paper",
          overflow: "auto",
        }}
        dense
        component="div"
        role="list"
      >
        <ListItem role="listitem" button>
          <ListItemIcon>
            <Checkbox tabIndex={-1} disableRipple />
          </ListItemIcon>
          <ListItemText>todo1</ListItemText>
          <IconButton color="secondary" aria-label="Delete">
            <Create fontSize="small" />
          </IconButton>
          <IconButton color="secondary" aria-label="Delete">
            <Clear fontSize="small" />
          </IconButton>
        </ListItem>
        <ListItem role="listitem" button>
          <ListItemIcon>
            <Checkbox tabIndex={-1} disableRipple />
          </ListItemIcon>
          <ListItemText>todo2</ListItemText>
          <IconButton color="secondary" aria-label="Delete">
            <Create fontSize="small" />
          </IconButton>
          <IconButton color="secondary" aria-label="Delete">
            <Clear fontSize="small" />
          </IconButton>
        </ListItem>
      </List>
    </Card>
  );
};

export default TodoList;
