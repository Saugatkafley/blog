interface TimelineItem {
  title: string
  date: string
  duration: string
  description: string
  current: boolean
}
const TimelineItem = ({ title, date, duration, description, current }) => {
  const svgColor = current ? 'green' : 'blue'
  return (
    <li className="mb-10 ms-6">
      <span
        className={`absolute flex h-6 w-6 items-center justify-center bg-${svgColor}-100 -start-3 rounded-full ring-8 ring-gray-200 dark:ring-gray-900 dark:bg-${svgColor}-900`}
      >
        <svg
          className={`h-2.5 w-2.5 text-blue-900 dark:text-blue-300`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
        </svg>
      </span>
      <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {date}
      </time>
      <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {duration}
      </time>
      <p className="text-base font-normal text-gray-500 dark:text-gray-400">{description}</p>
    </li>
  )
}

const Timeline = ({ timelineItems = [] }: { timelineItems: TimelineItem[] }) => (
  <ul className="relative border-l border-gray-200 dark:border-gray-700">
    {timelineItems.map((item, index) => {
      if (item && item.title && item.date && item.duration && item.description) {
        return <TimelineItem key={index} {...item} />
      } else {
        console.error(`Invalid timeline item at index ${index}:`, item)
        return null
      }
    })}
  </ul>
)
export default Timeline
