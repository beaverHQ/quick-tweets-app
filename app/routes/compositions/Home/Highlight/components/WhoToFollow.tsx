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
			justifyContent={"space-between"}
			h={'69px'}
			_hover={{
        bgColor: "#1d1f23",
        cursor: "pointer",
      }}
			alignItems={'center'}
			px={"15px"}
		>
			<Flex>
				<Image
					src={avatar}
					alt="avatar image"
					width={'48px'}
					height={'48px'}
					objectFit={'cover'}
					borderRadius={'50px'}
					overflow={'hidden'}
				/>
				<Spacer width={'12px'} />
				<Flex
					flexDirection={'column'}
					justifyContent={'flex-start'}
					alignItems={'start'}
				>
					<Text color={'white'} fontSize={'16px'} fontWeight={700}>
						{fullName}
					</Text>
					<Text color={'#8899A6'} fontSize={'16px'} fontWeight={500}>
						{handle}
					</Text>
				</Flex>
				<Spacer height={'10px'} />
			</Flex>
			<FollowBtn text={'Follow'} />
		</Flex>
	);
};


type FollowBtnProps = {
	text: string;
};
const FollowBtn = ({ text }: FollowBtnProps) => {
	return (
		<Flex
			w={'78px'}
			h={'32px'}
			fontSize={"15px"}
			fontWeight={700}
			borderRadius={'50px'}
			color={'#0f1419'}
			cursor={'pointer'}
			bgColor={"#e6e9ea"}
			alignItems={'center'}
			justifyContent={'center'}
		>
			<Text fontSize={'15px'} fontWeight={700}>
				{text}
			</Text>
		</Flex>
	);
};
