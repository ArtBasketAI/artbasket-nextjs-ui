# Help section

## Project structure

```bash
/pages
  /api
    /projects
      [projectId].ts
      index.ts
  _app.tsx
  index.tsx (login page)
  dashboard.tsx
  create_project.tsx
  project.tsx
  project_details.tsx
  comic_page.tsx

/components
  /common
    Header.tsx
    Footer.tsx
  /auth
    LoginForm.tsx
  /dashboard
    ProjectCard.tsx
    NewProjectButton.tsx
  /project
    StoryInputForm.tsx
  /project_details
    StoryPane.tsx
    CharactersPane.tsx
    NavigationPane.tsx
  /comic_page
    StorySection.tsx
    ImagePanel.tsx
    PageNavigation.tsx

/public
  /images
    logo.png

/styles
  globals.css

/utils
  apiHelpers.ts

/hooks
  useProject.ts
  useAuth.ts

/context
  AuthContext.tsx
  ProjectContext.tsx

```
