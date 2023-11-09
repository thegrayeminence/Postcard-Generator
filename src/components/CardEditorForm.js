import {
    FormControl, Checkbox, CheckboxGroup, Textarea,
    FormLabel, Input, Text, Spacer, InputLeftElement, InputGroup,
    FormErrorMessage, useColorModeValue, Select, Stack, Box, Button
} from "@chakra-ui/react";
import { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
//import set from 'lodash/set';


import { EmailIcon} from "@chakra-ui/icons";

const CardEditorForm = ({ handleStamp, handleBorder }) => {

    const navigate = useNavigate();

    //image prompt checkbox filters (on/off)
    const [promptFilters, setPromptFilters] = useState(true)
    const handlePromptFilters = () => {
        if (promptFilters) { setPromptFilters(false) }
        else { setPromptFilters(true) }
    }

    const [promptsOff, setPromptsOff] = useState(true)
    const handleAiPrompts = () => {
        if (promptsOff) { setPromptsOff(false) }
        else { setPromptsOff(true) }
    }

    //form data (outlet context) states
    const {formData, setFormData, emptyFormObj} = useOutletContext();
    //cards+ setCards (outlet context) states
    const {cards, setCards} = useOutletContext();

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        setFormData(prevData => ({ ...prevData, [name]: value }))

    }

    const handleSubmit = (e) => {
       e.preventDefault();

       if(!formData.name || !formData.sender || !formData.message || !formData.address || !formData.subject){
        console.log('All fields are required!')
        return;
    }

    const newImageUrl = `https://picsum.photos/400/250/?random=${Math.floor(Math.random() * 1000)}`;
    const newCard = {
        ...formData,
        image_url: newImageUrl
    };

       fetch('http://localhost:4000/cards', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCard)
        })
        .then(res=>res.json())
        .then(newData => {
            setCards([...cards, newData]);
            setFormData(emptyFormObj);
            navigate('/gallery');

        });
    }

    return (
        <Box overflow={'scroll'}>
            <Spacer py='.5rem' />

            {/* Card Content CheckBox Section */}
            <Box py='.25rem'>
                <CheckboxGroup colorScheme='green' >
                    <Stack spacing={6} direction='row'>
                        <Checkbox  defaultChecked
                        onChange={()=>handleAiPrompts()}
                        >
                            AI
                        </Checkbox>
                        <Checkbox defaultChecked
                            onChange={() => handleStamp()}
                        >
                            Stamp
                        </Checkbox>
                        <Checkbox defaultChecked>
                            Two-Sided
                        </Checkbox>
                        <Checkbox defaultChecked
                            onChange={() => handleBorder()}
                        >
                            Border
                        </Checkbox>
                        <Checkbox defaultChecked
                            onChange={() => handlePromptFilters()}
                        >
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

                        </InputGroup>
                    </FormControl>
                </Stack>
            </Box>

            <Spacer py='.5rem' />


            {/* Card Style Input Section */}
            <FormControl>

                <FormLabel>Card Style</FormLabel>
                <Select


                    onChange={handleChange}
                    id='style'
                    name='style'
                    value={formData.style}
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
            <Stack spacing={4} direction='row'>
                
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
            <FormControl isRequired>
                <FormLabel>Sender</FormLabel>
                <Input
                    onChange={handleChange}
                    value={formData.sender}
                    type='text'
                    name='sender'
                    id='sender'
                    placeholder='Message Sender'
                    shadow='md'
                />
            </FormControl>
            </Stack>
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
            {promptsOff && <FormControl>
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
            </FormControl>}


            {/* Card Image Prompt Filter Checkbox Section  */}
            <Spacer py='.75rem' />
            {promptFilters && <Box>
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

                    </Stack>
                </CheckboxGroup>
            </Box>}
            <Spacer py='.75rem' />
            <Box>
                <Button
                    onClick={handleSubmit}
                    w='5rem'
                    mw='7.5rem'
                    shadow='lg'
                    fontWeight='semibold'
                    fontFamily='Avenir Next'
                    bgGradient={useColorModeValue('linear(to-r, pink.300, red.200)', 'linear(to-r, purple.500, blue.600)')}

                    color="white"
                    _hover={{
                        transform: 'scale(1.05)'
                    }}
                >
                    SUBMIT
                </Button>
            </Box>
        </Box>
    );
}



export default CardEditorForm