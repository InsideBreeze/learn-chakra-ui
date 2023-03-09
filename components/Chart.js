import React from "react";
import {
  Stack,
  VStack,
  HStack,
  Heading,
  Button,
  Text,
  AspectRatio,
  Image,
  Divider,
} from "@chakra-ui/react";

const Chart = () => {
  return (
    <VStack p={10} alignItems="flex-start" bg="gray.50">
      <VStack spacing={3} alignItems="flex-start">
        <Heading>Your cart</Heading>
        <Text>
          If price is too hard on your eyes,{" "}
          <Button variant="link">try changing the theme.</Button>
        </Text>
      </VStack>
      <HStack spacing={6} w="full">
        <AspectRatio ratio={1} w={24}>
          <Image src="/images/skateboard.jpg" alt="skateboard" />
        </AspectRatio>
        <Stack
          justifyContent="space-between"
          w="full"
          alignItems="center"
          spacing={0}
          direction="row"
        >
          <VStack alignItems="flex-start" spacing={0}>
            <Text color="gray.800" fontSize="xl" fontWeight="bold">
              Penny board
            </Text>
            <Text color="gray.600" textAlign="end">
              PNYCOMP27541
            </Text>
          </VStack>
          <Text>$119.00</Text>
        </Stack>
      </HStack>

      <VStack alignItems="stretch" w="full" spacing={4}>
        <HStack justifyContent="space-between">
          <Text color="gray.600">Subtotal</Text>
          <Text align="end">$119.00</Text>
        </HStack>

        <HStack justifyContent="space-between">
          <Text color="gray.600">Shipping</Text>
          <Text align="end">$19.99</Text>
        </HStack>

        <HStack justifyContent="space-between">
          <Text color="gray.600">Taxes (estimated)</Text>
          <Text align="end">$23.80</Text>
        </HStack>

        <Divider color="gray.200" />
      </VStack>
      <HStack justifyContent="space-between" w="full">
        <Text color="gray.600">Total</Text>
        <Text fontWeight="bold" fontSize="3xl">
          $162.79
        </Text>
      </HStack>
    </VStack>
  );
};

export default Chart;
