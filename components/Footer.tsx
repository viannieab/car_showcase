import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image src="/logo.svg" alt="logo" width={118} height={18} className="object-contain"/>
          <p className="text-base text-gray-700">
            Car Hub {currentYear} <br />
            All rights reserved &copy;
          </p>
        </div>
        <div className="footer_links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer_link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>&copy;{currentYear} CarHub. All Rights Reserved</p>
        <div className="footer_copyrights-link">
          <Link href="/" className="text-gray-500">
            Developer ~ Viannie Abaine
          </Link>
          <Link href="https://www.desishub.com" className="text-gray-500">
            Desishub.Inc
          </Link>
          <Link href="/" className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Term of use
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
