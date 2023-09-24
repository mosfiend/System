import React from 'react'
import {HStack, Select, Box, ListItem,Input,FormControl} from '@chakra-ui/react';

const ExerciseForm = (                /*form*/ {crudExercise,routine,setRoutine, exercises, setExercises, active,value,reps,setSets,sets,
    setReps,setValue, handleChange}) => {
    return (
        <form onSubmit={crudExercise}>
            <HStack >
            <Box >
          <FormControl isRequired>
                    <Input onChange={handleChange}
                        id="value"
                        value={value}
                        type="text"
                        list="library"
                        placeholder="Exercise name"
                    />
                    <datalist
                        id="library"
                    >
                        <option value="push ups"/>
                        <option value="pull ups"/>
                        <option value="sit ups"/>
                        <option value="squats"/>
                    </datalist>
          </FormControl>
            </Box >
            <Box >
          <FormControl isRequired>
                    <Input   onChange={handleChange}
                        id="reps"
                        value={reps}
                        type="number"
                        min={1}
                        placeholder="Reps"
                    />
          </FormControl>
            </Box >
            <Box >
          <FormControl>
                    <Input   onChange={handleChange}
                        id="sets"
                        value={sets}
                        type="number"
                        min={1}
                        max={12}
                        placeholder="Sets"
                    />
          </FormControl>
            </Box >
            <Box >
          <FormControl>
                <Input
                    style={{display:'none'}}
                    type="submit"
                />
          </FormControl>
            </Box >
            </HStack>
        </form> )
}

export default ExerciseForm
