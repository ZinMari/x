import type { IMenuItem } from "@/shared/data/menu.data";
import Link from "next/link"

interface Props {
    isActive: boolean;
    menuItem: IMenuItem;
}

export function MenuItem({isActive, menuItem}: Props){
    return <Link className={isActive ? 'text-white' : 'text-white/60' } href={menuItem.href}>{menuItem.name}</Link>
}