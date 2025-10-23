import { logoutUser } from "@/services/action/logoutUser";
import { getUserInfo } from "@/services/auth.service";
import { Button, Stack } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthButton = () => {
  const userInfo = getUserInfo();
  const router = useRouter();

  const handleLogOut = () => {
    logoutUser(router);
  };

  return (
    <>
      {userInfo?.userId ? (
        <Stack direction="row" spacing={4}>
          <Button variant="outlined" component={Link} href="/dashboard">
            Dashboard
          </Button>
          <Button color="error" onClick={handleLogOut}>
            Logout
          </Button>
        </Stack>
      ) : (
        <Button component={Link} href="/login">
          Login
        </Button>
      )}
    </>
  );
};

export default AuthButton;
