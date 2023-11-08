import { CardBody, Spacer, CardFooter, CardHeader, GridItemProps, GridProps, Box, Grid, GridItem, Card, Heading, Text, Stack, Flex, Image, Button, useColorModeValue } from "@chakra-ui/react"

const GalleryCard = ({card}) => {

    const {name, address, sender, message,subject, image_url} = card;
    return (
        <>
 
            <Box >

                <Grid
                     overflow={'hidden'}
                    bg='white'
                    h='10rem'
                    w="20rem"
                    templateRows='repeat(3, 1fr)'
                    templateColumns='repeat(6, 1fr)'
                    gap={'.25rem'}
                >
                    <GridItem p={'.25rem'} position='relative' rowSpan={3} colSpan={2} bg='blue'>
                    
            
                    <Text  fontSize='.75rem'>Subj:{subject}</Text>
                    <Spacer py={'.25rem'}/>
                    <Text  fontSize='.6rem'>{message}</Text>
                    </GridItem>
                    <GridItem position='relative' rowSpan={2} colSpan={4} bg='papayawhip'>
                    <Image objectFit='contain' src={image_url}/>
                    </GridItem>

                    <GridItem  px={'.25rem'} position='relative' rowSpan={1} colSpan={4} bg='tomato'>
                    <Text fontSize='.75rem'>To:{name}</Text>
                    <Text fontSize='.75rem'>Address:{address}</Text>
                    </GridItem>
                </Grid>


            </Box>

        </>
    );

}


export default GalleryCard