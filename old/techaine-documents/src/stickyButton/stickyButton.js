import { Box } from "@mui/system";
import Fab from "@mui/material/Fab";

const StickyButton = () => {
  return (
    <Box display="flex" justifyContent="flex-end" marginTop={10} marginRight={-2}>
      <Fab color="primary" variant="extended" sx={{ position: "fixed",backgroundColor:"black",opacity:0.8 }} href="/Contract">
        {/* <NavigationIcon sx={{ mr: 1 }} /> */}
        Genereaza contract
      </Fab>
    </Box>
  );
};
export default StickyButton;
