import Link from 'next/link';

export function Footer() {
  return (
    <div className="mt-24 mb-8 border-t border-gray-200 pt-8">
    <h2 className="text-sm font-medium mb-4">say hello</h2>
    
    <p className="text-base">
      say hi on <Link href="https://x.com/notcodesid" className="text-blue-500 hover:underline">x.com</Link> or email <a href="mailto:notcodesid@gmail.com" className="text-blue-500 hover:underline">notcodesid@gmail.com</a>. i read every message :)
    </p>
  </div>
  );
}
