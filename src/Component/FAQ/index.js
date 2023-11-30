import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./faq.css";

export default function FAQ(){
  return (
    <div className="faqQuestions">
      <h1 className="faqTitle">FAQs</h1>
        <div style={{marginBottom:"24px"}}>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className="faqAccordionSummary"
          sx={{ borderRadius: '7px' }}
        >
          <Typography className="Faq">Is QTify free to use?</Typography>
        </AccordionSummary>
        <AccordionDetails className="faqAccordionDetails">
          <Typography >Yes! It is 100% free, and has 0% ads!</Typography>
        </AccordionDetails>
      </Accordion>
        </div>
        <div>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className="faqAccordionSummary"
          sx={{ borderRadius: '7px' }}
        >
          <Typography className="Faq">Can I download and listen to songs offline?</Typography>
        </AccordionSummary>
        <AccordionDetails className="faqAccordionDetails">
          <Typography>
            Sorry, unfortunately we don't provide the service to download any
            songs.
          </Typography>
        </AccordionDetails>
      </Accordion>
        </div>
    </div>
  );
};


