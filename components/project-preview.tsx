import { ArrowUpRight, Check, Heart, MessageCircle, MoreHorizontal, Play, Plus, Search, Stethoscope, Users, Wifi } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/lib/portfolio";

export function ProjectPreview({ project }: { project: Project }) {
  return <div className="project-preview" aria-label={project.name + " illustrative interface preview"}>
    <div className="preview-window">
      <div className="window-bar"><span className="window-dots"><i /><i /><i /></span><span>{project.name.toLowerCase()}.app</span><ArrowUpRight className="size-3" /></div>
      {project.id === "docrx" ? <div className="mock-content">
        <div className="mock-heading"><span className="icon-box"><Stethoscope /></span><div><strong>DocRx Clinic</strong><span>Your practice, connected.</span></div><Wifi className="size-4 text-primary ml-auto" /></div>
        <div className="mock-divider" />
        <div className="flex items-center justify-between"><span className="mock-label">PATIENT RECORD</span><Badge variant="secondary">Today</Badge></div>
        <div className="patient-row"><span className="avatar">AM</span><div><strong>Alex Morgan</strong><span>Patient #2041 · Consultation</span></div></div>
        <div className="prescription"><div className="flex items-center justify-between"><strong>Prescription</strong><span className="rx-mark">℞</span></div><div className="skeleton-line" /><div className="skeleton-line short" /><div className="mock-complete"><Check className="size-3" />Digital record saved</div></div>
        <div className="mock-footer"><span>All records in one place</span><ArrowUpRight className="size-4" /></div>
      </div> : project.id === "friendly" ? <div className="mock-content">
        <div className="mock-heading"><span className="icon-box"><Users /></span><div><strong>Community Feed</strong><span>Your people. Your space.</span></div><Badge className="ml-auto">Live</Badge></div>
        <div className="mock-search"><Search className="size-3.5" />What's happening?</div>
        {[{ initials: "AR", name: "Alex Rivera", time: "2m", text: "Just shipped our new design system. Small details, big difference.", likes: "24" }, { initials: "SC", name: "Sarah Chen", time: "14m", text: "A little progress, every single day. Building something good.", likes: "18" }].map(post => <div className="feed-post" key={post.name}><div className="flex gap-2.5"><span className="avatar">{post.initials}</span><div className="grow"><div className="flex justify-between"><strong>{post.name}</strong><span className="mock-label">{post.time}</span></div><p>{post.text}</p><div className="feed-actions"><span><Heart />{post.likes}</span><span><MessageCircle />Reply</span><MoreHorizontal className="ml-auto" /></div></div></div></div>)}
      </div> : <div className="mock-content movie-content">
        <div className="mock-heading"><div><strong className="movie-wordmark">nadplay<span>+</span></strong><span>Your next great watch.</span></div><Search className="size-4 ml-auto" /></div>
        <div className="movie-feature"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><span className="movie-small-label">EXPLORE SOMETHING NEW</span><div className="movie-feature-title"><span>BEYOND<br />THE HORIZON</span><span className="play-icon"><Play className="size-4" fill="currentColor" /></span></div></div>
        <div className="flex items-center justify-between mock-section-label"><strong>Your watchlist</strong><Plus className="size-3" /></div>
        <div className="movie-tiles">{["Discovery", "Adventure", "Drama"].map((title, i) => <div key={title}><div className={"movie-poster poster-" + i}><span>{String(i + 1).padStart(2, "0")}</span></div><span>{title}</span></div>)}</div>
      </div>}
    </div>
    <span className="preview-caption">INTERFACE PREVIEW</span>
  </div>;
}
