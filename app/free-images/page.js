import Image from 'next/image'
import images from '../../../images.json' // relative path from app/free-images

export default function FreeImages(){
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
