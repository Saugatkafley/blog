interface Timeline {
    title: string,
    date: string,
    duration: string,
    description: string,
    current: boolean,
}
const timelineData: Timeline[] = [
    {
        title: 'AI Engineer @Accelerated Komputing[AnK]',
        date: 'July 2024',
        duration: 'Present',
        description: 'Developing cutting-edge LLMs (Large Language Models) agents to tackle complex Mechanical Engineering challenges in SolidWorks. Backend Development expertise with Emium Corp Japan, leveraging DevOps best practices on Amazon Web Services (AWS) to drive innovation and efficiency.',
        current: true
    },
    {
        title: 'LLM Research Assistant @NepAl Applied Mathematics and Informatics Institute for research(NAAMII)',
        date: 'August 2023',
        duration: '8 months',
        description: `Research and development of chatbot using existing open source large language models (LLMs) and ChatGPT for actively responding to sexual, maternal, and reproductive health (SMRH) topics. Collaboration with Diyo.AI in the development of backend server, API, and DevOps.

Implementation of prompt engineering, retrieval augmentation generation (RAG) model, and fine-tuning. Risk analysis, evaluation, and gap identification of chat models. Collaboration with human experts from Visible Impact (VISIM) and Partnership for Sustainable Development Nepal (PSDNepal).`,
        current: false
    },
    {
        title: 'Research Intern @ChimpVine',
        date: 'June 2023',
        duration: '2 months',
        description: 'Study of AI tools to enchance productivity and efficiency.Worked with Diffusion models and Law Based LLMs.',
        current: false
    },
];

export default timelineData;