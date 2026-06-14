import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';

function toProjectFields(project) {
  return [
    { key: 'subtitle', label: '简介', value: project.subtitle, type: 'string', color: 'cyan' },
    { key: 'tools', label: '技术栈', value: project.tools, type: 'array', color: 'emerald' },
    { key: 'role', label: '角色', value: project.role, type: 'string', color: 'violet' },
    { key: 'status', label: '状态', value: project.status, type: 'string', color: 'orange' },
    { key: 'description', label: '描述', value: project.description, type: 'string', color: 'sky' },
    { key: 'highlights', label: '亮点', value: project.highlights, type: 'array', color: 'rose' },
  ];
}

const Projects = () => {
  return (
    <div id='projects' className="relative z-50  my-12 lg:my-24">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
            项目列表
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-24">
        <div className="flex flex-col gap-6">
          {projectsData.slice(0, 4).map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-full mx-auto max-w-2xl sticky"
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                <ProjectCard varName="project" title={project.name} fields={toProjectFields(project)} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
