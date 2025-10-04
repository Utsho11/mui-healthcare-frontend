import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import { Box } from "@mui/material";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          minHeight: "100vh",
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default layout;
