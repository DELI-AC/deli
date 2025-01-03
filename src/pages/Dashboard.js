import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Text,
  Flex,
  Input,
  IconButton,
  Image,
  Badge,
  Stack,
  Heading,
  Grid,
  GridItem,
  HStack,
  Avatar, AvatarBadge, AvatarGroup,
  Card,
  CardFooter,
  CardBody,
  Divider,
  Button,
  ButtonGroup,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Skeleton,
  Alert,
  AlertIcon,

} from "@chakra-ui/react";
import { useNumberInput } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { AiOutlineUser } from 'react-icons/ai';
import breakfast from "../images/breakfast.jpg";
import lunch from "../images/lunch.jpg";
import dinner from "../images/dinner.jpg";
import snacks from "../images/snacks.jpg";
import { CoinsIcon, CreditCard, CurrencyIcon, ForkKnife, ForkKnifeIcon, ScanBarcodeIcon, ScanIcon, ScanQrCode, ScanQrCodeIcon, ShoppingCartIcon, TicketX } from "lucide-react";
import { dummyData } from "../components/testData";
import { ChevronDownIcon, ChevronLeftIcon } from "@chakra-ui/icons";

export default function Dashboard() {
  const [currentMenu, setCurrentMenu] = React.useState([]);
  const [currentRestaurantName, setCurrentRestaurantName] = React.useState("");
  const [alertMessage, setAlertMessage] = React.useState(false);

  const [dummyFetch, setDummyFetch] = React.useState(true);

  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isOpen: isOpen1, onOpen: onOpen1, onClose: onClose1 } = useDisclosure()
  const { isOpen: isOpen2, onOpen: onOpen2, onClose: onClose2 } = useDisclosure()


  const [placement, setPlacement] = React.useState('bottom')

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
  useNumberInput({
    step: 1,
    defaultValue: 1,
    min: 1,
    max: 6,
    precision: 0,
  })

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()


  const hours = new Date().getHours();
  const greeting =
    hours < 12
      ? "Good Morning!"
      : hours < 18
      ? "Good Afternoon!"
      : "Good Evening!";

  function menuAction(restaurantID) {
    const currentRestaurant =  dummyData.find(data => data.unitID === restaurantID);
    setCurrentRestaurantName(currentRestaurant.unitName);
    const restaurantMenu = currentRestaurant.unitMenu
    setCurrentMenu(restaurantMenu);
    onOpen1();
  }

  function makePayment() {
    setAlertMessage(true);

    setTimeout (()=> {
      setAlertMessage(false);
    }, 5000)
  }
 

  return (
    <Box w="100vw" align="center" p={4}>
     <Flex alignItems="center" justifyContent="space-between">
      <Link to="/camera">
      <ScanQrCode size={30}/>
      </Link>
      
      <Flex alignItems="center">
        <Link to="/login">
        <Avatar mr={{base: "4px" , md: "10px"}} bg='#FF7622' icon={<AiOutlineUser fontSize='1rem' />}  w={{base: "36px"}} h={{base: "36px"}}/>
        </Link>
      <Avatar onClick={onOpen} bg='#FF7622' icon={<ShoppingCartIcon size={15} />}  w={{base: "36px"}} h={{base: "36px"}}/>      
      </Flex>
     </Flex>     

     <Flex my="1rem" w="100%" alignItems="center" align="center" justifyContent="center">
     <Input bg="gray.100" h="50px" border="none" maxW="700px" w={{base: "100%"}} placeholder="Search restaurants or dishes"/>
     </Flex>
     <Text  my="1rem" textAlign={{base: "left", md: "center"}} >Open Restaurants</Text>

     <Flex flexDirection="column" >
      <Flex alignItems="center" justifyContent="center" direction={{base: "column", md: "row"}}>
        {dummyData.map((restaurant)=> (
          <Card maxW='sm' boxShadow="none" my={{base: "10px",md: 0}} mx={{base: 0,md: "10px"}} onClick={() => menuAction(restaurant.unitID)}>
          <CardBody>
            <Image
              src={restaurant.unitImage}
              alt=''
              borderRadius='lg'
              w="100%"
            />
            <Flex alignItems="center" align="center" justifyContent="space-between" mt='6' spacing='1' textAlign="left">
              <Heading size='sm'>{restaurant.unitName}</Heading>
              <Text fontSize="sm" color="gray">
              10 Dishes | 5 in diet
              </Text>
            </Flex>
          </CardBody> 
        </Card>
        ))}
      </Flex>
     </Flex>


    
      
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}  >
        <DrawerOverlay />
        <DrawerContent borderRadius={{base: "18px", md: 0}} h="80%" >
          <DrawerHeader color="#FF7622" fontWeight="bold">My Cart</DrawerHeader>
          <DrawerBody display="flex" flexDirection="column" justifyContent="space-between"   overflowX="scroll">
          <Flex flexDirection={{base: "column", md: "row"}}>
          <Card
            border="none"
            boxShadow="none"
            flexDirection="row"
            overflow='hidden'
            variant='outline'
            w={{base: "96%", md: "400px"}}
            alignItems="center"
            justifyContent="space-between"

          >
            <Image
              objectFit='cover'
              maxW={{ base: '100%', sm: '200px' }}
              src={dinner}
              alt=''
              h="80px"
              w="80px"
              borderRadius="14px"
            />

           
           <Flex flexDirection="column" >
            <Heading size='sm'>French Fries</Heading>
            <Text textAlign="left" fontSize="sm" py='2'>
               Ksh.250
            </Text>
           </Flex>

            <HStack >
              <Button size="sm" {...dec}>-</Button>
              <Flex size="sm" borderRadius="20px"  w="2.5rem" {...input}></Flex>
              <Button size="sm" {...inc}>+</Button>
            </HStack>
          </Card>
          <Card 
            my={{base: "12px" ,md: 0}}
            mx={{base: 0 ,md: "12px"}}
            border="none"
            boxShadow="none"
            flexDirection="row"
            overflow='hidden'
            variant='outline'
            w={{base: "96%", md: "400px"}}
            alignItems="center"
            justifyContent="space-between"

          >
            <Image
              objectFit='cover'
              maxW={{ base: '100%', sm: '200px' }}
              src={breakfast}
              alt=''
              h="80px"
              w="80px"
              borderRadius="14px"
            />

           
           <Flex flexDirection="column" >
            <Heading size='sm'>Pancakes</Heading>
            <Text textAlign="left" fontSize="sm" py='2'>
               Ksh.200
            </Text>
           </Flex>

            <HStack >
              <Button size="sm" {...dec}>-</Button>
               <Flex size="sm" borderRadius="20px"  w="2.5rem" {...input}></Flex>
                <Button size="sm" {...inc}>+</Button>
            </HStack>
          </Card>
          </Flex>
             
          <Button alignSelf="center" outline="none" mt="1rem" mb="2rem" color="white" bg="#FF7622" _hover="none" w={{base: "90%", md: "fit-content"}} onClick={onOpen2}>Place Order</Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    




      <Drawer placement={placement} onClose={onClose2} isOpen={isOpen2}  >
        <DrawerOverlay />
        <DrawerContent borderRadius={{base: "18px", md: 0}} h="78%" >
        <DrawerHeader  color="#FF7622" fontWeight="bold" display="flex"  alignItems="center">
            <Flex border="1px solid #FF7622" w="40px" borderRadius="50%"  h="40px" bg="gray.50"  alignItems="center" justifyContent="center" onClick={onClose2}>
                <ChevronLeftIcon/>
            </Flex>
            <Text mx="12px" align="center">Payment</Text></DrawerHeader>
         <DrawerBody display="flex" flexDirection="column" justifyContent="space-between"  overflowX="scroll" >
          <Flex flexDirection="row" overflowWrap="wrap" flexWrap="wrap" w="100%" justifyContent="center" alignItems="center">
          <Card
            boxShadow="none"
            variant='outline'
            w={{base: "40%", md: "400px"}}
            h="134px"
            alignItems="center"
            display="flex"
            justifyContent="center"
            py="1rem"
            mx="1px"

            
          >
            <CoinsIcon/>
            <Text mt="1rem">Cash</Text>

          </Card>
          <Card
            boxShadow="none"
            variant='outline'
            w={{base: "40%", md: "400px"}}
            h="134px"
            alignItems="center"
            display="flex"
            justifyContent="center"
            py="1rem"
            mx="1px"
            mt="1px"


            
          >
            <Image  borderRadius="10px" w="60%" h="60%" src="https://play-lh.googleusercontent.com/bRZF74-13jknePwUd1xam5ZCSdAJVuI_wqtkrisBgu7EEh1jobh2boZihlk-4ikY_S3V=s48-rw"/>
            <Text mt="1rem">M-pesa</Text>

          </Card>

          <Card
            boxShadow="none"
            variant='outline'
            w={{base: "40%", md: "400px"}}
            h="134px"
            alignItems="center"
            display="flex"
            justifyContent="center"
            py="1rem"
            mx="1px"
            mt="1px"


            
          >
          
            <Image  borderRadius="10px" w="60%" h="45%" src="https://logos-world.net/wp-content/uploads/2020/08/PayPal-Symbol.png"/>
            <Text mt="1rem">PayPal</Text>

          </Card>


          <Card
            boxShadow="none"
            variant='outline'
            w={{base: "40%", md: "400px"}}
            h="134px"
            alignItems="center"
            display="flex"
            justifyContent="center"
            py="1rem"
            mx="1px"
            mt="1px"

            
          >
              <CreditCard/>
              <Text mt="1rem">Card</Text>

          </Card>
         
          </Flex>
          <Flex  w="80%"  alignSelf="center"  border="1px solid #EDF2F7" justifyContent="space-between" borderRadius="6px" mt="1rem" px="10px" py="6.5px"  textAlign="left">
            <Text fontWeight="bold"  textAlign="left"  alignItems="center" my="2px">Total Price:</Text> <Text  fontWeight="bold" color="#FF7622">Ksh. 450</Text>
          </Flex>
         

            {alertMessage ? ( <Alert status='success' borderRadius="10px"  mt=".5rem" mb="2rem" zIndex={1} variant='left-accent'>
          <AlertIcon />
          Order Placed successfully. Tracking code: #495E4R
        </Alert>)  : (<Button alignSelf="center" outline="none" mt="1rem" mb="2rem" color="white" bg="#FF7622" _hover="none" w={{base: "90%", md: "fit-content"}} onClick={makePayment}>Check Out</Button>
)}
          </DrawerBody>
        </DrawerContent>
      </Drawer>






      <Drawer placement={placement} onClose={onClose1} isOpen={isOpen1}  >
        <DrawerOverlay />
        <DrawerContent borderRadius={{base: "18px", md: 0}} h="96%" >

          <DrawerHeader  color="#FF7622" fontWeight="bold" display="flex" justifyContent="space-between" alignItems="center">
            <Flex border="1px solid #FF7622" w="40px" borderRadius="50%"  h="40px" bg="gray.50"  alignItems="center" justifyContent="center" onClick={onClose1}>
                <ChevronDownIcon/>
            </Flex>
            <Text align="center">{currentRestaurantName}</Text></DrawerHeader>
          <DrawerBody display="flex" flexDirection="column" justifyContent="space-between"  overflowX="scroll">
          <Flex flexDirection={{base: "column", md: "row"}} wrap={{md:"wrap"}} h={{md: "100%"}} >
            {currentMenu.map((menuItem) => (
              <Card 
              my={{base: "12px" ,md: 0}}
              mx={{base: 0 ,md: "12px"}}
              border="none"
              boxShadow="none"
              flexDirection="row"
              overflow='hidden'
              variant='outline'
              w={{base: "96%", md: "400px"}}
              alignItems="center"
              justifyContent="space-between"
  
            >
              <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src="https://img.freepik.com/free-photo/asian-food-restaurant_7939-2017.jpg?ga=GA1.1.1490884652.1734967617&semt=ais_hybrid"
                alt=''
                h="80px"
                w="80px"
                borderRadius="14px"
              />
  
             
             <Flex flexDirection="column"  >
              <Heading size='sm'>{menuItem.itemName}</Heading>
              <Text textAlign="left" fontSize="sm" py='2'>
                 Ksh.{menuItem.itemCost}
              </Text>
             </Flex>
  
              <HStack >
                <Button size="sm" {...dec}>-</Button>
                 <Flex size="sm" borderRadius="20px"  w="2.5rem" {...input}></Flex>
                  <Button size="sm" {...inc}>+</Button>
              </HStack>
            </Card>
            ))}
           
          </Flex>
            
          </DrawerBody>
        </DrawerContent>
      </Drawer>

  </Box>

)}
