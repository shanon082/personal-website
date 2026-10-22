export const profile = {
    name: 'Shanon Simon Lubega',
    email: 'shanonsimon082@gmail.com',
    github: 'https://github.com/shanon082',
    company: 'https://shanvexa-technologies.vercel.app/',
    site: 'https://personal-website-rho-sandy-79.vercel.app',
    cv: '/SHANON_SIMON_LUBEGA_CV.pdf',
};
export const projects = [
    {
        title: 'Automated Timetable Generator', category: 'Scheduling & optimisation',
        problem: 'Creating institutional timetables means balancing competing scheduling constraints.',
        solution: 'A timetable-generation application using genetic algorithms and constraint satisfaction to explore possible schedules.',
        contribution: 'Full-stack development of the scheduling application.',
        technologies: ['Laravel', 'React', 'PostgreSQL', 'Genetic algorithms'],
        status: 'Academic project', github: '', demo: '',
    },
    {
        title: 'Energy-Sharing Platform', category: 'Web & mobile',
        problem: 'Exploring how users could coordinate sharing energy through a digital platform.',
        solution: 'A prototype connecting a Django backend with a Next.js interface and Android integration. Financial transactions and meter integrations are prototype concepts, not live services.',
        contribution: 'Full-stack prototype development and Android integration.',
        technologies: ['Django', 'Next.js', 'TypeScript', 'Android integration'],
        status: 'Prototype', github: '', demo: '',
    },
    {
        title: 'Avenora Foundation Website', category: 'Organisation website',
        problem: 'Demonstrating how a foundation could present its work online.',
        solution: 'A fictional foundation website built as a client-presentation concept. It does not represent a paid client engagement or a real foundation.',
        contribution: 'Website design and development.',
        technologies: ['Next.js', 'TypeScript'], status: 'Fictional presentation concept',
        github: '', demo: 'https://avenora-foundation.vercel.app/',
    },
    {
        title: 'Secure Authentication System', category: 'Application foundations',
        problem: 'Applications need a dedicated foundation for user authentication.',
        solution: 'An authentication application combining a React interface, an Express backend, and MongoDB storage.',
        contribution: 'Frontend and backend authentication development.',
        technologies: ['Node.js', 'Express', 'React', 'MongoDB'],
        status: 'Personal project · deployment unverified', github: '', demo: '',
    },
    {
        title: 'E-Commerce Platform', category: 'Commerce',
        problem: 'Providing a web interface for browsing products and managing a shopping cart.',
        solution: 'A PHP and JavaScript storefront with SQL-backed data and an administration interface. Live payment processing is not verified.',
        contribution: 'Full-stack storefront development.',
        technologies: ['PHP', 'JavaScript', 'Tailwind CSS', 'SQL'],
        status: 'Personal project · deployment unverified', github: 'https://github.com/shanon082/E-commerce-using-tailwind', demo: '',
    },
    {
        title: 'Sickle-Cell Image Multiplier', category: 'Research tooling',
        problem: 'Image-based research can require additional examples in a dataset.',
        solution: 'A React and Django tool for expanding image datasets for sickle-cell research. It is not a diagnostic tool.',
        contribution: 'Web interface and backend development.',
        technologies: ['React', 'Django', 'Tailwind CSS', 'SQLite'],
        status: 'Research tool · deployment unverified', github: '', demo: '',
    },
];
export const additionalProjects = [
    { title: 'Employee Management System', description: 'A web application for organising employee records.', technologies: 'HTML · PHP · CSS · JavaScript · SQL' },
    { title: 'Smart Irrigation System', description: 'An irrigation project exploring sprinkler control based on soil moisture.', technologies: 'JavaScript · Firebase · Arduino / C++' },
];
