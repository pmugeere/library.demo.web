import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="py-2 border-neutral-40 border-b">
          <div className="max-w-[1280px] px-4 md:px-8 mx-auto">
            <div className="mb-2 h-11 hidden md:flex md:mb-4 md:items-center">
              <div className="mr-auto flex gap-x-4">
              </div>
              <button className="flex items-center text-sm font-sans text-core-neutral-900 gap-x-2 font-medium">
                <span className="inline-block [&amp;_svg]:max-w-full [&amp;_svg]:max-h-full w-5 h-5">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true"
                    data-icon-name="PersonOutline" data-icon-category="custom"><path fillRule="evenodd"
                      clipRule="evenodd" d="M12.7502 1.5C11.3825 1.5 10.0707 2.03381 9.10358 2.98399C8.13643 3.93418 7.59309 5.2229 7.59309 6.56667C7.59309 7.91043 8.13643 9.19916 9.10358 10.1493C10.0707 11.0995 11.3825 11.6333 12.7502 11.6333C14.118 11.6333 15.4297 11.0995 16.3969 10.1493C17.364 9.19916 17.9074 7.91043 17.9074 6.56667C17.9074 5.2229 17.364 3.93418 16.3969 2.98399C15.4297 2.03381 14.118 1.5 12.7502 1.5ZM10.2552 4.11536C10.9169 3.46524 11.8144 3.1 12.7502 3.1C13.6861 3.1 14.5836 3.46524 15.2453 4.11536C15.907 4.76549 16.2788 5.64725 16.2788 6.56667C16.2788 7.48608 15.907 8.36784 15.2453 9.01797C14.5836 9.6681 13.6861 10.0333 12.7502 10.0333C11.8144 10.0333 10.9169 9.6681 10.2552 9.01797C9.59342 8.36784 9.22166 7.48608 9.22166 6.56667C9.22166 5.64725 9.59342 4.76549 10.2552 4.11536ZM8.40714 13.4999C7.03938 13.4999 5.72764 14.0337 4.76049 14.9839C3.79334 15.9341 3.25 17.2228 3.25 18.5666V20.6999C3.25 21.1417 3.61457 21.4999 4.06429 21.4999C4.514 21.4999 4.87857 21.1417 4.87857 20.6999V18.5666C4.87857 17.6471 5.25033 16.7654 5.91207 16.1153C6.5738 15.4651 7.47131 15.0999 8.40714 15.0999H17.0929C18.0287 15.0999 18.9262 15.4651 19.5879 16.1153C20.2497 16.7654 20.6214 17.6471 20.6214 18.5666V20.6999C20.6214 21.1417 20.986 21.4999 21.4357 21.4999C21.8854 21.4999 22.25 21.1417 22.25 20.6999V18.5666C22.25 17.2228 21.7067 15.9341 20.7395 14.9839C19.7724 14.0337 18.4606 13.4999 17.0929 13.4999H8.40714Z" fill="currentColor">
                    </path>
                  </svg>
                </span>
                <span className="leading-none">Log in</span>
              </button>
            </div>
          </div>
          <div className='max-w-md mx-auto'>
            <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden border-2 border-gray-200">
              <div className="grid place-items-center h-full w-12 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                type="text"
                id="search"
                placeholder="Search..." />
            </div>
          </div>
          <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8 pt-6">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span>Books</span>
              </a>
            </div>
          </nav>

        </header>
        <div className="max-w-[1280px] px-4 md:px-8 mx-auto py-6">
          {children}
        </div>
      </body>
    </html>
  );
}
