import { Link } from "react-router";
import "./Header.css"

export default function Header() {
    return (
        <div className="Header">
            <h1>
                BCards
            </h1>
            <Link to={"/about"}>About</Link>
            <div className="input_group">
                <input type="search" placeholder="Search.." />
                <div className="search_icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>
            </div>

        </div>
    )
}