import { useState } from 'react'

const ProgramForm = ({ setSplit }) => {

  const [moreSplits, setMoreSplits] = useState(true)
  const [equipment, setEquipment] = useState({
    "pullup": false,
    "dumbbell": false,
    "compound": false
  })
  const availability = (item) => {
    let obj = { ...equipment }
    obj[item] = !obj[item]
    setEquipment(obj)
  }
  const makePlan = (type) => {
    setSplit(type)
  }

  return (


    <div className="form grid">
      <form className="grid" >

        <div>
          <label>Equipment at your disposal</label>
          <label ><input onChange={() => availability("pullup")} type="checkbox" name="equipment" /><span className="multi-choice">Pull up bar</span></label>
          <label ><input onChange={() => availability("pullup")} type="checkbox" name="equipment" /><span className="multi-choice">None</span></label>
          <label ><input onChange={() => availability("dumbbell")} type="checkbox" name="equipment" /><span className="multi-choice">Dumbbells</span></label>
          <label ><input onChange={() => availability("compound")} type="checkbox" name="equipment" /><span className="multi-choice">Full gym equipment</span></label>
        </div>
        <div>
          <label>Choose your split</label>
          <label ><input onChange={() => makePlan(["Upper Body", "Lower Body"])} type="radio" name="split" /><span className="multi-choice">Upper - Lower Body</span></label>
          <label ><input onChange={() => makePlan(["Push", "Pull", "Legs"])} type="radio" name="split" /><span className="multi-choice">Push-Pull-Legs</span></label>
          <label ><input type="radio" name="split" /><span className="multi-choice">Full Body</span></label>
          <label ><input onChange={() => makePlan(["Chest", "Back", "Legs", "Shoulders", "Arms"])} type="radio" name="split" /><span className="multi-choice">Bodypart Split</span></label>
          {moreSplits ? <span className="multi-choice" onClick={() => setMoreSplits(false)}><b>. . .</b></span> : <>
            <label ><input onChange={() => makePlan(["Upper Body", "Lower Body", "Full Body"])} type="radio" name="split" /><span className="multi-choice">Upper-Lower-Full Body</span></label>
            <label ><input onChange={() => makePlan(["Push", "Pull", "Legs", "Full Body"])} type="radio" name="split" /><span className="multi-choice">PPL-Fully Body</span></label>
            <label ><input onChange={() => makePlan([])} type="radio" name="split" /><span className="multi-choice">Custom</span></label> </>
          }

        </div>

      </form>

    </div>
  )
}

export default ProgramForm