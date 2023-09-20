import ExerciseForm from "./ExerciseForm"

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
<li  tabIndex={-1} onBlur={blurring(index)} onClick={focusExo(index)} className={"exercise "+(toggleForm===index?"active-form":"")}>
 <div className="scroll-btn">{upBtn}{downBtn}</div>   
  {toggleForm===index?<ExerciseForm 
crudExercise={crudExercise} blurring={blurring} active={active} routine={routine} value={value} setReps={setReps}
 setValue={setValue} setSets={setSets} 
setRoutine={setRoutine} exercises={exercises} setExercises={setExercises}handleChange={handleChange}
/>:<> {exerciseName} {reps}x{sets}  
 </>}
 <div className="delete-btn">{deleteBtn}</div> 
</li>
    )
}

export default Exercise
