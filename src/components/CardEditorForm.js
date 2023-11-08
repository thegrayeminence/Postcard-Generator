import {
    FormControl, Checkbox, CheckboxGroup, Textarea,
    FormLabel, Input, Text, Spacer, InputLeftElement, InputRightElement, InputGroup,
    FormErrorMessage, useColorModeValue, Select, FormHelperText, Stack, Box, Button
} from "@chakra-ui/react";

import { useOutletContext } from "react-router-dom";

import { CheckIcon, EmailIcon, ArrowRightIcon, InfoOutlineIcon, ChevronRightIcon, AttachmentIcon, InfoIcon } from "@chakra-ui/icons";

const CardEditorForm = () => {


    const [formData, setFormData] = useOutletContext();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevData=>({...prevData,[name]:value}))

    }


    const handleSubmit = (e) => {

    }

    return (
        <Box>
            <Spacer py='.5rem' />

            {/* Card Content CheckBox Section */}
            <Box py='.25rem'>
                <CheckboxGroup colorScheme='green' >
                    <Stack spacing={6} direction='row'>
                        <Checkbox
                            // isChecked={}
                           // onChange={handleChange}
                        >
                            Map Pin
                        </Checkbox>
                        <Checkbox>
                            Stamp
                        </Checkbox>
                        <Checkbox defaultChecked>
                            Two-Sided
                        </Checkbox>
                        <Checkbox defaultChecked>
                            Border
                        </Checkbox>
                        <Checkbox defaultChecked>
                            Prompt Filters
                        </Checkbox>
                    </Stack>
                </CheckboxGroup>
            </Box>

            <Spacer py='.5rem' />

            {/* Card Recipient Name/Address Input Section */}


            <Box py='.25rem'>

                <Stack spacing={4} direction='row'>
                    <FormControl >
                        <InputGroup shadow='md'>

                            <InputLeftElement>
                                <EmailIcon color='gray.300' />
                            </InputLeftElement>
                            <Input
                                onChange={handleChange}
                                type='email'
                                value={formData.address}
                                name='address'
                                id='address'
                                placeholder='Recipient Address'
                            />
                            {/* <InputRightElement>
                            <CheckIcon color='teal.500' />
                        </InputRightElement> */}
                        </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                        <InputGroup shadow='md'>
                            <InputLeftElement
                                color='gray.300'
                                fontSize='1.2em'
                                children='@'
                            />
                            <Input
                                onChange={handleChange}
                                value={formData.name}
                                type='text'
                                name='name'
                                id='name'
                                placeholder='Recipient Name'
                            />

                            {/* <InputRightElement>
                            <CheckIcon color='teal.500' />
                        </InputRightElement> */}
                        </InputGroup>
                    </FormControl>
                </Stack>
            </Box>

            <Spacer py='.5rem' />


            {/* Card Style Input Section */}
            <FormControl>

                <FormLabel>Card Style</FormLabel>
                <Select
                   
                    value={formData.style}
                    onChange={handleChange}
                    id='style'
                    name='style'
                    placeholder="Choose style"
                    shadow='md'
                    >
                    <option>Modern</option>
                    <option>Vintage</option>
                    <option>Old Papyrus</option>
                    <option>Futuristic</option>
                </Select>
            </FormControl>


            <Spacer py='.5rem' />

            {/* Card Message Subject + Body Input Section */}
            <FormControl isRequired>
                <FormLabel>Subject</FormLabel>
                <Input
                    onChange={handleChange}
                    value={formData.subject}
                    type='text'
                    name='subject'
                    id='subject'
                    placeholder='Message Subject'
                    shadow='md'
                />
            </FormControl>
            <Spacer py='.5rem' />
            <FormControl isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea
                    onChange={handleChange}
                    value={formData.message}
                    id='message'
                    name='message'
                    placeholder='Enter Your Message Here!'
                    rows={4}
                    resize="none"
                    shadow='md'
                />
            </FormControl>
            <Spacer py='.5rem' />
            {/* Card Image Prompt Section */}
            <FormControl>
                <FormLabel>Image Prompt</FormLabel>
                <Textarea
                    onChange={handleChange}
                    value={formData.prompt}
                    id='prompt'
                    name="prompt"
                    placeholder='Enter Your Prompt Here!'
                    rows={3}
                    resize="none"
                    shadow='md'
                />
            </FormControl>


            {/* Card Image Prompt Filter Checkbox Section  */}
            <Spacer py='.75rem' />
            <Box>
                <CheckboxGroup>
                    <Stack spacing={6} direction='row'>
                        <Text>Prompt Filters:</Text>
                        <Checkbox colorScheme='blue' >
                            Stylize
                        </Checkbox>
                        <Checkbox colorScheme='teal'>
                            Colorize
                        </Checkbox>
                        <Checkbox colorScheme='green'>
                            Stylize
                        </Checkbox>
                        <Checkbox colorScheme='purple'>
                            Randomize
                        </Checkbox>
                        <Checkbox colorScheme='pink'>
                            Max Chaos
                        </Checkbox>
                    </Stack>
                </CheckboxGroup>
            </Box>
            <Spacer py='.75rem' />
            <Box as="form">
                <Button
                    onSubmit={handleSubmit}
                    w='5rem'
                    mw='7.5rem'
                    shadow='md'
                    bgGradient={useColorModeValue('linear(to-r, pink.300, red.200)', 'linear(to-r, purple.500, blue.600)')}

                    color="white"
                    _hover={{
                        transform: 'scale(1.05)'
                    }}
                >
                    Submit
                </Button>
            </Box>
        </Box>
    );
}



export default CardEditorForm