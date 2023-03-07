import photo from "../images/photo-grid.png"

export default function Hero() {
    return (
        <div className="mx-auto container px-3 text-center">
            <img src={photo} alt="grid" className="max-w-4xl mx-auto px-6 py-16" />
            <h1 className="text-4xl font-bold">Online Experiences</h1>
            <p className="text-lg py-2">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    )
}