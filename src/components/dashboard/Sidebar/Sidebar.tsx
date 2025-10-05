import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import logo from "@/assets/svgs/logo.svg";
import Link from "next/link";

const Sidebar = () => {
  const drawer = (
    <div>
      <Stack
        component={Link}
        href="/"
        direction="row"
        alignItems="center"
        justifyContent="center"
        gap={2}
        sx={{
          mt: 1,
          my: 1,
        }}
      >
        <Image src={logo} width={40} height={40} alt="logo" />
        <Typography
          sx={{
            cursor: "pointer",
          }}
        >
          MUI Healthcare
        </Typography>
      </Stack>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
  return <Box>{drawer}</Box>;
};

export default Sidebar;
