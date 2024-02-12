import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/components/')({
  component: ComponentsOverview
});
function ComponentsOverview() {
  return (
    <div>ComponentsOverview</div>
  )
}

export default ComponentsOverview