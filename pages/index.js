import React from "react";
import { Container, Flex } from "@chakra-ui/react";
import Details from "../components/Details";
import Chart from "../components/Chart";

const Home = () => {
  return (
    <Container maxW="container.xl">
      <Flex p={20}>
        {/* Details */}
        <Details />
        {/* Chart */}
        <Chart />
      </Flex>
    </Container>
  );
};

export default Home;
