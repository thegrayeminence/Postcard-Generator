import {
    FormControl, Checkbox, Textarea,
    FormLabel, Input, Text, Spacer, InputLeftElement, InputRightElement, InputGroup,
    FormErrorMessage, Select, FormHelperText, Stack, Box
} from "@chakra-ui/react"

import { CheckIcon, EmailIcon, ArrowRightIcon, InfoOutlineIcon, ChevronRightIcon, AttachmentIcon, InfoIcon } from "@chakra-ui/icons";

const CardEditorForm = () => {
    return (
        <Box>
            <Box py='1rem'>
                <Stack spacing={6} direction='row'>
                    <Checkbox colorScheme='blue' >
                        Map Pin
                    </Checkbox>
                    <Checkbox colorScheme='teal'>
                        Stamp
                    </Checkbox>
                    <Checkbox colorScheme='green' defaultChecked>
                        Two-Sided
                    </Checkbox>
                    <Checkbox colorScheme='pink' defaultChecked>
                        Border
                    </Checkbox>
                    <Checkbox colorScheme='purple' defaultChecked>
                        Prompt Filters
                    </Checkbox>
                </Stack>
            </Box>
            <Box py='.25rem'>

                <Stack spacing={4} direction='row'>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                            <EmailIcon color='gray.300' />
                        </InputLeftElement>
                        <Input type='text' placeholder='Recipient Address' />
                    </InputGroup>
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                            color='gray.300'
                            fontSize='1.2em'
                            children='@'
                        />
                        <Input placeholder='Recipient Name' />
                        <InputRightElement>
                            <CheckIcon color='teal.500' />
                        </InputRightElement>
                    </InputGroup>
                </Stack>
            </Box>
            <FormControl>
                <Spacer py='.25rem' />
                <FormLabel>Card Style</FormLabel>
                <Select >
                    <option>Modern</option>
                    <option>Vintage</option>
                    <option>Old Papyrus</option>
                    <option>Futuristic</option>
                </Select>
            </FormControl>
            <Spacer py='.25rem' />
            <FormControl>
                <FormLabel>Subject</FormLabel>
                <Input type='text' />
            </FormControl>


            <Box py='1rem' >
                <FormLabel>Body</FormLabel>
                <Textarea placeholder='Enter Your Message Here!' />
            </Box>
            <Box py='1rem' >
                <FormLabel>Image Prompt</FormLabel>
                <Textarea placeholder='Enter Your Message Here!' />
            </Box>
            <Box py='1rem'>
                <Stack spacing={6} direction='row'>
                    <Text>Prompt Filters:</Text>
                    <Checkbox colorScheme='blue' >
                        Random Artist
                    </Checkbox>
                    <Checkbox colorScheme='teal'>
                        Colorize
                    </Checkbox>
                    <Checkbox colorScheme='green' defaultChecked>
                        Stylize
                    </Checkbox>
                    <Checkbox colorScheme='purple' defaultChecked>
                        Max Safety
                    </Checkbox>
                    <Checkbox colorScheme='pink' defaultChecked>
                        Max Entropy
                    </Checkbox>
                </Stack>
            </Box>
        </Box>);
}



export default CardEditorForm