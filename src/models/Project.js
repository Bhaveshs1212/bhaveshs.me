/**
 * Project Model
 * Defines the structure and schema for portfolio projects
 */

class Project {
  constructor({
    id,
    slug,
    title,
    tagline,
    shortDescription,
    fullDescription,
    featured = false,
    completionDate,
    technologies = [],
    imageColor,
    image = null,
    liveUrl,
    githubUrl,
    timeline = {},
    contributors = [],
    keyFeatures = []
  }) {
    this.id = id;
    this.slug = slug;
    this.title = title;
    this.tagline = tagline;
    this.shortDescription = shortDescription;
    this.fullDescription = fullDescription;
    this.featured = featured;
    this.completionDate = completionDate;
    this.technologies = technologies;
    this.imageColor = imageColor;
    this.image = image;
    this.liveUrl = liveUrl;
    this.githubUrl = githubUrl;
    this.timeline = timeline;
    this.contributors = contributors;
    this.keyFeatures = keyFeatures;
  }

  /**
   * Get the first N technologies for preview
   */
  getPreviewTechnologies(count = 5) {
    return this.technologies.slice(0, count);
  }

  /**
   * Get remaining technology count for "+X" badge
   */
  getRemainingTechCount(previewCount = 5) {
    return Math.max(0, this.technologies.length - previewCount);
  }

  /**
   * Get the first N key features for preview
   */
  getPreviewFeatures(count = 5) {
    return this.keyFeatures.slice(0, count);
  }

  /**
   * Check if project has an image
   */
  hasImage() {
    return Boolean(this.image);
  }

  /**
   * Check if project has external links
   */
  hasLinks() {
    return Boolean(this.liveUrl || this.githubUrl);
  }

  /**
   * Validate required fields
   */
  isValid() {
    return Boolean(
      this.id &&
      this.slug &&
      this.title &&
      this.tagline &&
      this.shortDescription
    );
  }
}

export default Project;
