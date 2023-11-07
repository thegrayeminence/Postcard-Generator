import { Divider, Spacer, Square, Card, Text, Image, Center, CardBody, CardFooter, CardHeader, Box, Stack, VStack, HStack, Heading, Flex } from "@chakra-ui/react";
import { useColorModeValue, ColorMode } from "@chakra-ui/react";
import gradient1 from '../assets/eternalconstance.png'

const CardPreviewBox = () => {
    return (
        <>
            <Box shadow='md' w='100%' height='100%'

            >

                <Flex direction={'row'} wrap={'wrap'}
                    justify={'space-between'} align={'stretch'}
                    alignContent={'stretch'} height='inherit'
                >

                    <Box flex='1' _light={{ bg: 'white' }} _dark={{ bgGradient: gradient1 }}
                    >

                        <VStack px='2rem' py='.5rem'>

                            <Spacer py='.5rem' />
                            <Box>
                                <Heading fontSize='lg' textAlign='left'>Address:</Heading>
                                <Spacer py='.5rem' />
                                <Text textAlign='left'>Cañada de Pilar Fuentes 79 Santa Cruz de Tenerife, 56225</Text>
                            </Box>
                            <Spacer py='.5rem' />

                            {/* Card Preview Message Text Box */}
                            <Box>
                                <Heading fontSize='lg' textAlign='left'>Message:</Heading>
                                <Spacer py='.25rem' />
                                <Text textAlign='left'>Qui ipsum adipiscing cillum quis laborum consectetur duis. Adipiscing cillum, quis laborum. Laborum consectetur duis laboris minim. Duis laboris minim, est dolor irure. Est dolor irure duis esse sint. Irure duis esse sint ad aliqua, elit. Sint ad aliqua elit cupidatat minim. Aliqua elit, cupidatat minim sunt.Sequi quod labore ea est a. Voluptatibus similique nemo nisi modi qui. Officia modi ea doloremque.</Text>
                                <Spacer py='.5rem' />

                            </Box>


                        </VStack>

                    </Box>

                    <Center>
                        <Divider
                            orientation='vertical'
                            color='white'

                        />

                    </Center>

                    <Box flex='1' _light={{ bg: 'white' }} _dark={{ bgGradient: gradient1 }}
                    >
                        <VStack px='2rem' py='.5rem'>
                            <Spacer py='.5rem' />

                            {/* Post Card Stamp */}
                            <Box width='5rem' height='5rem' py='1rem' ml='10rem' position='justify' borderWidth='.35rem'>
                            </Box>

                            <Spacer py='.5rem' />

                            <Box>
                                <Heading fontSize='lg' textAlign='left'>Recipient:</Heading>
                                <Spacer py='.5rem' />
                                <Text textAlign='left'>Cañada de Pilar Fuentes 79 Santa Cruz de Tenerife, 56225</Text>
                            </Box>
                            <Spacer py='.5rem' />

                        </VStack>
                    </Box>

                </Flex>





            </Box>
        </>
    );
};



export default CardPreviewBox