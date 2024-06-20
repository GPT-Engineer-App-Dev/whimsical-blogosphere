import { Container, Text, VStack, Heading, Box, Image, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = ({ posts }) => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>Welcome to My Blog</Heading>
          <Text fontSize="lg">A place where I share my thoughts and experiences.</Text>
        </Box>
        <Box>
          <Image src="/images/blog-image.jpg" alt="Blog" borderRadius="md" />
        </Box>
        <Box>
          <Heading as="h2" size="lg" mb={4}>Latest Posts</Heading>
          <VStack spacing={4} align="stretch">
            {posts.map((post, index) => (
              <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md">
                <Heading as="h3" size="md">{post.title}</Heading>
                <Text mt={2}>{post.content}</Text>
                {post.imageUrl && <Image src={post.imageUrl} alt={post.title} borderRadius="md" mt={2} />}
                <Link color="teal.500" href="#">Read more</Link>
              </Box>
            ))}
          </VStack>
        </Box>
        <Box textAlign="center">
          <Button as={RouterLink} to="/add-post" colorScheme="teal" size="lg">Add New Post</Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;