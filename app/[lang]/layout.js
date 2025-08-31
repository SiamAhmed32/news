import Header from "@/components/Header";
import { getDictionary } from "./dictionary";
import MarqueBanner from "@/components/MarqueBanner";
import Footer from "@/components/Footer";

export default async function LanguageLayout({ children, params: { lang } }) {
  const dictionary = await getDictionary(lang);

  return (
    <div>
      <Header lang={lang} dictionary = {dictionary}/>
      <MarqueBanner dictionary={dictionary} />
      <main className="max-w-7xl mx-auto px-4 py-8">{children}</main>
      <Footer dictionary={dictionary} />
    </div>
  );
}
