
import { Outlet, useOutletContext, Navigate, useNavigate } from 'react-router-dom';

import { useColorModeValue, Heading, Stack, Box, Flex, Spacer, useDisclosure } from "@chakra-ui/react"


import CardEditorForm from "../components/CardEditorForm";
import SideBar from '../components/SideBar';
import CardContentBox from '../components/CardContentBox';
import CardPreviewBox from '../components/CardPreviewBox';

const PostCardEditor = () => {

    return (
        <>

            <CardContentBox children={<CardEditorForm />} header={'New Postcard'} />
        </>
    );

}

const PostCardPreview = () => {
    return (

        <>
            <CardContentBox children={<CardPreviewBox />}
            // header={subject}
            />
        </>
    )
}

export default function SiteMain() {

    const previewMode = useOutletContext()[2];

    return (
        <>
            <Box minH="100vh" minW='100vw' marginTop='-10' align='center'>
                <Flex>
                    {/* <SideBar /> */}
                    <Box
                        // Main Site Background Box
                        p="16" bgGradient={useColorModeValue('linear(to-b, #fefefe, #fff4e7)')}
                      flex="1" minH="calc(100vh - 60px)" overflow="auto" left={0}
                    >



                        <PostCardEditor />
                        <Spacer py='1rem' />
                      {previewMode && <PostCardPreview />}
                    </Box>

                </Flex>
            </Box>

        </>

    );

};