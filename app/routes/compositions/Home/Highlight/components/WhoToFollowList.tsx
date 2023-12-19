import { WhoToFollow } from './WhoToFollow';

const lists = [
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


const WhoToFollowList = () => {
	return (
		<>
			{
				lists.map((item, index) => 
					(
						<WhoToFollow
							key={index}
							avatar={item.avatarIcon}
							fullName={item.name}
							handle={item.handle}
						/>
					)
				)
			}
		</>
	);
};

export default WhoToFollowList;
