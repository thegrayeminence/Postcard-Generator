
import { Outlet, useOutletContext, Navigate, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useColorModeValue, Drawer, DrawerOverlay, DrawerContent, DrawerBody, DrawerHeader, DrawerFooter, Heading, Stack, Box, Flex, Spacer, useDisclosure } from "@chakra-ui/react"


import CardEditorForm from "../components/CardEditorForm";
import SideBar from '../components/SideBar';
import CardContentBox from '../components/CardContentBox';
import CardPreviewBox from '../components/CardPreviewBox';

const PostCardEditor = ({handleStamp, handleBorder}) => {

    return (
        <>

            <CardContentBox children={<CardEditorForm handleBorder={handleBorder} handleStamp={handleStamp} />} header={'New Postcard'} />
        </>
    );

}

const PostCardPreview = ({stampOn, borderOn}) => {
    return (

        <>
            <CardContentBox children={<CardPreviewBox  borderOn={borderOn} stampOn={stampOn} />}
            // header={subject}
            />
        </>
    )
}

export default function SiteMain() {

    // stamp mode toggle
    const [stampOn,setStampOn] = useState(true);
    const handleStamp = () => {
      if (stampOn) {setStampOn(false)}
      else if (!stampOn) {setStampOn(true)}
    }
    // border mode toggle
    const [borderOn,setBorderOn] = useState(true);
    const handleBorder = () => {
        if (borderOn) {setBorderOn(false)}
        else if (!borderOn) {setBorderOn(true)}
    }
    
    //preview card mode toggle
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



                        <PostCardEditor handleStamp={handleStamp} handleBorder={handleBorder}/>
                        <Spacer py='1rem' />
                      {previewMode && <PostCardPreview stampOn={stampOn} borderOn={borderOn}/>}
                    </Box>

                </Flex>
            </Box>

        </>

    );

};