"use client";
import { useState } from "react";
import styles from "./links.module.css"
import NavLink from "./navLink/navLink";
import Image from "next/image";
import { handleLogout } from "@/lib/action";

const links = [
    { title: "Homepage", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Blog", path: "/blog" },
  ];

const Links =  ({session}:any) => {
    const[open,setOpen]=useState(false);

  return (
    <div className={styles.container}>
    <div className={styles.links}>
      {links.map((link) => (
     <NavLink key={link.title} item={link}/>
      ))}
      {
      session?.user ? (<>
        {
            session?.isAdmin && (<NavLink item={{title:"Admin",path:"/admin"}}/>)
        }
        <form action={handleLogout}>
        <button className={styles.logout}>Logout</button>
        </form>
        </>
      ):(
        <NavLink item={{title:"Login",path:"/login"}}/>
      )}
    </div>
    {/* <button onClick={()=>setOpen((prev)=>!prev)} className={styles.menuButton}>Menu</button> */}
    <Image src="/menu.png" alt="menu image" width={30} height={30} onClick={()=>setOpen((prev)=>!prev)} className={styles.menuButton}/>
    {open && <div className={styles.mobileLinks}>
    {links.map((link) => (
         <NavLink key={link.title} item={link}/>
    ))}
        </div>}
    </div>
  );
};
export default Links;
