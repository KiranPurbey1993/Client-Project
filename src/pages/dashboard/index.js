import * as React from "react"
import SimpleAccordion from "../../components/AccordianDashboard"
import {
  Avatar,
  Box,
  Button,
  Grid,
  LinearProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Paper,
} from "@mui/material"
import PaginatedTable from "../../components/PaginationTable"
import { Mail, Wifi } from "@mui/icons-material"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Typography from "@mui/material/Typography"
import TreeViewComponent from "../../components/TreeViewComponent"
import LinearDeterminate from "../../components/LinearProgress"

const Iteams = [
  { name: "Enquiry" },
  { name: "Profile Setup" },
  { name: "Settings" },
  { name: "Billings" },
  { name: "Dasboard" },
]

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}

const IconImage = "/images/Yati_logo.jpeg"

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

const Dashboard = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Admin / Sales Person" {...a11yProps(0)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Grid container spacing={2}>
          {Iteams.map((item) => {
            return (
              <Grid item xs={12} md={3}>
                {" "}
                <SimpleAccordion title={item.name}>
                  {item.name === "Profile Setup" ? (
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <Avatar
                        src={"/static/images/avatar/2.jpg"}
                        sx={{
                          width: "50%",
                          height: "50%",
                          marginTop: "2%",
                        }}
                      />
                      <Box sx={{ width: "100%", marginTop: "5%" }}>
                        <LinearDeterminate />
                      </Box>
                      <Button variant="outlined" sx={{ marginTop: "5%" }}>
                        Complete Profile
                      </Button>
                    </Box>
                  ) : item.name === "Dasboard" ? (
                    <Box>
                      <List>
                        <ListItem>
                          <ListItemIcon>
                            <Wifi />
                          </ListItemIcon>
                          <ListItemText
                            id="switch-list-label-wifi"
                            primary="Wi-Fi"
                          />
                          <ListItemIcon>
                            <Wifi />
                          </ListItemIcon>
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <Wifi />
                          </ListItemIcon>
                          <ListItemText
                            id="switch-list-label-wifi"
                            primary="Wi-Fi"
                          />
                          <ListItemIcon>
                            <Wifi />
                          </ListItemIcon>
                        </ListItem>
                      </List>
                    </Box>
                  ) : (
                    <TreeViewComponent></TreeViewComponent>
                  )}
                </SimpleAccordion>
              </Grid>
            )
          })}
        </Grid>
      </TabPanel>
    </>
  )
}

Dashboard.title = "Dashboard"
Dashboard.authentication = true

export default Dashboard
