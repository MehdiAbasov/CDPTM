import i18n from "../../i18n/i18n"

export default function LanguageSwitcher() {

    const changeLang = (lang) => {

        i18n.changeLanguage(lang)
        localStorage.setItem("lang", lang)

    }

    return (

        <div className="flex gap-4">

            <button className="cursor-pointer p-1" onClick={() => changeLang("az")}>
                AZ
            </button>

            <button className="cursor-pointer p-1" onClick={() => changeLang("en")}>
                EN
            </button>

        </div>

    )

}