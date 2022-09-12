import * as comps from '../components/Components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import meta from '../lib/meta';

export default function Home() {

	const router = useRouter();

	return (
		
		<div>
			<Head>
				
				<title>{meta.title}</title>
				<meta name="description" content={meta.description} />

				<meta name="viewport" content="width=device-width, initial-scale=1" />
				
				<meta charSet='utf-8' />
				<meta name="robots" content="follow, index" />
				<link rel="canonical" href={`https://thelongitudebrand.com${router.asPath}`} />

				{/* Open Graph */}
				<meta property="og:url" content={`https://thelongitudebrand.com${router.asPath}`} />
				<meta property='og:type' content={meta.type} />
				<meta proprety='og:site_name' content='The Longitude Brand' />
				<meta proprety='og:description' content={meta.description} />
				<meta proprety='og:title' content={meta.title} />
				<meta proprety='og:image' content={meta.image} />

				{/* Twitter */}
				<meta proprety='twitter:card' content='summary_large_image' />
				<meta proprety='twitter:site' content="@oscar_brh" />
				<meta proprety='twitter:title' content={meta.title} />
				<meta proprety='twitter:description' content={meta.description} />
				<meta proprety='twitter:image' content={meta.image} />

			</Head>
			<div className='h-auto w-full relative'>
            
				<comps.Navbar/>
				<comps.Preview/>

			</div>
		</div>


	);
};
