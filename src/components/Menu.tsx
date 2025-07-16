'use client'
import { MENU } from "@/shared/data/menu.data";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";

import { MenuItem } from "./MenuItem";
import { match } from "path-to-regexp";

export function Menu(){
    const pathName = usePathname();
    const segment = useSelectedLayoutSegment();

    console.log(pathName);
    console.log(segment);

    return (
        <nav className="flex gap-6">
            {MENU.map(menuItem => (
                <MenuItem 
                    key={menuItem.name}
                    menuItem={menuItem}
                    isActive={!!match(menuItem.href)(pathName)}
                />
            ))}
        </nav>
    )
}