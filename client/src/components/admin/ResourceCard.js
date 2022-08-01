import { Box, Image } from '@chakra-ui/react'

function ResourceCard({resource}) {
  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src={resource.sports_type.image}/>

      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          isTruncated
        >
          {resource.name}
        </Box>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            {resource.sports_type.sports_type}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ResourceCard;
