import Link from 'next/link';

interface BlogCardProps {
  image: string;
  category: string;
  title: string;
  date: string;
}

export default function BlogCard({ image, category, title, date }: BlogCardProps) {
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  return (
    <Link 
      href={`/blogs/${slug}`}
      className="border border-[#E8E8EA] rounded-xl flex flex-col items-center bg-white shadow-none transition-transform hover:scale-[1.02]"
      style={{ width: "392px", height: "448px" }}
    >
      <div className="mt-4 overflow-hidden rounded-md" style={{ width: "360px", height: "240px", flexShrink: 0 }}>
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="w-full px-4 mt-6 flex flex-col items-start text-left flex-grow">
        <div 
          className="rounded-sm flex items-center justify-center px-3 py-1 mb-4"
          style={{ backgroundColor: "#4B6BFB0D", color: "#4B6BFB", fontSize: "14px", fontWeight: 500 }}
        >
          {category}
        </div>
        
        <h3 
          className="text-black mb-auto line-clamp-2"
          style={{ fontSize: "20px", fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif", fontWeight: 400, lineHeight: "1.4" }}
        >
          {title}
        </h3>
        
        <span 
          style={{ color: "#686972", fontWeight: 300, fontSize: "16px", marginTop: "16px", marginBottom: "16px" }}
        >
          {date}
        </span>
      </div>
    </Link>
  );
}
