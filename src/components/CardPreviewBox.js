import { Divider, Spacer, Square, Card, Text, Image, Center, CardBody, CardFooter, CardHeader, Box, Stack, VStack, HStack, Heading, Flex } from "@chakra-ui/react";
import { useColorModeValue, ColorMode } from "@chakra-ui/react";
import gradient1 from '../assets/eternalconstance.png'
import { useOutletContext } from "react-router-dom";



const CardPreviewBox = ({stampOn, borderOn}) => {

const {cards} = useOutletContext();
    return (
        <>
            <Box borderWidth={borderOn ? '.35rem' : '0rem' } borderStyle={'solid'} borderColor={useColorModeValue('gray.300','blue.800')}
             overflow={'scroll'} shadow='md' w='100%' height='100%'

            >

                <Flex 
                    direction={'row'} wrap={'nowrap'}
                    justify={'space-evenly'} align={'stretch'}
                    height='inherit'
                >

                    <Box flex='.5' _light={{ bg: 'white' }} _dark={{ bgGradient: gradient1 }}
                    >
                    <Spacer py='.75rem' />
                        <Stack direction='row' alignSelf='start'  py='.5rem' position='relative' h='25%'>

                            <Spacer py='.5rem' />
                            <Box px='.5rem' >
                                <Heading fontSize='lg' textAlign='left'>Address:</Heading>
                                <Spacer py='.5rem' />
                                <Text fontSize='md' textAlign='left'>{cards[0].address}</Text>
                            </Box>
                        </Stack>
                            <Spacer py='.5rem' />

                            <Stack direction='row' alignSelf='start' h='75%' py='.5rem' position='relative'>
                            <Spacer py='.5rem' />

                              {/* Card Preview Message Text Box */}
                            <Box px='.5rem'>
                
                                <Heading fontSize='lg' textAlign='left'>{cards[0].subject}</Heading>
                                <Spacer py='.25rem' />
                                <Text fontSize='md' textAlign='left'>{cards[0].message}</Text>
                                <Spacer py='.5rem' />

                            </Box>


                        </Stack>

                    </Box>

                    <Center>
                        <Divider
                            orientation='vertical'
                            color='white' borderWidth={'.1rem'}

                        />

                    </Center>

                    <Box flex='.5' _light={{ bg: 'white' }} _dark={{ bgGradient: gradient1 }}
                    >
                             <Spacer py='.75rem' />
                        <Stack px='1.5rem' direction='row' alignSelf='start' h='35%'  position='relative'>
                        <Box >
                                <Heading fontSize='lg' textAlign='left'>From:</Heading>
                                <Text fontSize='md' textAlign='left'>{cards[0].sender}</Text>
                                <Spacer py='.5rem' />
                             
                            </Box>
                            <Spacer py='.5rem' />
                            <Box >
                                <Heading fontSize='lg' textAlign='left'>To:</Heading>
                                <Text fontSize='md'  textAlign='left'>{cards[0].name}</Text>
                                <Spacer py='.5rem' />
                             
                            </Box>
                            {/* Post Card Stamp */}
                            {stampOn && <Box width='5rem' height='5rem' 
                            bg='gray.300'
                            borderWidth='.35rem'

                           
                            >

                            </Box>}

                        </Stack>
                        <Spacer py='.5rem'/>

                          <Box  align='center' h='65%' position='relative'
     
                          direction='row' >
                            {/* <Text textAlign='left'>Message:</Text> */}
                       
                        <Image
                        borderWidth={borderOn ? '.35rem' : '0rem' } borderStyle={'solid'} borderColor={useColorModeValue('gray.300','blue.800')}
                        transform='translateY(-15%)' opacity={'1'} shadow='md' h='full' objectFit={'fill'}  src='https://picsum.photos/400/?blur=2' />
                        </Box>
                       
                    </Box>
            

                </Flex>





            </Box>
        </>
    );
};



export default CardPreviewBox