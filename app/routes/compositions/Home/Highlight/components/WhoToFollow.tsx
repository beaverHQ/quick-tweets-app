import { Flex, Image, Text } from '@chakra-ui/react';
import Spacer from '~/components/ui/Spacer';
// import Avatar from "./icons/Avatar";

type WhoToFollowProp = {
	avatar: string;
	fullName: string;
	handle: string;
};

export const WhoToFollow = ({ avatar, fullName, handle }: WhoToFollowProp) => {
	return (
		<Flex
			flexDirection={'row'}
			w={'100%'}
			h={'69px'}
			justifyContent={'space-between'}
			_hover={{
				bgColor: '#181919',
			}}
			alignItems={'center'}
		>
			<Image
				src={avatar}
				alt="avatar image"
				width={'48px'}
				height={'48px'}
				objectFit={'cover'}
				borderRadius={'50px'}
				border={'1px solid red'}
				// justifyContent={'center'}
				// alignItems={'center'}
				display={'inline-flex'}
				overflow={'hidden'}
			/>
			<Spacer height={'5px'} />
			<Flex
				flexDirection={'column'}
				justifyContent={'flex-start'}
				alignItems={'start'}

				pl={'15px'}
			>
				<Text color={'white'} fontSize={'16px'} fontWeight={700}>
					{fullName}
				</Text>
				<Text color={'#8899A6'} fontSize={'16px'} fontWeight={500}>
					{handle}
				</Text>
			</Flex>
			{/* <Text
        fontSize={"15px"}
        lineHeight={"1.3em"}
        fontWeight={500}
      >Subscribe to unlock new features.</Text>      */}
			<Spacer height={'10px'} />
			<FollowBtn text={'Follow'} />
		</Flex>
	);
};

// export default WhoToFollow;

type FollowBtnProps = {
	text: string;
};
const FollowBtn = ({ text }: FollowBtnProps) => {
	return (
		<Flex
			w={'107px'}
			h={'36px'}
			bgColor={'#0f1419'}
			// _hover={{
			// 	bgColor: 'rgb(15,20,25)',
			// }}
			borderRadius={'50px'}
			cursor={'pointer'}
			alignItems={'center'}
			justifyContent={'center'}
		>
			<Text fontSize={'15px'} fontWeight={700}>
				{text}
			</Text>
		</Flex>
	);
};

export const lists = [
	{
		avatarIcon:
			'https://phoebeonlinesite.files.wordpress.com/2018/06/dxd5vzevmaagw6s-e1529487605376.jpg',
		name: 'Bessie Cooper',
		handle: '@alessandroveronezi',
	},
	{
		avatarIcon:
			'https://phoebeonlinesite.files.wordpress.com/2018/06/dxd5vzevmaagw6s-e1529487605376.jpg',
		name: 'Jenny Wilson',
		handle: '@gabrielcantarin',
	},
	{
		avatarIcon:
			'https://phoebeonlinesite.files.wordpress.com/2018/06/dxd5vzevmaagw6s-e1529487605376.jpg',
		name: 'Timi Adesina',
		handle: '@timiadesina',
	},
];
