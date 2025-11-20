import Link from 'next/link'


export default function Header(){
return (
<header className="sticky top-0 bg-[#060606] border-b border-white/5 z-50 text-white">
<div className="container mx-auto flex items-center justify-between p-4">
<div className="text-xl font-bold">DESI<span className="text-gold">PROMPT</span></div>
<nav className="hidden md:flex gap-4">
<Link href="/">Home</Link>
<Link href="/free-images">Free Images</Link>
<Link href="/blog">Blog</Link>
<Link href="/about">About</Link>
</nav>
<button className="px-3 py-1 border rounded">Login</button>
</div>
</header>
)
}
