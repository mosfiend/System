import { Grid,Box, Button, Text} from '@chakra-ui/react';
const Menu = ({setStep}) => {
    const move = (page)=> {
        setStep(page)
    }

    return (
        <Grid>
                <Box>
            <Button onClick={()=>move(2)}>
                <Text>
                    Quick workout
                </Text>
            </Button>
                </Box>

                <Box>
            <Button onClick={()=>move(2)}>
                <Text> 
                    Custom training session
                </Text>
            </Button>
                </Box>

                <Box>
            <Button onClick={()=>move(3)}>
                <Text> Create a workout Program
                </Text>
            </Button>
                </Box>

        </Grid>
    )
}

export default Menu
