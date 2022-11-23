import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate()
  const [form,setForm] =useState({});
  const handleChange=(e)=>{
      const {name,type,value,checked} = e.target;
      if(type==='Checkbox')
      {
        setForm({
          ...form,
          [name]:checked
        })
      }
      else{
        setForm({
          ...form,
          [name]:value
        })
      }
 
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(form);

  }
  return (
    <Flex justifyContent="center" alignItems='center' height='90vh'>
      <form>
        <Box  padding="2rem" maxW="1200px">
          <Text
            paddingBottom="1rem"
            textAlign="left"
            fontSize="1xl"
            fontWeight="600"
          >
            PERSONAL INFORMATION
          </Text>
          <Flex justifyContent="space-evenly" gap="15px">
            <Input
              w="350px"
              borderRadius="none"
              type="text"
              placeholder="First Name"
              onChange={handleChange}
              name="FirstName"
              value={form.FirstName||''}
            />
            <Input
              w="350px"
              borderRadius="none"
              type="text"
              placeholder="Last Name"
              onChange={handleChange}
              name="LastName"
              value={form.LastName||''}
            />
          </Flex>
          <Flex padding="1.2rem 0rem">
            <Checkbox marginRight='15px'/>
            <Text fontSize="sm">Sign Up for Newsletter</Text>
          </Flex>
          <Flex>
            <Checkbox marginRight='15px'/>
            <Text fontSize="sm">Allow remote shopping assistance</Text>
          </Flex>

          <Text
            padding="2rem 0rem"
            textAlign="left"
            fontSize="1xl"
            fontWeight="600"
          >
            SIGN-IN INFORMATION
          </Text>
          <Flex justifyContent="space-evenly" gap="15px" flexDirection="column">
            <FormLabel>Email address</FormLabel>
            <Input w="350px" borderRadius="none" type="email"      name="email"
              value={form.email||''}   onChange={handleChange}/>

            <FormLabel>Password</FormLabel>
            <Input w="350px" borderRadius="none" type="password"      name="password"
              value={form.password||''}   onChange={handleChange}/>
          </Flex>
        </Box>
        <Flex justifyContent='space-evenly'>
          <Button
            w="40%"
            borderRadius="15px"
            backgroundColor="white"
            border='2px solid'
            // onClick={navigate("/")}
          >
            <Link to="/">Back</Link>
          </Button>
          <Button
            w="40%"
            borderRadius="0px"
            backgroundColor="black"
            color="white"
            _hover={{ backgroundColor: "#10693c" }}
            onClick={handleSubmit}
          >
            Create an Account
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};

export default Signup;
