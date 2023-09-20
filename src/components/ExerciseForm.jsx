import React from 'react'

const ExerciseForm = (                /*form*/ {crudExercise,routine,setRoutine, exercises, setExercises, active,value,reps,setSets,sets,
     setReps,setValue, handleChange}) => {
    return (
<form onSubmit={crudExercise}>
<div className="form-control">
<label  className="form-block">
<input   onChange={handleChange} id="value" value={value} type="text" list="library" placeholder="EXERCISE NAME" className="text" />
<datalist id="library">
  <option value="push ups"/>
  <option value="pull ups"/>
  <option value="sit ups"/>
  <option value="squats"/>
</datalist>
</label >
<label className="form-block">
<input   onChange={handleChange} id="reps" value={reps} type="number" min={1} placeholder="REPS" className="num" />
</label>
<label className="form-block">
<input   onChange={handleChange} id="sets"value={sets} type="number" min={1} max={12} placeholder="SETS" className="num" />
</label>
<input style={{display:'none'}} className="btn" type="submit"/>
</div>
</form> )
}

export default ExerciseForm
