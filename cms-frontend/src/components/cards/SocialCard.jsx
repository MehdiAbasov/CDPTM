import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube
} from "react-icons/fa"

const icons = {
    facebook: FaFacebookF,
    instagram: FaInstagram,
    linkedin: FaLinkedinIn,
    youtube: FaYoutube
}

export default function SocialCard({ item }) {

    const Icon = icons[item.icon]
    const name = [item.name]

    return (

        <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            style={{
                borderColor: item.color,
                color: item.color
            }}
            className="group flex items-center bg-white justify-center h-24 rounded-xl transition"
        >

            <div className="flex items-center gap-3">
                <Icon size={35} />
                <h2 className="text-2xl font-bold">{name}</h2>
            </div>
        </a>

    )

}