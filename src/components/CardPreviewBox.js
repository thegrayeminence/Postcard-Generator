import { Divider, Spacer, Square, Card, Text, Image, Center, CardBody, CardFooter, CardHeader, Box, Stack, VStack, HStack, Heading, Flex } from "@chakra-ui/react";
import { useColorModeValue, ColorMode } from "@chakra-ui/react";
import gradient1 from '../assets/eternalconstance.png'
import { useOutletContext } from "react-router-dom";



const CardPreviewBox = () => {

const [cards] = useOutletContext()[3];
console.log(cards)
    return (
        <>
            <Box shadow='md' w='100%' height='100%'

            >

                <Flex direction={'row'} wrap={'wrap'}
                    justify={'space-evenly'} align={'stretch'}
                    height='inherit'
                >

                    <Box flex='1' _light={{ bg: 'white' }} _dark={{ bgGradient: gradient1 }}
                    >

                        <Stack direction='row' alignSelf='start' px='2rem' py='.5rem'>

                            <Spacer py='.5rem' />
                            <Box >
                                <Heading fontSize='lg' textAlign='left'>Address:</Heading>
                                <Spacer py='.5rem' />
                                <Text textAlign='left'>{cards.address}</Text>
                            </Box>
                        </Stack>
                            <Spacer py='.5rem' />

                            <Stack direction='row' alignSelf='start' h='65%'>
                            <Spacer py='.5rem' />

                              {/* Card Preview Message Text Box */}
                            <Box borderWidth={'1rem'}>
                
                                <Heading fontSize='lg' textAlign='left'>Message:</Heading>
                                <Spacer py='.25rem' />
                                <Text textAlign='left'>{cards.message}</Text>
                                <Spacer py='.5rem' />

                            </Box>


                        </Stack>

                    </Box>

                    <Center>
                        <Divider
                            orientation='vertical'
                            color='white'

                        />

                    </Center>

                    <Box  flex='1' _light={{ bg: 'white' }} _dark={{ bgGradient: gradient1 }}
                    >
                        <Stack direction='row' alignSelf='start'>
                            <Spacer py='.5rem' />
                            <Box borderWidth={'1rem'} position='absolute'>
                                <Heading fontSize='lg' textAlign='left'>Recipient:</Heading>
                                <Spacer py='.5rem' />
                                <Text textAlign='left'>{cards.name}</Text>
                            </Box>
                            {/* Post Card Stamp */}
                            {/* <Box width='5rem' height='5rem' 
                            py='1rem' ml='10rem' 
                            borderWidth='.35rem'>
                            </Box> */}

                        </Stack>

                        <HStack alignSelf='start' px='1rem' h='65%'>
                            
                        <Heading textAlign='left' fontSize='lg'>{cards.subject}</Heading>
                        </HStack>
                    </Box>
             

                </Flex>





            </Box>
        </>
    );
};



export default CardPreviewBox