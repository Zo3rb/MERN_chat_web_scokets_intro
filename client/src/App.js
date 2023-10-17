import { Box, Text } from "@chakra-ui/react";
import axios from "axios";
import api from "./api";
import { useEffect } from "react";

function App() {
  async function fetchData() {
    const { data } = await api.get("/health-check");
    console.log(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box p={4} bg="teal.500">
      <Text fontSize="xl" color="white">
        Hello from New Application
      </Text>
    </Box>
  );
}

export default App;
