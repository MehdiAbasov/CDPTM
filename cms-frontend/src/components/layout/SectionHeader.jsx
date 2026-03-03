import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

export default function SectionHeader({
    title,
    subtitle,
    link,
    color
}) {
    const { t } = useTranslation()
    return (

        <div className="flex justify-between items-center mb-12">

            <div>

                <h2 style={{ color: color }} className="text-3xl md:text-5xl font-bold text-[#0B1F3F]">

                    {t(title)}

                </h2>

                {subtitle && (

                    <p style={{ color: color }} className="text-gray-500 text-lg mt-2">

                        {t(subtitle)}

                    </p>

                )}

            </div>

            {link && (

                <Link
                    to={link}
                    className="text-blue-600 font-semibold"
                >
                    {t("common.more")}
                </Link>

            )}

        </div>

    )

}