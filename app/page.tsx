'use client'
import PreLoader from "./animations/PreLoader/PreLoader";
import Hero from "./hero-section/Hero";
import useBlobity from 'blobity/lib/react/useBlobity'
import {initialBlobityOptions} from './utils/BlobityConfig'
import { useEffect } from "react";
import dynamic from "next/dynamic";
const Work =dynamic(()=>import('./work-section/Work'));


export default function Home() {
  const blobityInstanse=useBlobity(initialBlobityOptions);
   useEffect(()=>{
   //@ts-ignore 
   window.blobity=blobityInstanse.current;
   },[blobityInstanse]);
  return (
    <>
    <PreLoader/>
    <main className="flex flex-col items-center justify-center">
      <Hero/>
      <Work/>
    </main>
    </>
  );
}
