import React from 'react'
import ProgramForm from "./ProgramForm"
import {Box, Button} from '@chakra-ui/react';
const Program = ({setStep,setSplit}) => {

    return (
        <Box>
            <ProgramForm setSplit={setSplit}/>
            <Box >   
                <Button onClick={()=>setStep(2)}>
                        Proceed to Session Customization
                </Button> 
            </Box>
        </Box>
    )
}

export default Program
