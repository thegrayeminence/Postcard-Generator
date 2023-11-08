import { Divider, Spacer, Square, Card, Text, Image, Center, CardBody, CardFooter, CardHeader, Box, Stack, VStack, HStack, Heading, Flex } from "@chakra-ui/react";
import { useColorModeValue, ColorMode } from "@chakra-ui/react";
import gradient1 from '../assets/eternalconstance.png'
import { useOutletContext } from "react-router-dom";



const CardPreviewBox = () => {

const [cards] = useOutletContext()[3];
console.log(cards)
    return (
        <>
            <Box overflow={'scroll'} shadow='md' w='100%' height='100%'

            >

                <Flex   direction={'row'} wrap={'nowrap'}
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
                                <Text fontSize='md' textAlign='left'>{cards.address}</Text>
                            </Box>
                        </Stack>
                            <Spacer py='.5rem' />

                            <Stack direction='row' alignSelf='start' h='75%' py='.5rem' position='relative'>
                            <Spacer py='.5rem' />

                              {/* Card Preview Message Text Box */}
                            <Box px='.5rem'>
                
                                <Heading fontSize='lg' textAlign='left'>{cards.subject}</Heading>
                                <Spacer py='.25rem' />
                                <Text fontSize='md' textAlign='left'>{cards.message}</Text>
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

                    <Box flex='.5' _light={{ bg: 'white' }} _dark={{ bgGradient: gradient1 }}
                    >
                             <Spacer py='.75rem' />
                        <Stack px='1.5rem' direction='row' alignSelf='start' h='35%'  position='relative'>
                        <Box >
                                <Heading fontSize='lg' textAlign='left'>From:</Heading>
                                <Text fontSize='md' textAlign='left'>{cards.sender}</Text>
                                <Spacer py='.5rem' />
                             
                            </Box>
                            <Spacer py='.5rem' />
                            <Box >
                                <Heading fontSize='lg' textAlign='left'>To:</Heading>
                                <Text fontSize='md'  textAlign='left'>{cards.name}</Text>
                                <Spacer py='.5rem' />
                             
                            </Box>
                            {/* Post Card Stamp */}
                            <Box width='5rem' height='5rem' 
                            bg='red'
                            borderWidth='.35rem'
                            >
                            </Box>

                        </Stack>
                        <Spacer py='.5rem'/>

                          <Box  align='center' h='65%' position='relative'
     
                          direction='row' >
                            {/* <Text textAlign='left'>Message:</Text> */}
                       
                        <Image
                        
                        transform='translateY(-15%)' opacity={'1'} shadow='md' w='max-content' h='full'  maxH={'fit-content'} src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg/1920px-Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg'/>
                      
                        </Box>
                       
                    </Box>
            

                </Flex>





            </Box>
        </>
    );
};



export default CardPreviewBox