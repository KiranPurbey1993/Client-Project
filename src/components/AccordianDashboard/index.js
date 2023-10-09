import * as React from "react"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Badge, IconButton } from "@mui/material"
import MailIcon from "@mui/icons-material/Mail"

export default function SimpleAccordion(props) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge color="success">
                <MailIcon />
              </Badge>
            </IconButton>
            {props?.title}
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          {props.children ? (
            props.children
          ) : (
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
