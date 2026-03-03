export default function PartnerCard({ item }) {

    return (

        <div className="flex items-center justify-center px-10">

            <img
                src={item.logo}
                className="md:h-14 h-10 object-contain grayscale-25 opacity-90 hover:grayscale-0 hover:opacity-100 transition"
            />

        </div>

    )

}