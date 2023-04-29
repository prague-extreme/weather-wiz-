import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="text-slate-300 text-opacity-90 bg-[url('/back.gif')] bg-contain "> 
      {/* bg-[url('/back.gif')] */}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
