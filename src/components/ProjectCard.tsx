import type { Project } from '../services/api';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="project-card shadow card mb-4"
      style={{ width: 'calc(33.333% - 1rem)' }}>
      <img
        src={project.hero_image || '/fallback-image.jpg'}
        className="project-card__image card-img-top object-fit-cover"
        style={{ height: '200px' }}
        alt={project.name}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src = '/placeholder-image.jpg';
        }}
      />
      <div className="project-card__body card-body">
        <h5 className="project-card__title card-title">{project.name}</h5>
        <div className="project-card__wrapper">
          <p className="project-card__text card-text">
            <span>Expected Go Live:</span> <span>{project.expected_go_live}</span>
          </p>
          <p className="project-card__text card-text">
            <span>Review Score:</span> <span>{project.average_review_score.toFixed(1)}</span>
          </p>
          <p className="project-card__text card-text">
            <span>Location: </span>
            <span>
              {project.address?.city}, {project.address?.state}
            </span>
          </p>
        </div>
        <span className="project-card__status tag">{project.project_status}</span>
      </div>
    </div>
  );
}
