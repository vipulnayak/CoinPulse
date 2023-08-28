import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import btcSrc from "../assets/crimg.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={{ base: "75vh", md: "85vh" }}>
      <motion.div
        style={{
          height: { base: "70vh", md: "80vh" },
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w={"full"}
          h={{ base: "70vh", md: "80vh" }}
          objectFit={"contain"}
          src={btcSrc}
          filter={"grayscale(0.7)"}
        />
      </motion.div>

      <Text
        fontSize={{ base: "4xl", md: "5xl", lg: "5xl" }} // Responsive font sizes based on screen breakpoints
        textAlign={"center"}
        fontWeight={"bold"}
        color={"whiteAlpha.700"}
        mt={{ base: "3", md: "5" }} // Adjust the marginTop based on screen breakpoints
      >
        CryptoVerse
      </Text>
    </Box>
  );
};

export default Home;
