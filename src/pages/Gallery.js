
import { Heading, SimpleGrid, Text, Card, Spacer, Stack, Flex, Box } from "@chakra-ui/react"

const Gallery = () => {

return(
    <>
    <Box py={'1rem'} minW='100vw'>
        <Heading fontSize={'3xl'} textAlign={'center'}>POSTCARD GALLERY:</Heading>

        <SimpleGrid justify='center' pt={'2rem'} ml='10%' width='80%' columns={2} spacing='2.5rem'>
            <Box bg='white' height='10rem'></Box>
            <Box bg='white' height='10rem'></Box>
            <Box bg='white' height='10rem'></Box>
            <Box bg='white' height='10rem'></Box>


        </SimpleGrid>
    </Box>
    </>
)

}


export default Gallery