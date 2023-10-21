import React from "react";
import {
  Container,
  Box,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

import { MoonIcon } from "@chakra-ui/icons";

import Login from "../../components/Login";
import Signup from "../../components/Signup";

export default function HomePage() {
  return (
    <Container maxW="xl" p="5" centerContent>
      {/* Container */}
      <Box
        minW="992px"
        border="1px"
        borderColor="yellow"
        rounded="md"
        p="5"
        bg="white"
        boxShadow="md"
        textAlign="center"
        marginBottom="3"
      >
        {/* Box */}
        <Text fontSize="3xl" fontWeight="bold" mb="2" color="#000">
          <MoonIcon /> Black Squad Legion <MoonIcon />
        </Text>
        {/* Text */}
      </Box>
      <Box
        minW="992px"
        border="1px"
        borderColor="yellow"
        rounded="md"
        p="5"
        bg="white"
        boxShadow="md"
        textAlign="center"
      >
        <Tabs variant="solid-rounded" size="md" isFitted>
          <TabList>
            <Tab border="1px" borderColor="blue.300" marginX={1}>
              Login
            </Tab>
            <Tab border="1px" borderColor="blue.300" marginX={1}>
              Sign Up
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel p={5}>
              <Login />
            </TabPanel>
            <TabPanel p={5}>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}
