import { useTranslation } from "react-i18next"

export default function PageHeader({
    title,
    subtitle,
    background
}) {

    const { t } = useTranslation()

    return (

        <div
            className="relative md:h-60 h-20 flex items-center mt-36"
            style={{
                background: background
                    ? `url(${background}) center/cover no-repeat`
                    : `white`
            }}
        >

            <div className="absolute inset-0"></div>

            <div className="relative max-w-7xl container px-6 text-[#003566]">

                <h1 className="text-4xl md:text-5xl font-bold">
                    {t(title)}
                </h1>

                {subtitle && (
                    <p className="mt-4 text-xl opacity-90 max-w-2xl">
                        {t(subtitle)}
                    </p>
                )}

            </div>

        </div >

    )
}