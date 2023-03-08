export default function Card(props) {
    let badgeText = props.item.openSpots === 0 ? "SOLD OUT" : props.item.location === "Online" ? "ONLINE" : null
    return (
        <>
            <div className="text-xl flex flex-col gap-3 relative">
                {badgeText && <div className="absolute top-2 left-2 bg-white p-2 text-sm rounded-md">{badgeText}</div>}
                <img src={props.item.coverImg} alt="pic" className="w-60 rounded-md" />
                <div className="flex gap-2 text-xl">
                    <img src="/images/star.png" alt="star" />
                    <span>{props.item.stats.rating}</span>
                    <span className="text-[#918E9B]">({props.item.stats.reviewCount})</span>
                    <span className="text-[#918E9B]">.{props.item.location}</span>
                </div>
                <p>{props.item.title}</p>
                <p><span className="font-bold">From ${props.item.price}</span> / person</p>
            </div>
        </>
    )
}