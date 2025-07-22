import { Button } from './components/Button/Button'
import { ThemeToggle } from './components/ThemeToggle'

function App() {
  return (
    // Add dark mode background color
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 gap-4">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
        Global E-commerce Trends
      </h1>

      <div className="flex gap-4">
        <Button onClick={() => alert('Clicked!')}>Default</Button>
        <Button onClick={() => alert('Clicked!')} variant="destructive">
          Destructive
        </Button>
        <Button onClick={() => alert('Clicked!')} variant="outline">
          Outline
        </Button>
        <Button onClick={() => alert('Clicked!')} variant="subtle">
          Subtle
        </Button>
        <Button onClick={() => alert('Clicked!')} variant="ghost">
          Ghost
        </Button>
        <Button onClick={() => alert('Clicked!')} variant="link">
          Link
        </Button>
      </div>
    </div>
  )
}

export default App