import Image from "next/image";
import Link from "next/link";
export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center text-muted-foreground text-sm">
          <div className="flex justify-center items-center mb-2">
            <Image src="/logo.svg" alt="lucnt.space logo" width={20} height={20} className="mr-2 filter-green" />
            <p className="font-semibold font-accent text-lg">lucnt.space</p>
          </div>
          <p>© {currentYear} Lucnt. All rights reserved.</p>
          <div className="mt-2">
            <Link href="/privacy" className="hover:underline mx-2">Privacy Policy</Link>
            |
            <Link href="/terms" className="hover:underline mx-2">Terms of Service</Link>
          </div>
        </div>
      </footer>
    );
  }