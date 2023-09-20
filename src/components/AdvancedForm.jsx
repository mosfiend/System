import {FaAngleDoubleDown,FaAngleDoubleUp} from "react-icons/fa"
import { Box, Heading, Button,List,ListItem,Text} from '@chakra-ui/react';

const AdvancedForm = ({collapse, setCollapse}) => {
    const onCollapse = () => {
        let temp = !collapse
        setCollapse(temp)}  

    return ( 
        <Box className="advanced-form">


            {!collapse && "No such thing"}



            <Box  onClick={onCollapse}> {collapse===true?
                <Box>
                    <Text>Show Advanced Settings
                    </Text><FaAngleDoubleDown style={{color:"#DDD"}}/>
                </Box>:
                <Box>
                    <Text>Hide advanced Settings
                    </Text>
                    <FaAngleDoubleUp style={{color:"#DDD"}}/>
                </Box>
            }
            </Box>
        </Box>

    )
}

export default AdvancedForm
