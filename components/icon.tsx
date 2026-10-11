import { Smartphone, Monitor, Server, Wrench, Compass, Code2, ClipboardCheck, Rocket, Building2, Database, Terminal, type LucideIcon } from "lucide-react";
const icons: Record<string, LucideIcon> = { mobile: Smartphone, web: Monitor, server: Server, tools: Wrench, compass: Compass, code: Code2, check: ClipboardCheck, rocket: Rocket, building: Building2, database: Database, terminal: Terminal };
export function Icon({ name, className }: { name: string; className?: string }) {
  const Component = icons[name] ?? Code2;
  return <Component className={className ?? "size-5"} aria-hidden="true" />;
}
