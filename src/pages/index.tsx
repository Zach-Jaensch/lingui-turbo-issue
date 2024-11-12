import localFont from "next/font/local";
import { t } from "@lingui/macro";
import { loadCatalog } from "#/pages-router-i18n";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {t`This will fail`}
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      translation: await loadCatalog("en-US"),
    },
  };
};
