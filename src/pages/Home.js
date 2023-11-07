import {
    FormControl, Checkbox, Textarea,
    FormLabel, Input,Text, Spacer, InputLeftElement, InputRightElement, InputGroup,
    FormErrorMessage, Select,
    FormHelperText, useColorModeValue, IconButton, Heading, Stack, Box, Flex, Tooltip, Popover, Button
} from "@chakra-ui/react"

import { AtSignIcon, LinkIcon, PhoneIcon, CheckIcon, EmailIcon, ArrowRightIcon, InfoOutlineIcon, ChevronRightIcon, AttachmentIcon, InfoIcon } from "@chakra-ui/icons";
import SideBarButton from "../components/ui/SideBarButton";




const FormMain = () => {
    return(
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

<Stack spacing={4}  direction='row'>
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
    <Spacer py='.25rem'/>
  <FormLabel>Card Style</FormLabel>
  <Select >
    <option>Modern</option>
    <option>Vintage</option>
    <option>Old Papyrus</option>
    <option>Futuristic</option>
  </Select>
</FormControl>
<Spacer py='.25rem'/>
<FormControl>
  <FormLabel>Subject</FormLabel>
  <Input type='text' />
</FormControl>


<Box py='1rem' >
<FormLabel>Body</FormLabel>
<Textarea  placeholder='Enter Your Message Here!' />
</Box>
<Box py='1rem' >
<FormLabel>Image Prompt</FormLabel>
<Textarea  placeholder='Enter Your Message Here!' />
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

const Canvas = () => {

    return (
        <Box >

            <Flex>
                <SideBar />
                <Box
                    bgGradient={useColorModeValue('linear(to-b, #fefefe, #fff4e7)')} p="16"
                    flex="1" minH="calc(100vh - 60px)" overflow="auto" left={0}
                >
                    <Box
                    maxW="65vw" margin="0 auto" borderWidth='.1rem' p='2.5rem' borderRadius='30px' 
                    backdropFilter='auto' backdropBlur='10px' 
                    bg='whiteAlpha.200' transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                    _hover={{
                        backdropFilter: 'auto',
                        backdropBlur: '10px', transform: 'scale(1.025)',
                        bgGradient:useColorModeValue('linear(to-b,  #fff4e7, #e6fffd)')
                      }}
                    
                    >
                        <Heading
                            bgGradient={useColorModeValue('linear(to-r, pink.400, purple.600)', 'linear(to-r, purple.200, blue.600)')}
                            bgClip='text'
                            fontSize='5xl'
                            fontWeight='extrabold'
                        >
                            New Post Card:
                        </Heading>
                        <FormMain />
                    </Box>
                </Box>

            </Flex>
        </Box>

    );

}

const SideBar = () => {


    return (
        <>

            <Box
                minH="calc(100vh -60px)" left={0}
                minW='10%' maxW='25%' px={10}
                bgColor={'whiteAlpha.200'}
                borderRightWidth={1} borderRightColor="gray.200"
                borderRightStyle="solid"
            >
                <Flex width="100%" alignItems="start">
                    <Stack width="inherit" alignItems='center' py='3rem' direction={'column'} spacing='3rem' >


                        <SideBarButton children={<InfoOutlineIcon />} />
                        <SideBarButton children={<AttachmentIcon />} />
                        <SideBarButton children={<LinkIcon />} />
                    </Stack>
                </Flex>
            </Box >

        </>
    );


}



export default function Home() {

    return (
        <>
            <Box minH="100vh" marginTop='-10' align='center'>
         
                <Canvas />
              
              
            </Box>
            

        </>
    )

}