import {Box, useRadio} from '@chakra-ui/react';

const RadioCard = (props) => {
  const { getInputProps, getRadioProps } = useRadio(props)
  const input = getInputProps()
  const checkbox = getRadioProps()

  return (
    <Box as='label'>
      <input {...input} />
      <Box
                {...checkbox}
                bg="green.50"
                cursor='pointer'
                borderWidth='1px'
                borderRadius='md'
                boxShadow='md'
                _checked={{
                    bg: 'green.500',
                    color: 'white',
                    borderColor: 'green.600',
                }}
                px={5}
                py={3}
            >
                {props.children}
            </Box>
        </Box>
    )
}
export default RadioCard
