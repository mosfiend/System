import ExerciseForm from "./ExerciseForm"
import { HStack,ListItem, Grid,Box, Button, Text} from '@chakra-ui/react';

const Exercise = ({reps,sets, exerciseName,upBtn,downBtn,deleteBtn,    crudExercise, index,
    toggleForm,setToggleForm,blurring, active, routine, value, setReps,setSets, setValue,setRoutine,setExercises,exercises,
    handleChange

}) => {

    const focusExo = (index)=>(e) => {
        if (toggleForm===index) return
        if (e.currentTarget.contains(e.relatedTarget)) {
            return
        }
        setValue(exercises[index].name)
        setReps(exercises[index].reps)
        setSets(exercises[index].sets)
        setToggleForm(index)
    }

    return (
        <Box
            tabIndex={-1} 
            border="3px solid black"
        >
            <HStack>
                <Box 
                >
                    {upBtn}{downBtn}
                </Box>   
                {
                    toggleForm===index
                        ?<Box
                            onBlur={blurring(index)}>
                        <ExerciseForm 
                            crudExercise={crudExercise}
                            blurring={blurring}
                            active={active}
                            routine={routine}
                            value={value}
                            setReps={setReps}
                            setValue={setValue}
                            setSets={setSets} 
                            setRoutine={setRoutine}
                            exercises={exercises}
                            setExercises={setExercises}
                            handleChange={handleChange}
                        />
                        </Box>
                        :<Box 
                            onClick={focusExo(index)}
                        > 
                            {exerciseName} {reps}x{sets}  
                        </Box>
                }
                {deleteBtn}
            </HStack>
        </Box>
    )
}

export default Exercise
