export default function Footer(){
return (
<footer className="bg-[#060606] border-t border-white/5 mt-10 text-gray-400">
<div className="container mx-auto p-4 flex justify-between items-center">
<div>© {new Date().getFullYear()} Desiprompt.in</div>
<div className="flex gap-3">
<a href="#">YouTube</a>
<a href="#">Instagram</a>
<a href="#">WhatsApp</a>
<a href="#">Facebook</a>
<a href="#">Pinterest</a>
</div>
</div>
</footer>
)
}
