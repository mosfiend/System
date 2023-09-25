import Session from "./components/Session"
import Menu from "./components/Menu"
import Program from "./components/Program"
import {useState} from "react"
import {Text, Flex, Box, Heading, Button} from '@chakra-ui/react';

function App() {
    const [exercises,setExercises] = useState([/*{name:"Push ups",reps:"10",sets:"10"}*/])
    const [step,setStep] = useState("")
    const [split,setSplit] = useState([])

    return (
        <Flex alignItems="center" w="80vw" flexDirection="column">
            <Box>
                <Heading as="h1" fontSize="4xl" >Workout Planner</Heading>
            </Box>
            <Box>
                {
                    step===""
                        ? <Menu  setStep={setStep}/>
                        :step===2 ?
                            <Box>
                            <Flex justifyContent="space-between">
                            <Box>
                                <Heading as="h3" fontSize="3xl">
                                    Workout Customization
                                </Heading>
                            </Box>
                                <Return setStep={setStep}/>
                            </Flex>
                                <Session  setStep={setStep} split={split} exercises={exercises} setExercises={setExercises}/>
                            </Box>
                            :
                            <Box>
                            <Flex justifyContent="space-between" >
                            <Box>
                                <Heading as="h3" fontSize="3xl">
                                            Choose Your Workout Plan
                                </Heading>
                            </Box>
                                <Return setStep={setStep}/>
                            </Flex>
                                <Program setStep={setStep} setSplit={setSplit}/>
                            </Box>
                }
            </Box>
        </Flex>
    );
    }

function Return ({setStep}) {
                                return(<Box>
                                <Button onClick={()=>setStep("")}>
                                    <Text>
                                        Back to Menu
                                    </Text>
                                </Button>
                                </Box>)

}


export default App;
