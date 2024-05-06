import React from "react";
import { useTranslation } from "react-i18next";
import initTranslations from "../../i18n";
import TranslationsProvider from "../../TranslationsProvider";

const i18nNamespaces = ["subheader", "common"];

export default async function page({
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
      <div>{t("common:subheader")} </div>
    </TranslationsProvider>
  );
}
