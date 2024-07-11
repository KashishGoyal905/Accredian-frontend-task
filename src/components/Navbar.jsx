export default function Navbar() {
    return (
        <div className="navbar bg-white shadow h-[10vh]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} className="lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a href="#home">Refer & Earn</a></li>
                        <li><a href="#resources">Resources</a></li>
                        <li><a href="#about">About Us</a></li>
                    </ul>
                </div>
                <div className="flex flex-col">
                    <h2 className="btn btn-ghost text-xl md:text-3xl md:font-bold m-0 p-0 text-sky-600">Accredian</h2>
                    <p className="mt-[-0.8rem] text-[0.5rem] md:text-xs p-0">credentials that matter</p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-4">
                    <li><a href="#home" className="text-base text-black">Refer & Earn</a></li>
                    <li><a href="#resources" className="text-base text-black">Resources</a></li>
                    <li><a href="#about" className="text-base text-black">About Us</a></li>
                </ul>
            </div>
            <div className="navbar-end space-x-2 md:space-x-4">
                <a className="btn btn-outline text-xs md:text-base" href="/">Login</a>
                <a className="btn btn-primary text-white text-xs md:text-base" href="/">Try for Free</a>
            </div>
        </div>
    );
}
