import {
  Grid,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ContentContainer = ({ trekData }) => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item lg={12}>
          {trekData.map((index) => {
            return (
              <Accordion
                key={index.id}
                sx={{
                  ml: 5,
                  bgcolor: "#292C6D",
                  color: "#FAEDF0",
                  boxShadow: 0,
                  borderRadius: 5,
                  mt: 2,
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      sx={{ bgcolor: "#EC255A", borderRadius: "50%" }}
                    />
                  }
                >
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {index.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="p" sx={{ fontWeight: 300 }}>
                    {index.body}
                    <img src={`${index.image}?w=700&auto=format`} alt="" />
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default ContentContainer;
