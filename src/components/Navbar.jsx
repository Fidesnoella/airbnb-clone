import logo from "../images/airbnb-logo.png"

export default function Navbar() {
    return (
        <>
            <div className="bg-white drop-shadow-md">
                <img src={logo} alt="logo" width={160} className="p-4" />
            </div>
        </>
    )
}