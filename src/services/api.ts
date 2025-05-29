export interface Project {
    id: number;
    name: string;
    expected_go_live: string;
    average_review_score: number;
    hero_image: string;
    address?: {
      city: string;
      state: string;
    };
    project_status: string;
  }
  
  export async function fetchProjects(state: string): Promise<Project[]> {
    const query = state ? `?state=${state}` : '';
    const url = `https://api.cdgm.energysage.com/api/v1/projects/search/${query}`;
    const response = await fetch(url);
    const data = await response.json();
    return data || [];
  }
  