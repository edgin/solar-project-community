# Solar Project Dashboard

> A lightweight React app that displays solar energy projects with filtering, pagination, and responsive layout. Built using Vite and styled with Bootstrap (or Tailwind CSS).

---

## Features

- Fetches live project data from the EnergySage API
- Filter projects by U.S. state
- Paginated results with adjustable items per page
- Modular component-based architecture
- Responsive design using Bootstrap 5 or Tailwind CSS
- Unit tests with React Testing Library + Jest

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/solar-dashboard.git
cd solar-dashboard
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open your browser at [http://localhost:5173](http://localhost:5173)

---

## Project Structure

```bash
src/
├── components/
│   ├── ProjectCard.tsx        # Reusable project display card
│   ├── FilterPanel.tsx        # Dropdown filter UI
├── pages/
│   └── Dashboard.tsx          # Main project listing and pagination
├── services/
│   └── api.ts                 # API calls to fetch project data
├── __tests__/
│   └── Dashboard.test.tsx     # Unit tests
```

---

## API Reference

- **Endpoint**: `https://api.cdgm.energysage.com/api/v1/projects/search/`
- **Data fetched includes**:
  - `name`
  - `hero_image`
  - `expected_go_live`
  - `average_review_score`

---

## Search and Filter

- Dropdown filter to select projects by state
- Search functionality can be implemented as an enhancement

---

## Testing

To run the test suite:

```bash
npm run test
```

- Tests ensure loading spinner and UI behavior function correctly
- Uses `React Testing Library` and `Jest`

---

## Production Build

```bash
npm run build
```

Generates static files for deployment.

---

## Notes

- Missing or broken images are replaced with a fallback placeholder
- Layout adapts to screen size using Bootstrap's grid and spacing
- Pagination logic and constants are modularized for reuse

---

## Feedback

For questions or feedback, please contact **Luka** or open an issue in this repo.

---
