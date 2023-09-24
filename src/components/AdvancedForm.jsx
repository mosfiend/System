import {FaAngleDoubleDown,FaAngleDoubleUp} from "react-icons/fa"
import { Box, VStack,Heading, IconButton, Button,List,ListItem,Text} from '@chakra-ui/react';

const AdvancedForm = ({collapse, setCollapse}) => {
    const onCollapse = () => {
        let temp = !collapse
        setCollapse(temp)}  

    return ( 
        <Box >


            {!collapse && "No such thing"}

            <VStack  onClick={onCollapse}> {collapse===true?
                <>
                <Box>
                    <Text>
                    Show Advanced Settings
                    </Text>
                </Box>
                <Box>
                    <FaAngleDoubleDown/>
                </Box>
                    </>
                :
                <>
                <Box>
                    <Text>Hide advanced Settings
                    </Text>
                </Box>
                <Box>
                    <FaAngleDoubleUp />
                </Box>
                </>
            }
            </VStack>
        </Box>

    )
}

export default AdvancedForm
