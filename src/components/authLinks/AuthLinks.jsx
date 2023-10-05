"use client";
import Link from 'next/link'
import React from 'react'
import styles from "./authLinks.module.css"
import { useState } from "react";
import { signOut, useSession } from 'next-auth/react';


const AuthLinks = () => {
    const [open, setOpen] = useState(false);
    const {status} =useSession()
  return (
    <>
     {status === "unauthenticated" ?(
        <Link href="/login" >Login</Link>
     ):(
        <>
        <Link href="/write" >write</Link>
        <span className={styles.link} onClick={signOut}>Logout</span></>
     )} 
     <div className={styles.burger} onClick={()=>setOpen(!open)} >
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
      </div>
      {open && (
        <div className={styles.responsiveMenu} >
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status === "unauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className={styles.link} onClick={signOut}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  )
}

export default AuthLinks;
