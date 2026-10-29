import type {SVGProps} from "react";
export function Arrow({diagonal=false, ...props}: SVGProps<SVGSVGElement> & {diagonal?:boolean}) {
 return diagonal ? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true" {...props}><path d="M5 19 19 5M7 5h12v12"/></svg> : <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true" {...props}><path d="M4 12h16m-6-6 6 6-6 6"/></svg>;
}
export function Star({className}: {className?:string}) {return <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M24 0 28.7 19.3 48 24 28.7 28.7 24 48 19.3 28.7 0 24 19.3 19.3 24 0Z" fill="currentColor"/></svg>}
export function Pin(){return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>}
