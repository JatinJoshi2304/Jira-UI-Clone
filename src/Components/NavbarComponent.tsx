import SwitchLeftIcon from "@mui/icons-material/SwitchLeft";
import AppsIcon from "@mui/icons-material/Apps";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import Person2Icon from "@mui/icons-material/Person2";
import AddIcon from "@mui/icons-material/Add";
import JeraIcon from "../assets/JeraIcon.png";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Dashboard from "../Pages/Dashboard";

const drawerWidth = 240;

export default function ClippedDrawer() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          background: "#1f1f21",
        }}
      >
        <Toolbar>
          <div className="left w-1/8 flex justify-between ">
            <Stack direction="row" spacing={1}>
              <IconButton aria-label="Switch">
                <SwitchLeftIcon className="text-[#BFC1C4]" />
              </IconButton>
              <IconButton aria-label="App">
                <AppsIcon className="text-[#BFC1C4]" />
              </IconButton>
              <img className="h-9" src={JeraIcon} />
            </Stack>
          </div>
          <div className="center flex items-center gap-2 justify-center w-4/5">
            {/* <SearchIcon className="absolute " /> */}
            <input
              className="input w-3/4 p-1 pl-[25px] border border-[#BFC1C4] rounded-[6px]"
              type="text"
              placeholder="Search Jira"
            />
            <Button className="text-[#BFC1C4]" variant="contained" size="small">
              <AddIcon className="text-[#BFC1C4] h-3.5" />
              <h1 className="text-[#BFC1C4] font-bold">Create</h1>
            </Button>
          </div>
          <div className="right text-[#BFC1C4]">
            <Stack direction="row" spacing={1}>
              <IconButton aria-label="Notification">
                <NotificationsNoneIcon className="text-[#BFC1C4]" />
              </IconButton>
              <IconButton aria-label="Help">
                <HelpOutlineIcon className="text-[#BFC1C4]" />
              </IconButton>
              <IconButton aria-label="Settings">
                <SettingsIcon className="text-[#BFC1C4]" />
              </IconButton>
              <IconButton aria-label="Profile">
                <Person2Icon className="text-[#BFC1C4]" />
              </IconButton>
            </Stack>
          </div>

          {/* <Typography variant="h6" noWrap component="div">
            Clipped drawer
          </Typography> */}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,

          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box
          sx={{
            overflow: "auto",
            height: "100vh ",
            background: "#1f1f21",
            color: "#bfc1c4",
          }}
        >
          <List>
            {[
              "For you",
              "Recent",
              "Starred",
              "Apps",
              "Plans",
              "Projects",
              "Filters",
              "Dashboards",
              "Teams",
            ].map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  {/* <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon> */}
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, pl: 5, pt: 8 }}>
        {/* <Dashboard /> */}
      </Box>
    </Box>
  );
}
