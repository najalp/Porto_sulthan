import type {MetadataRoute} from "next";
import {districts} from "@/lib/content";
import {siteUrl} from "@/lib/site-url";
export default function sitemap():MetadataRoute.Sitemap{
 const base=siteUrl();
 return ["/","/tentang","/berdaya","/balangan","/galeri","/kontak","/sumber",...districts.map(d=>`/balangan/${d.slug}`)].map(path=>({url:new URL(path,base).toString(),changeFrequency:"monthly" as const,priority:path==="/"?1:0.7}));
}
