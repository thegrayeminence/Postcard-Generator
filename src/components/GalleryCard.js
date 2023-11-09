import { CardBody, Spacer, CardFooter, CardHeader, GridItemProps, GridProps, Box, Grid, GridItem, Card, Heading, Text, Stack, Flex, Image, Button, useColorModeValue } from "@chakra-ui/react"
import gradient1 from '../assets/earlgray.png'

const GalleryCard = ({ card }) => {

    const fontStyles = {

        color: 'blackAlpha.800',
        textShadow: '.03rem .03rem .1rem gray',
        fontSize: '.75rem'
    }

    const { name, address, sender, message, subject, image_url } = card;
    return (
        <>

            <Box
                boxShadow={'dark-lg'}
                border overflow={'scroll'}
                borderStyle={'solid'}
                borderColor={useColorModeValue('whiteAlpha.500', 'blackAlpha.600')}
                bgGradient={useColorModeValue(
                    'linear(to-b, #f5f7fa, #c3cfe2)',
                    'linear(to-bl, #f5f7fa, #c3cfe2)'
                )}
                //shadow='md'

                borderWidth={'.3rem'}

            >

                <Grid

                    w='full'

                    minH="15rem"

                    templateRows='repeat(3, 1fr)'
                    templateColumns='repeat(6, 1fr)'
                    gap={'.25rem'}
                >
                    <GridItem bg='inherit'
                        p={'.25rem'} position='relative' rowSpan={3} colSpan={2}>
                        <Spacer py={'1rem'} />
                        <Heading sx={fontStyles}>Subj:{subject}</Heading>
                        <Spacer py={'.25rem'} />
                        <Text sx={fontStyles}>{message}</Text>
                    </GridItem>

                    <GridItem position='relative' rowSpan={2} colSpan={4} >
                        <Image 
                             
                        objectFit={'cover'} src={image_url} />
                    </GridItem>

                    <GridItem bg='inherit' px={'.25rem'} position='relative' rowSpan={1} colSpan={4}>
                        <Spacer py={'.25rem'} />
                        <Heading sx={fontStyles}>
                            To:{name}
                        </Heading>
                        <Text sx={fontStyles}>Address:{address}
                        </Text>
                    </GridItem>
                </Grid>


            </Box>

        </>
    );

}


export default GalleryCard