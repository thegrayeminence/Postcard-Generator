import { Box, Stack, Flex } from "@chakra-ui/react";
import SideBarButton from "./ui/SideBarButton";
import { InfoOutlineIcon, AttachmentIcon, LinkIcon } from "@chakra-ui/icons";

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


};


export default SideBar