import {useState} from "react"
import AdvancedForm from "./AdvancedForm"
import { Box, Heading, Button,List,ListItem,Text} from '@chakra-ui/react';

function SessionForm() {

const [collapse,setCollapse] =useState(true)

/////////////////////////////// RENDER ///////////////////////////////////////////////////////////////////////////////////////
  return (<Box>

    <form>

    <Box>
<AdvancedForm collapse={collapse} setCollapse={setCollapse}/>


    </Box>
    </form>
   

    </Box>


  );
}

export default SessionForm;
