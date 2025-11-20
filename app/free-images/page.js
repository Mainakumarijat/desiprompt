import fs from 'fs'
import path from 'path'
import Image from 'next/image'


export default function FreeImages(){
const dataPath = path.join(process.cwd(), 'images.json')
let images = []
try { images = JSON.parse(fs.readFileSync(dataPath)) } catch(e){ images = [] }


return (
<section className="container mx-auto p-6 text-white">
<h1 className="text-2xl mb-4">Free Images</h1>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
{images.map(img=> (
<div key={img.id} className="bg-[#0f0f0f] rounded overflow-hidden">
<Image src={img.optimized || img.url} alt={img.title} width={600} height={400} />
<div className="p-3">
<h3 className="font-semibold">{img.title}</h3>
</div>
</div>
))}
</div>
</section>
)
}
