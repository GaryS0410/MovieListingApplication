import { Link, Router } from "react-router-dom";

function NavBar() {
    return (
    <header className="bg-base-300 borer-b border-base-content/10">
        <div className="mx-auto max-w-6xl">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-cold text-primary font-mono tracking-tigher">Movie Application</h1>
                <div className="flex items-center gap-4">
                    <Link to={"/register"} clasName="btn ">
                        <span>Register</span>
                    </Link>
                </div>
            </div>
        </div>
    </header>
    ) 
};

export default NavBar