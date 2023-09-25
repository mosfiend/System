import {useState,useEffect} from 'react'
import {Text, HStack, Box, useRadioGroup,useCheckboxGroup } from '@chakra-ui/react';
import RadioCard from './RadioCard.jsx';
import CheckCard from './CheckCard.jsx';

const ProgramForm = ({setSplit}) => {
    const equipmentNames = [
        "Pull up bar",
        "Dumbbells",
        "Full gym equipment",
    ];
    const splitNames = [
        "Upper/Lower Body",
        "Push/Pull/Legs",
        "Full Body",
        "Body part",
        "Upper/Lower/Full Body",
        "Push/Pull/Legs/Full Body",
        "Custom",
    ];

    const splitsArray = [
        ["Upper Body", "Lower Body"],
        ["Push", "Pull", "Legs"],
        ["Full Body"],
        ["Chest", "Back", "Legs", "Shoulders", "Arms"],
        ["Upper Body", "Lower Body", "Full Body"],
        ["Push", "Pull", "Legs", "Full Body"],
        [], // Empty array for the "Custom" option
    ];
    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'split',
        defaultValue: 'Upper/Lower Body',
        onChange:()=>{
            makePlan(splitsArray[idx],idx)
        }
    })
    const group = getRootProps()
    const { value, getCheckboxProps } = useCheckboxGroup({
        defaultValue: [],
    })
    const [idx, setIdx] = useState(0)
    const [moreSplits,setMoreSplits] = useState(true)
    const [equipment,setEquipment]=  useState({
        "pullup":false,
        "dumbbell":false,
        "compound":false
    })
    const availability = (item) => {
        let obj = {...equipment}
        obj[item]=!obj[item]
        setEquipment(obj)
    }
    const makePlan = (type) => {
        setSplit(type)    
    }

    return (
        <Box >

            <HStack >
                <Text>
                    Equipment at your disposal: 
                </Text>
                {
                    equipmentNames.map((equipment,i)=>{
                        return  <Box
                            key={i}
                            onClick={()=>{setIdx(i) }}
                        >
                            <CheckCard
                                {...getCheckboxProps({value:equipment})}
                            >
                                {equipment}
                            </CheckCard>  
                        </Box>  
                    })
                }
            </HStack>

            <Text>Choose your split 
            </Text>
            <HStack {...group}>
                {
                    splitNames.map((value,i)=>{
                        const radio = getRadioProps({ value })
                        return  <Box
                            key={i}
                            onClick={()=>{setIdx(i) }}
                        >
                            <RadioCard
                                {...radio}
                            >
                                {value}
                            </RadioCard>  
                        </Box>  
                    })
                }
            </HStack>

        </Box>
    )
}

export default ProgramForm
