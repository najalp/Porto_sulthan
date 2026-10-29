import type {ReactNode} from "react";
import {Star} from "@/components/Icons";
export default function PageIntro({index,eyebrow,title,description}:{index:string;eyebrow:string;title:ReactNode;description:string}){return <section className="page-intro"><div className="container page-intro-inner"><div className="page-intro-meta"><span>{index} / {eyebrow}</span><Star/></div><h1>{title}</h1><p>{description}</p><div className="page-intro-line"/></div></section>}
