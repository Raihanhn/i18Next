import Link from "next/link";
import initTranslations from "../i18n";
import TranslationsProvider from "../TranslationsProvider";
import LanguageChanger from "../LanguageChanger";

const i18nNamespaces = ["home", "common"];

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <div className="text-center ">
        <div className="">{t("header")}</div>
        <Link href={"/about-us"}>{t("common:about_us")}</Link>
        <div className="mt-5">
          <LanguageChanger />
        </div>
      </div>
    </TranslationsProvider>
  );
}
