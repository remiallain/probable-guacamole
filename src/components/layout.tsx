import { NavLink, Outlet } from "react-router-dom";
import ChiotteGPT from '../assets/ChiotteGPT.png'

export function Layout() {

    const navLinkActive = 'border-b border-amber-800 text-amber-800';
    const navLinkInactive = 'text-neutral-500';

    return <>
        <div className="flex-col flex">
            <div className="border-b bg-neutral-50">
                <div className="flex h-16 items-center px-4 gap-2">
                    <img className="h-[40px]" src={ChiotteGPT} />
                    <h1 className="font-bold text-amber-800">Chiotte<b>GPT</b></h1>
                    {/* <TeamSwitcher />
                <MainNav className="mx-6" /> */}
                    <nav
                        className="ml-4 flex items-center space-x-4 lg:space-x-6"
                    >
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? navLinkActive : navLinkInactive
                            }
                        >
                            Playground
                        </NavLink>
                        <NavLink
                            to="/what-the-fuck"
                            className={({ isActive }) =>
                                isActive ? navLinkActive : navLinkInactive
                            }
                        >
                            Why ?
                        </NavLink>
                    </nav>
                    <div className="ml-auto flex items-center space-x-4">
                        {/* <Search />
                    <UserNav /> */}
                    </div>
                </div>
            </div>
            <div className="flex-1 space-y-4 p-8 pt-6">
                <Outlet />
            </div>
        </div>
    </>
}