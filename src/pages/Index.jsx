import React, { useState } from "react";
import { Box, Heading, Text, Button, Input, Stack, Select, Image, Flex, IconButton, useToast } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaCar, FaTaxi } from "react-icons/fa";

const Index = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [selectedService, setSelectedService] = useState("standard");
  const toast = useToast();

  const handleBookRide = () => {
    if (!pickupLocation || !dropoffLocation) {
      toast({
        title: "Please fill in all fields",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    // TODO: Implement actual booking logic
    toast({
      title: "Ride booked successfully!",
      description: `From ${pickupLocation} to ${dropoffLocation}`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box p={8}>
      <Flex justify="space-between" align="center" mb={8}>
        <Heading size="xl">Cabify</Heading>
        <Button colorScheme="blue">Sign In</Button>
      </Flex>
      <Stack spacing={6} mb={8}>
        <Flex align="center">
          <IconButton icon={<FaMapMarkerAlt />} aria-label="Pickup location" mr={2} />
          <Input placeholder="Pickup location" value={pickupLocation} onChange={(e) => setPickupLocation(e.target.value)} />
        </Flex>
        <Flex align="center">
          <IconButton icon={<FaMapMarkerAlt />} aria-label="Dropoff location" mr={2} />
          <Input placeholder="Dropoff location" value={dropoffLocation} onChange={(e) => setDropoffLocation(e.target.value)} />
        </Flex>
      </Stack>
      <Flex mb={8}>
        <Box p={4} borderWidth={1} borderRadius="md" mr={4} cursor="pointer" onClick={() => setSelectedService("standard")} bg={selectedService === "standard" ? "blue.500" : "white"} color={selectedService === "standard" ? "white" : "black"}>
          <FaCar size={32} />
          <Text mt={2}>Standard</Text>
        </Box>
        <Box p={4} borderWidth={1} borderRadius="md" cursor="pointer" onClick={() => setSelectedService("premium")} bg={selectedService === "premium" ? "blue.500" : "white"} color={selectedService === "premium" ? "white" : "black"}>
          <FaTaxi size={32} />
          <Text mt={2}>Premium</Text>
        </Box>
      </Flex>
      <Button colorScheme="blue" size="lg" onClick={handleBookRide}>
        Book Ride
      </Button>
      <Box mt={8}>
        <Heading size="lg" mb={4}>
          Why Cabify?
        </Heading>
        <Flex>
          <Box mr={8}>
            <Image src="https://images.unsplash.com/photo-1531756346973-7b893b8dbbdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyaWRlJTIwc2hhcmluZyUyMGFwcCUyMG9uJTIwcGhvbmV8ZW58MHx8fHwxNzEyNDcxOTIxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Cabify app" mb={4} />
            <Text>Easy booking through our mobile app</Text>
          </Box>
          <Box>
            <Image src="https://images.unsplash.com/photo-1502767882403-636aee14f873?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkcml2ZXIlMjBpbiUyMGNhcnxlbnwwfHx8fDE3MTI0NzE5MjJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Professional driver" mb={4} />
            <Text>Professional and vetted drivers</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Index;
