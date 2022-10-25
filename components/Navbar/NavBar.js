import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Heading,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';


export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={'messenger.500'} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Heading color={'white'} as='h4' size='md'>
                VitaList
              </Heading>
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              <Link
                px={2}
                py={1}
                rounded={'md'}
                color='white'
                _hover={{
                  textDecoration: 'none',
                  bg: 'messenger.600',
                }}
                href={'/'}>
                Menú
              </Link>
              <Link
                px={2}
                py={1}
                rounded={'md'}
                color='white'
                _hover={{
                  textDecoration: 'none',
                  bg: 'messenger.600',
                }}
                href={'/family'}>
                Familia
              </Link>
              <Link
                px={2}
                py={1}
                rounded={'md'}
                color='white'
                _hover={{
                  textDecoration: 'none',
                  bg: 'messenger.600',
                }}
                href={'/record'}>
                Historial
              </Link>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Configuración</MenuItem>
                <MenuItem>Créditos</MenuItem>
                <MenuDivider />
                <Link href={'/login'}>
                  <MenuItem>Cerrar Sesión</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <Link
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                  textDecoration: 'none',
                  bg: 'messenger.600',
                }}
                href={'/'}>
                Home
              </Link>
              <Link
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                  textDecoration: 'none',
                  bg: 'messenger.600',
                }}
                href={'/family'}>
                Famila
              </Link>
              <Link
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                  textDecoration: 'none',
                  bg: 'messenger.600',
                }}
                href={'/record'}>
                Historial
              </Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}