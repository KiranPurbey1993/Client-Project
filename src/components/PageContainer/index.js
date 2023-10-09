import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material"

const PageContainer = (props) => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Typography
          flexGrow={1}
          sx={{ fontSize: "1.5rem", fontWeight: "bold" }}
        >
          {props.Component.title}
        </Typography>
        <Typography flexGrow={0}>
          Last Login : 5 May 2022, 11:40 AM (IST)
        </Typography>
      </Box>
      {props.children}
    </>
  )
}

export default PageContainer
