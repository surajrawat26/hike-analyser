import { Grid, Typography } from "@mui/material";
const TrekName = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item lg={12} sx={{ mb: 2, mt: 5, color: "#FAEDF0" }}>
          <Typography variant="h4" sx={{ fontWeight: 900 }}>
            Brahmatal trek
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};
export default TrekName;
