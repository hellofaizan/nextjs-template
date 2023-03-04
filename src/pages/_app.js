import '@/styles/globals.css'
import Head from 'next/head'
import "bootstrap-icons/font/bootstrap-icons.css";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
        <meta charSet="utf-8" />
        <title>HelloFaizan - Software Enthusias Portfolio</title>
        <link rel="icon" href="/Dfaizan.png" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#171717" />
        <meta name="google-site-verification" content="qF_JdHZXqVUD4Lr5OUovfDC7Tck7Kyw2rynWP97sa5M" />
        <meta
          name="keywords"
          content="HelloFaizan, Faizan Blog, HelloFaizan blog, CuriousFaizan, web developer, github, typescript, nextjs, hellofaizan portfolio"
        />
        <meta name="description" content="A full-stack developer, Building Seamless mobile & web applications." />
        <meta name="author" content="Hello Faizan" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />


        <meta property="og:title" content="HelloFaizan | Software Enthusiast" />
        <meta property="og:site_name" content="HelloFaizan | Software Enthusiast Portfolio" />
        <meta property="og:url" content="https://www.hellofaizan.me" />

        <meta
          property="og:description"
          content="A full-stack developer, Building Seamless mobile & web applications."
        />

        <meta
          property="og:image"
          itemProp="image"
          content="https://anshrathod.com/intro_image_meta.png"
        />

        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@HelloFaizandev" />
        <meta name="twitter:creator" content="@HelloFaizandev" />
        <meta name="twitter:title" content="HelloFaizan | Software Enthusiast" />
        <meta
          name="twitter:description"
          content="A full-stack developer, Building Seamless mobile & web applications."
        />
        <meta
          name="twitter:image"
          itemProp="image"
          content="https://anshrathod.com/intro_image_meta.png"
        />
      </Head>
            <div className="text-black dark:text-white flex flex-row w-full h-full bg-gradient-to-bl from-white to-[#e0e0e0] dark:from-[#171717] dark:to-[#1c1c1c] min-h-screen">
              <Component {...pageProps} />
            </div>
    </>
  )
}
