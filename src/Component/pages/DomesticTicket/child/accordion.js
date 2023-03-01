import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RangeSlider from "./rangecomponent";

const SimpleAccordion = (props) => {
  return (
    <div>

      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography> نتایج:12</Typography>
        </AccordionSummary>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><strong> ساعت حرکت</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div style={{ display: "flex", justifyContent: 'space-between' }}><span>23:00</span><span>6:00</span></div>
            <RangeSlider />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><strong> نوع بلیط </strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" >
                <strong style={{ fontSize: "17px" }}>سیستمی</strong>
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"  />
              <label className="form-check-label" >
                <strong style={{ fontSize: "17px" }}>چارتر</strong>
              </label>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><strong> شرکت های هواپیمایی      <span style={{ color: "grey" }}>به ریال</span> </strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {props.data.map(obj => {
              return (
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" >
                    <strong style={{ fontSize: "17px" }}> {obj.logoName}<img width={20} src={obj.logo} alt="1" /></strong>
                  </label>
                </div>
              )
            })}



          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
export default SimpleAccordion;