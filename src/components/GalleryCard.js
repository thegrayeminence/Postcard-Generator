import { CardBody, CardFooter, CardHeader, GridItemProps, GridProps, Box, Grid, GridItem, Card, Heading, Text, Stack, Flex, Image, Button, useColorModeValue } from "@chakra-ui/react"

const GalleryCard = ({card}) => {

    const {name, message,subject, image_url} = card;
    return (
        <>
 
            <Box w='80vw' height='auto'>

                <Grid
                    h='10rem'
                    w="20rem"
                    templateRows='repeat(3, 1fr)'
                    templateColumns='repeat(6, 1fr)'
                    gap={2}
                >
                    <GridItem position='relative' rowSpan={3} colSpan={2} bg='blue'>
                    
                    <Text>{name}</Text>
                    </GridItem>
                    <GridItem position='relative' rowSpan={2} colSpan={4} bg='papayawhip'>
                    <Image objectFit='contain' src={image_url}/>
                    </GridItem>

                    <GridItem position='relative' rowSpan={1} colSpan={4} bg='tomato'>
                        
                    </GridItem>
                </Grid>


            </Box>

        </>
    );

}


export default GalleryCard