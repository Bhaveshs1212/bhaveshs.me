/**
 * Project Helper Utilities
 * Functions for filtering, sorting, and searching projects
 */

/**
 * Filter projects by featured status
 */
export const filterByFeatured = (projects, featured = true) => {
  return projects.filter(project => project.featured === featured);
};

/**
 * Filter projects by technology
 */
export const filterByTechnology = (projects, technology) => {
  return projects.filter(project => 
    project.technologies.some(tech => 
      tech.toLowerCase().includes(technology.toLowerCase())
    )
  );
};

/**
 * Filter projects by completion date
 */
export const filterByDate = (projects, year) => {
  return projects.filter(project => 
    project.completionDate && project.completionDate.includes(year)
  );
};

/**
 * Sort projects by date (newest first)
 */
export const sortByDate = (projects, ascending = false) => {
  return [...projects].sort((a, b) => {
    const dateA = new Date(a.timeline?.published?.date || 0);
    const dateB = new Date(b.timeline?.published?.date || 0);
    return ascending ? dateA - dateB : dateB - dateA;
  });
};

/**
 * Sort projects by title (alphabetical)
 */
export const sortByTitle = (projects, ascending = true) => {
  return [...projects].sort((a, b) => {
    return ascending 
      ? a.title.localeCompare(b.title)
      : b.title.localeCompare(a.title);
  });
};

/**
 * Search projects by keyword (searches title, tagline, description)
 */
export const searchProjects = (projects, keyword) => {
  if (!keyword) return projects;
  
  const lowerKeyword = keyword.toLowerCase();
  return projects.filter(project => 
    project.title.toLowerCase().includes(lowerKeyword) ||
    project.tagline.toLowerCase().includes(lowerKeyword) ||
    project.shortDescription.toLowerCase().includes(lowerKeyword) ||
    project.fullDescription.toLowerCase().includes(lowerKeyword)
  );
};

/**
 * Get unique technologies from all projects
 */
export const getAllTechnologies = (projects) => {
  const techSet = new Set();
  projects.forEach(project => {
    project.technologies.forEach(tech => techSet.add(tech));
  });
  return Array.from(techSet).sort();
};

/**
 * Get projects grouped by year
 */
export const groupByYear = (projects) => {
  const grouped = {};
  projects.forEach(project => {
    const year = project.completionDate ? project.completionDate.split(' ')[1] : 'Unknown';
    if (!grouped[year]) {
      grouped[year] = [];
    }
    grouped[year].push(project);
  });
  return grouped;
};

/**
 * Get project statistics
 */
export const getProjectStats = (projects) => {
  return {
    total: projects.length,
    featured: projects.filter(p => p.featured).length,
    totalTechnologies: getAllTechnologies(projects).length,
    years: Object.keys(groupByYear(projects)).length
  };
};
