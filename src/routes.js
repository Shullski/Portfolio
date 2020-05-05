import Home from './views/home'
import Project from './views/project'
import Resume from './views/resume'
import TwitchOverlay from './views/projects/twitchOverlay'

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
    {
        path: '/projects/twitch-overlay',
        component: TwitchOverlay
    },
    
    
];
