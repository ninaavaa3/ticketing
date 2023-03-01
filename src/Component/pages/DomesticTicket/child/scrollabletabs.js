import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


 const ScrollableTabsButtonAuto=(props)=> {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: { xs:300, sm: 950 }, bgcolor: 'background.paper',py:3,px:3,direction:'ltr',border:'1px solid gray',borderRadius:'5px',overflow:'inherit' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >{props.data.map(obj=>{return(

        <Tab label={obj.goDate} key={obj.id}/>

      )
      
      })}
       
      </Tabs>
    </Box>
  );
}
export default ScrollableTabsButtonAuto;