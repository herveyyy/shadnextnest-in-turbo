# TEMPLATE FOR TURBOREPO

FULLSTACK MONOREPO

- NEXT JS (v15)
- NEST JS
- SHADCN (TAILWIND CSS V4)
- DATABASE (DRIZZLE ORM)

## Deployment

To deploy this project run

```bash
  pnpm build
```

```bash
  pnpm dev
```

## Components

#### Structure in UI Package

```bash
├── components/  # UI Components (Atomic Design)
│   ├── _defaults/   # Shadcn Components
│   ├── atoms/   # Smallest reusable components(Button, Input, Label)
│   ├── molecules/  # Grouped atoms forming functionalcomponents
│   ├── organisms/  # Complex UI structures combining molecules
│   ├── templates/  # Page layouts (AuthLayout, DashboardLayout)
```

#### Adding Shadcn Components to App

```bash
cd apps/<appname>
```

```bash
pnpm dlx shadcn@latest add [COMPONENT NAME]
```

this will automatically add the component file to UI package.

## Documentation

- [Flowchart Documentation](https://docs.google.com/document/d/1usc2oNQn0pEZD5capyTYfdEeJiZ6fcillRRS8ZNB84M/edit?tab=t.0)
- [OOP Backend Documentation](https://docs.google.com/document/d/1usc2oNQn0pEZD5capyTYfdEeJiZ6fcillRRS8ZNB84M/edit?tab=t.w7wyyadknu8n)
- [ERD Documentation](https://docs.google.com/document/d/1usc2oNQn0pEZD5capyTYfdEeJiZ6fcillRRS8ZNB84M/edit?tab=t.u7shmnloj2vj)

## Authors

- [@herveyyy](https://www.github.com/herveyyy)
