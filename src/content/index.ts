import projectsJson from './projects.json'
import photosJson from './photos.json'

export interface Project {
  title: string
  thumbnail: string
  excerpt: string
  tags: string[]
}

export interface Photo {
  src: string
  caption: string
}

// Both files are edited from /admin (public/admin/config.yml).
export const projects: Project[] = projectsJson.items
export const photos: Photo[] = photosJson.items
