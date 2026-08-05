import ProjectCard from "./ProjectCard";
import projects from "./projects";

function ProjectGallery() {
    return (
        <section className="w-full bg-white py-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <header className="mb-12 text-center">
                    <p className="mb-2 font-semibold uppercase tracking-widest text-amber-600">
                        Udvalgte projekter
                    </p>

                    <p className="mx-auto mt-4 w-full text-lg text-gray-600">
                        Vi udfører kvalitetsarbejde for både private og erhverv. <br />
                        Her kan du se et udvalg af de projekter, vi har leveret.
                    </p>
                </header>

                <div
                    className="
                        grid
                        gap-8
                        sm:grid-cols-2
                        lg:grid-cols-3
                    "
                >
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            image={project.image}
                            href={project.href}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectGallery;