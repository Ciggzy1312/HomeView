import { Box, Text } from '@chakra-ui/layout';
import Link from 'next/link';

const Footer = () => (
    <Box textAlign='center' p='5' color='gray.600' borderTop='1px' borderColor='gray.100'>
        Made by <Link href='https://twitter.com/Ciggzy_' passHref><a target='_blank' rel='noreferrer'><Text fontWeight='bold'>Ciggzy</Text></a></Link>
    </Box>
);

export default Footer;