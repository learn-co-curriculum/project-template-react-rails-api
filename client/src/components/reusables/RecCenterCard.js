import { Box, Image } from '@chakra-ui/react'

function RecCenterCard({recCenter}) {
  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src={recCenter.image}/>

      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          isTruncated
        >
          {recCenter.name}
        </Box>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            {recCenter.address}
          </Box>
        </Box>

        <Box as='span' color='gray.600' fontSize='sm'>
          Opens at: {recCenter.opens_at} - Closes at: {recCenter.closes_at}
        </Box>

        <Box display='flex' mt='2' alignItems='center'>
          {recCenter.description}
        </Box>
      </Box>
    </Box>
  );
}

export default RecCenterCard;
