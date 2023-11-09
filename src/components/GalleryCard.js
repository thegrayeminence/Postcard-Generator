import {Spacer, Box, Grid, GridItem, Heading, Text, Image, useColorModeValue } from "@chakra-ui/react"

const GalleryCard = ({ card }) => {

    const fontStyles = {
        color: 'red.900',
        textShadow: '-.01rem 0 black, 0 -.01rem black, -.01rem 0 black, 0 -.01rem black;',
        fontSize: '1vw',
        letterSpacing: '.05rem',
        textAlign: 'left',
        fontFamily: 'avenir',
        lineHeight: '1.35rem',

    };

    const fontStylesHeader = {

        textShadow: '-.01rem 0 black, 0 -.01rem black, -.01rem 0 black, 0 -.01rem black;',

        letterSpacing: '.07rem',
        textAlign: 'left',
        fontFamily: 'avenir',
        lineHeight: '1.35rem',
        fontStyle: 'oblique',
        color: 'purple.700',
        fontSize: '1.2vw',

    };

    const fontStylesDetail = {


        letterSpacing: '.05rem',
        textAlign: 'left',
        fontFamily: 'avenir',
        lineHeight: '1rem',
        fontStyle: 'oblique',
        color: 'blackAlpha.700',
        fontSize: '1vw',

    };

    const { name, address, sender, message, subject, image_url } = card;
    return (
        <>

            <Box


                borderRadius={'lg'}
                boxShadow={'base'}
                border overflow={'scroll'}
                borderStyle={'solid'}
                //bg={'#e6e9f0'}
                bgGradient={'linear(to-b,  #e6e9f0, #eef1f5)'}
                borderColor={useColorModeValue('whiteAlpha.500', 'blackAlpha.600')}
                // bgGradient={useColorModeValue(
                //     'linear(to-b, #f5f7fa, #c3cfe2)',
                //     'linear(to-bl, #f5f7fa, #c3cfe2)',
                // )}
                transition='all 0.2s cubic-bezier(.08,.52,.52,1)'

                //shadow='md'
                backdropFilter='auto'

                borderWidth={'.3rem'}

                _hover={{
                    backdropFilter: 'auto',
                    backdropBlur: '10px', transform: 'scale(1.1)',
                    bgGradient: useColorModeValue('linear(to-b,  #f5f7fa, #c3cfe2)', 'linear(to-tl,  #c2e9fb, #fff)')
                }}


            >

                <Grid


                    templateRows='repeat(3, 1fr)'
                    templateColumns='repeat(6, 1fr)'
                    gap={'.3rem'}
                >
                    <GridItem justify={'center'} ml='auto' bg='inherit'
                        px={'.75rem'} rowSpan={3} colSpan={2}

                        borderWidth={'.2rem'}
                        borderStyle={'groove'}
                        borderColor={useColorModeValue('whiteAlpha.500', 'blackAlpha.400')}
                        boxShadow={'base'}
                    >

                        <Spacer py={'.75rem'} />



                        <Heading
                            fontStyle={'oblique'}
                            sx={fontStylesHeader}>{subject}</Heading>
                        <Spacer py={'.25rem'} />
                        <Text

                            sx={fontStyles}>{message}</Text>

                        <Spacer py={'.5rem'} />

                        <Heading

                            fontStyle={'oblique'}
                            sx={fontStylesDetail}>From:

                            {sender}</Heading>
                    </GridItem>

                    <GridItem ml='auto' justify={'center'} rowSpan={2} colSpan={4}

                    >

                        <Image
                            borderWidth={'.2rem'}
                            borderStyle={'groove'}
                            boxShadow={'base'}
                            borderColor={useColorModeValue('whiteAlpha.500', 'blackAlpha.400')}
                            position='relative'
                            src={image_url} />
                    </GridItem>

                    <GridItem

                        boxShadow={'base'}
                        borderWidth={'.2rem'}
                        borderStyle={'groove'}
                        borderColor={useColorModeValue('whiteAlpha.500', 'blackAlpha.400')}
                        justify={'center'} ml='auto' bg='inherit' px={'.25rem'} rowSpan={1} colSpan={4}>
                        <Spacer py={'.25rem'} />
                        <Heading sx={fontStylesHeader}

                        >
                            To:{name}
                        </Heading>
                        < Text
                            fontStyle={'oblique'}
                            sx={fontStyles}>Address:{address}
                        </Text>
                    </GridItem>
                </Grid>


            </Box>

        </>
    );

}


export default GalleryCard