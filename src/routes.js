import Home from './views/home'
import Project from './views/project'
import Resume from './views/resume'

export const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/resume',
        component: Resume
    },
    {
        path: '/item/:id',
        component: Project
    },
    
];
