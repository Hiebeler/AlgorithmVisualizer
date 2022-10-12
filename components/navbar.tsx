import React from "react";

export function Navbar() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-purple-500 max-h-[10vh]">
            <h1>Algorithm Visualizer</h1>
            <button className="bg-slate-400">Bubble Sort</button>
        </nav>
    )
}