import LayoutSite from '@/layouts/LayoutSite'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<LayoutSite>
			<Component {...pageProps} />
		</LayoutSite>
	)
}
