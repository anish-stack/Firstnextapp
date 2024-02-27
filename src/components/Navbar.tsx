'use client'
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className={cn("fixed top-10 inset-x-0 border-2 rounded-[40px] max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <Link href={"/"}>
                    <MenuItem setActive={setActive} active={active} item="Home" >

                    </MenuItem>
                </Link>
                <MenuItem setActive={setActive} active={active} item="Our Courses" >
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/All-Courses">All Courses</HoveredLink>
                        <HoveredLink href="/web-dev">Web Development</HoveredLink>
                        <HoveredLink href="/interface-design">interface-design</HoveredLink>
                        <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                        <HoveredLink href="/branding">Branding</HoveredLink>
                    </div>
                </MenuItem>
                <Link href={"/contact-us"}>
                    <MenuItem setActive={setActive} active={active} item="Contact Us" >
                    </MenuItem>
                </Link>
            </Menu>
        </div>
    )
}

export default Navbar