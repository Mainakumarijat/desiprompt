import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'


export const metadata = {
title: 'Desiprompt.in',
description: 'Royal premium free images - Desiprompt'
}


export default function RootLayout({ children }) {
return (
<html lang="hi">
<body>
<Header />
<main className="min-h-screen">{children}</main>
<Footer />
</body>
</html>
)
}
