interface Timeline {
    title: string,
    date: string,
    duration: string,
    description: string,
    current: boolean,
}
const timelineData: Timeline[] = [
    {
        title: 'Flowbite Application UI v2.0.0',
        date: 'January 13th, 2022',
        duration: '2 months',
        description: 'Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.',
        current: true
    },
    {
        title: 'Flowbite Figma v1.3.0',
        date: 'December 7th, 2021',
        duration: '1 month',
        description: 'All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.',
        current: false
    },
    {
        title: 'Flowbite Library v1.2.2',
        date: 'December 2nd, 2021',
        duration: '1 month',
        description: 'Get started with dozens of web components and interactive elements built on top of Tailwind CSS.',
        current: false
    },
];

export default timelineData;