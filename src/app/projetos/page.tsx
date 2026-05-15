import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { ProjectsArchive } from "@/sections/ProjectsArchive";

export const metadata: Metadata = {
  title: "Projetos Full Stack | Luiz Messias",
  description:
    "Cases de desenvolvimento full stack com sistemas SaaS, dashboards, automações, integrações, bancos de dados, APIs e IA aplicada.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <ProjectsArchive />
    </>
  );
}
