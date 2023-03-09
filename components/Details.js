import React from "react";
import {
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  Button,
} from "@chakra-ui/react";

const Details = () => {
  return (
    <VStack p={10} alignItems="flex-start">
      <VStack spacing={3} alignItems="flex-start">
        <Heading>Your details</Heading>
        <Text>If you already have an account, click here to log in.</Text>
      </VStack>
      <SimpleGrid mt="42px" column={2} gap={3}>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input placeholder="John" />
          </FormControl>
        </GridItem>

        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input placeholder="Doe" />
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input placeholder="Blvd. Broken Dreams 21" />
          </FormControl>
        </GridItem>

        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input placeholder="San Francisco" />
          </FormControl>
        </GridItem>

        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select>
              <option value="usa">United States of America</option>
              <option value="uae">United Arab Emirates</option>
              <option value="nm">North Macedonia</option>
              <option value="gy">Germany</option>
            </Select>
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <Checkbox defaultChecked>Ship to the billing address.</Checkbox>
        </GridItem>

        <GridItem colSpan={2}>
          <Button w="full">Place order</Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default Details;
