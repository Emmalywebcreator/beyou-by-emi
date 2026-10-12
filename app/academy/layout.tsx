// Shared wrapper for every /academy route. When the academy grows (courses,
// admissions, gallery…), add nested folders such as app/academy/courses/page.tsx
// and, if needed, an academy sub-navigation here — no restructuring required.
export default function AcademyLayout({ children }: { children: React.ReactNode }) {
  return <div data-section="academy">{children}</div>;
}
