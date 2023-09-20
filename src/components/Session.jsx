import SessionForm from "./SessionForm"
import Exercise from "./Exercise"
import ExerciseForm from "./ExerciseForm"
import { useState, useEffect } from "react"
import { FaSortUp } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { Box, Heading, Button,List,ListItem,Text} from '@chakra-ui/react';

const Session = ({ split, exercises, setExercises, setStep }) => {
  const [toggleForm, setToggleForm] = useState(-1)
  ////routine
  const [active, setActive] = useState(0)
  const [routine, setRoutine] = useState([[], [], [], [], [], []])
  ////exercise
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
      console.log(toggleForm)                          ///////////////// CREATE EXERCISE
      if (!value | !reps | !sets) {
        alert("Exercise can't be empty")
        return
      }
      newExercises.push(newExercise)
      console.log(newExercises)
    }
    else if (toggleForm < exercises.length && toggleForm >= 0) {
      console.log("index")     ////////////////// UPDATE EXERCISE
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
  /////////////////////////// EXERCISE METHODS ///////////////////////////////////////////////////////////
  const moveUp = (y) => {
    let replica = [...exercises]
    if (y !== 0) {
      replica.splice(y - 1, 0, replica[y])
      replica.splice(y + 1, 1)

      console.log(replica, exercises)
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


  useEffect(() => { console.log(reps, sets) }, [reps, sets])

  const routineNavigation = {
    "display": "grid",
    "gridTemplateColumns": "1fr 1fr",
    "justifyContent": (active === 0 ? "space-around" : active === (routine.length - 1)) ? "grid-end" : "space-between"
  }

  return (
    <Box>

      <List>
        {split.length > 0 && split.map((sesh, index) =>
          <ListItem onClick={() => activate(index)}
            key={index}><Text>{sesh}</Text></ListItem>)}
        <ListItem> </ListItem>
      </List>
      <SessionForm />


      <Box>



        <List>
          {exercises.length === 0 ? <Box><Text>Add some exercises!</Text></Box> :
            <>
              {exercises.map((exercise, index) => <Exercise index={index} key={index} toggleForm={toggleForm} setToggleForm={setToggleForm}
                upBtn={<Button onClick={() => moveUp(index)}><span><FaSortUp  /></span></Button>}
                downBtn={<Button onClick={() => moveDown(index)}><span><FaSortDown  /></span></Button>}
                deleteBtn={<Button onClick={() => remove(index)}><span><FaTimes  /></span></Button>}
                exerciseName={exercise.name} reps={exercise.reps} sets={exercise.sets} active={active}
                ///////////////FORM DEPENDENDENCIS
                crudExercise={crudExercise} blurring={blurring} routine={routine} value={value} setReps={setReps} setValue={setValue} setSets={setSets}
                setRoutine={setRoutine} exercises={exercises} setExercises={setExercises} handleChange={handleChange}
              ///////////////////////////////////
              />)}</>}
          <ListItem tabIndex={-1} onBlur={blurring()} onClick={() => { addExercise() }} >
            <Box >
              {(toggleForm === -1) ? <ExerciseForm crudExercise={crudExercise} blurring={blurring} active={active} routine={routine} value={value} setReps={setReps} setValue={setValue} setSets={setSets}
                setRoutine={setRoutine} exercises={exercises} setExercises={setExercises} handleChange={handleChange} /> :
                <>+</>}
            </Box>
          </ListItem>

        </List>

        {split.length === 0 ? <Box>
        <Button onClick={() => setStep(1)}>
        <Text>Full program customization
        </Text>
        </Button>
        </Box> :
          <Box><Button onClick={() => setStep(1)}><Text>Back to program selection</Text></Button></Box>}
        {split.length > 0 && <Box>
          {toggleForm > 0 && <Box><Button onClick={() => setActive(active - 1)} ><Text>Back</Text></Button></Box>}
          {toggleForm === routine.length - 1 ? <Box><label htmlFor="Program review"><input type="submit" onSubmit={() => { setStep(4) }}
             /></label></Box> :
            <Box><Button onClick={() => setActive(active + 1)} ><Text>forward</Text></Button></Box>
          }

        </Box>}
      </Box>


    </Box>
  )
}

export default Session
