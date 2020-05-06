import Home from './views/home'
import Project from './views/project'
import Resume from './views/resume'

export const routes = [
    {
        path: '/',
        component: Home,
        props: true
    },

    {
        path: '/resume',
        name: 'resume',
        component: Resume,
        props: true
    },

    {
        path: '/project/:item.name',
        name: 'project',
        component: Project,
        props: true
    },
];
