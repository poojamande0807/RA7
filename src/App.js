import React from "react";

import {
  ChakraProvider,
  Box,
  Heading,
  Button,
  Input,
  Card,
  CardBody,
  Text,
} from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Box p={5}>
        <Heading mb={4}>My Chakra UI App</Heading>

        <Input placeholder="Enter your input" mb={4} />

        <Button colorScheme="teal" mb={4}>
          Submit
        </Button>

        <Card>
          <CardBody>
            <Text>This is a card component showcasing information.</Text>
          </CardBody>
        </Card>
      </Box>
    </ChakraProvider>
  );
}

export default App;
