import SwitchLeftIcon from "@mui/icons-material/SwitchLeft";
// import SwitchRightIcon from '@mui/icons-material/SwitchRight';
import AppsIcon from "@mui/icons-material/Apps";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import Person2Icon from "@mui/icons-material/Person2";
// import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import JeraIcon from "../assets/JeraIcon.png";

const NavbarComponent = () => {
  return (
    <nav className="bg-[#1f1f21] text-[#BFC1C4] p-1 flex justify-between items-center w-full">
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
    </nav>
  );
};

export default NavbarComponent;
