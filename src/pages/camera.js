import React, { useState } from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import QrScanner from "react-qr-scanner";
import { ArrowBackIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export default function QRCodeScanner() {
  const [data, setData] = useState("No result");
  const [showScanner, setShowScanner] = useState(false);

  const handleScan = (data) => {
    if (data) {
      setData(data); // Update the state with scanned data
      setShowScanner(false); // Optionally hide the scanner after scanning
    }
  };

  const handleError = (err) => {
    console.error(err); // Handle errors
  };

  return (
    <Box justify="center" align="center" maxW="800px">
      <Flex w="40px" borderRadius="50%" mt="1.5rem"   h="40px" bg="gray.50"  alignItems="center" justifyContent="center">
        <Link to="/dashboard">
        <ChevronLeftIcon/>

        </Link>
      </Flex>
      {/* Show the QR Scanner */}
      <Box
        border="1px solid #ccc"
        w="90%"
        h="300px"
        mb={4}
        mt="1rem"
        borderRadius="20px"
      >
        {showScanner && (
          <QrScanner
            delay={300} // Delay in milliseconds between scans
            onError={handleError}
            onScan={handleScan}
            style={{ width: "100%", height: "100%", borderRadius: "20px" }}
          />
        )}
      </Box>
      {/* Display the scanned QR code data */}
      <Box mt={4} p={4}>
        <strong>Scanned Data:</strong> {data}
      </Box>
      <Button
        onClick={() => setShowScanner(!showScanner)}
        colorScheme="orange"
        mb={4}
        mt={2}
      >
        {showScanner ? "Stop Scanning" : "Scan QR"}
      </Button>
    </Box>
  );
}
