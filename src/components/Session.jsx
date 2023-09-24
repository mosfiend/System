import SessionForm from "./SessionForm"
import Exercise from "./Exercise"
import ExerciseForm from "./ExerciseForm"
import RadioCard from "./RadioCard.jsx"
import { useState, useEffect } from "react"
import { FaTimes,FaSortDown,FaSortUp } from "react-icons/fa";
import { Box, HStack, Heading, Button, List, ListItem,Text, Input, Flex, useRadioGroup } from '@chakra-ui/react';

const Session = ({ split, exercises, setExercises, setStep }) => {
    const [toggleForm, setToggleForm] = useState(-1)

    const [active, setActive] = useState(0)
    const [routine, setRoutine] = useState([[], [], [], [], [], []])

    const [value, setValue] = useState("")
    const [sets, setSets] = useState("")
    const [reps, setReps] = useState("")

    const handleChange = (e) => {
        e.target.id === "value" ? setValue(e.target.value) : e.target.id === "reps" ? setReps(e.target.value) : setSets(e.target.value)
    }
    const crudExercise = (e) => {
        e.preventDefault()
        let newExercise = { name: value, reps: reps, sets: sets }
        let newExercises = [...exercises]
        let newRoutine = routine
        if (toggleForm === -1) {
            // if (!value | !reps | !sets) {
            //     alert("Exercise can't be empty")
            //     return
            // }
            newExercises.push(newExercise)
        }
        else if (toggleForm < exercises.length && toggleForm >= 0) {
            ////////////////// UPDATE EXERCISE
            if (!value | !reps | !sets) {
                return
            }
            newExercises[toggleForm] = newExercise
            setToggleForm(-2)

        }
        setExercises(newExercises)
        newRoutine[active] = [...newExercises]
        setRoutine(newRoutine)
    }

    const blurring = (index = -1) => e => {
        if (e.currentTarget.contains(e.relatedTarget)) {
            return
        }
        if (!value ||
            (index >= 0 && value === exercises[index].name && sets === exercises[index].sets && reps === exercises[index].reps)) setToggleForm(-2)
    }
    const addExercise = () => {
        if (toggleForm === -1) return
        setValue("")
        setToggleForm(-1)
    }
    const activate = (x) => {
        setActive(x)
        setExercises(routine[x])
    }

    const moveUp = (y) => {
        let replica = [...exercises]
        if (y !== 0) {
            replica.splice(y - 1, 0, replica[y])
            replica.splice(y + 1, 1)

            setExercises(replica)
            setToggleForm(toggleForm - 1)
        }
        else {
            alert("already on top!")
        }
    }
    const moveDown = (z) => {
        let replica = [...exercises]
        if (z + 1 !== replica.length) {
            replica.splice(z + 2, 0, replica[z])
            replica.splice(z, 1)

            setExercises(replica)
            setToggleForm(toggleForm + 1)
        }
        else {
            alert("only up from here")
        }
    }
    const remove = (a) => {
        let replica = [...exercises]
        replica.splice(a, 1)

        setExercises(replica)
    }
    const [curSplit, setCurSplit] = useState(0)
    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'routine',
        defaultValue: split[0],
        onChange: () => {activate(curSplit)}
        
    })
    const group = getRootProps()
    return (
        <>
            <HStack {...group}>
                {
                    split.length > 0 && split.map((value, i) =>{
                        const radio = getRadioProps({value})
                        return <Box
                            key={i}
        onClick={ () => {setCurSplit(i) }}
                        >
                            <RadioCard {...radio} >
                            {value}
                        </RadioCard>
                        </Box>
                    })
                }
            </HStack>
            <SessionForm />

            <Box>
                <Flex flexDirection="column" alignItems="center">
                    <Box
                        tabIndex={-1}
                        onBlur={blurring()}
                        onClick={ () => { addExercise() } } 
                    >
                        {
                            (toggleForm === -1) 
                                ? <ExerciseForm
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
                                : <Button>+</Button>}
                    </Box>
                    {
                        exercises.length === 0 
                            ? <Box>
                                <Text>
                                    Add some exercises!
                                </Text>
                            </Box>
                            : <>
                                {
                                    exercises.map((exercise, index) => <Exercise
                                        index={index}
                                        key={index}
                                        toggleForm={toggleForm}
                                        setToggleForm={setToggleForm}
                                        upBtn={ 
                                            <Button onClick={() => moveUp(index)}>
                                                <FaSortUp />
                                            </Button>
                                        }
                                        downBtn={
                                            <Button onClick={() => moveDown(index) } >
                                                <FaSortDown  />
                                            </Button>
                                        }
                                        deleteBtn={
                                            <Button onClick={ () => remove(index) } >
                                                <FaTimes  />
                                            </Button>
                                        }
                                        exerciseName={exercise.name}
                                        reps={exercise.reps}
                                        sets={exercise.sets}
                                        active={active}
                                        ///////////////FORM DEPENDENDENCIS
                                        crudExercise={crudExercise}
                                        blurring={blurring}
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
                                    )}
                            </>
                    }
                </Flex>

                {
                    split.length === 0 
                        ? <Box>
                            <Button onClick={() => setStep(1)}>
                                <Text>
                                    Full program customization
                                </Text>
                            </Button>
                        </Box> :
                        <Box> 
                            <Button onClick={() => setStep(1)}>
                                <Text>
                                    Back to program selection
                                </Text>
                            </Button>
                        </Box>
                }
                {
                    split.length > 0 && <Box>
                        {
                            toggleForm > 0 && <Box>
                                <Button onClick={() => setActive(active - 1)} >
                                    <Text>
                                        Back
                                    </Text>
                                </Button>
                            </Box>
                        }
                        {
                            toggleForm === routine.length - 1 ? <Box>
                                <label htmlFor="Program review">
                                    <Input 
                                        type="submit"
                                        onSubmit={() => { setStep(4) }}
                                    />
                                </label>
                            </Box> :
                                <Box>
                                    <Button onClick={() => setActive(active + 1)} >
                                        <Text>
                                            forward
                                        </Text>
                                    </Button>
                                </Box>
                        }
                    </Box>
                }
            </Box>
        </>
    )
}

export default Session
