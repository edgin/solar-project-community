import { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import FilterPanel from '../components/FilterPanel';
import { fetchProjects } from '../services/api';
import type { Project } from '../services/api';
import { usePagination } from '../hooks/usePagination';

const ITEMS_PER_PAGE = 6;

export default function Dashboard() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [stateFilter, setStateFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects(stateFilter).then((data) => {
      setProjects(data);
      setCurrentPage(1);
      setLoading(false);
    });
  }, [stateFilter]);

  const {
    totalPages,
    currentItems: currentProjects,
    visiblePages,
    startIndex,
  } = usePagination({
    items: projects,
    currentPage,
    itemsPerPage: ITEMS_PER_PAGE,
  });

  return (
    <div className="dashboard container-fluid">
      <FilterPanel state={stateFilter} setState={setStateFilter} />
      
      <div className="dashboard__grid">
        {loading ? (
          <div className="dashboard__loader">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          currentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        )}
      </div>

      <div className="dashboard__pagination-container" aria-label="Project pagination">
        <p className="dashboard__pagination-summary">
          {startIndex + 1}–{Math.min(startIndex + ITEMS_PER_PAGE, projects.length)} of {projects.length}
        </p>
        <nav className="dashboard__pagination">
          <ul className="dashboard__pagination-list pagination justify-content-center">
            <li className={`page-item${currentPage === 1 ? ' disabled' : ''}`}>
              <button className="page-link" onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}>
                <img src="/caret-left-fill.svg" alt="previous" />
              </button>
            </li>
            {visiblePages.map((page) => (
              <li key={page} className={`page-item${currentPage === page ? ' active' : ''}`}>
                <button className="page-link" onClick={() => setCurrentPage(page)}>
                  {page}
                </button>
              </li>
            ))}
            <li className={`page-item${currentPage === totalPages ? ' disabled' : ''}`}>
              <button className="page-link" onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}>
                <img src="/caret-right-fill.svg" alt="next" />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
