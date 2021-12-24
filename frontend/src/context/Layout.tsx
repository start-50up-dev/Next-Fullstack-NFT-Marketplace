import Head from 'next/head';
import Image from 'next/image';
import NavBar from 'src/context/NavBar/NavBar';

const Layout: React.FC = ({ children }) => (
	<>
		<Head>
			{/* <link rel="icon" href="" /> */}
			{/* <link rel="shortcut icon" href="" /> */}
		</Head>
		<NavBar />
		<main>
			<div className="text-center mt-6 mb-2">
				{/* <Image src="" alt="BP Logo" width={170} height={170} /> */}
			</div>
			{children}
		</main>
	</>
);

export default Layout;
