
import { Outlet, Navigate, useNavigate } from 'react-router-dom';

import { useColorModeValue, Heading, Stack, Box, Flex, } from "@chakra-ui/react"


import CardEditorForm from "../components/CardEditorForm";
import SideBar from '../components/SideBar';
import CardContentBox from '../components/CardContentBox';


const Canvas = () => {

    return (
        <>
            <Box
                // Main Site Background Box
                p="16" bgGradient={useColorModeValue('linear(to-b, #fefefe, #fff4e7)')}
                flex="1" minH="calc(100vh - 60px)" overflow="auto" left={0}
            >
                <CardContentBox children={<CardEditorForm />} header={'New Postcard'} />
            
            
            </Box>

        </>


    );

}

export default function PostCardEditor() {


    return (
        <>
            <Box minH="100vh" minW='100vw' marginTop='-10' align='center'>
                <Flex>
                    {/* <SideBar /> */}
                    <Canvas />
                </Flex>
            </Box>

        </>

    );

};