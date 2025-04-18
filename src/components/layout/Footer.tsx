import Link from 'next/link';

export function Footer() {
  return (
    <footer className="pb-8">
      <div className="reflection-container">
        <div className="section-divider"></div>

        <div className="mt-8">
          <h3 className="text-lg font-serif mb-4">connect</h3>
          <ul className="space-y-2">
            <li>
              <Link href="mailto:notcodesid@gmail.com" className="link-hover font-serif">
                notcodesid@gmail.com
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/sidharthh-pandro" target="_blank" rel="noopener noreferrer" className="link-hover font-serif">
                linkedIn
              </Link>
            </li>
            <li>
              <Link href="https://x.com/notcodesid" target="_blank" rel="noopener noreferrer" className="link-hover font-serif">
                x
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
