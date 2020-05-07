import Home from './views/home'
import Project from './views/project'
import Resume from './views/resume'
import Ominous from './views/projects/ominous'
import AdminDashboard from './views/projects/adminDashboard'
import AnimatedNavMarker from './views/projects/animatedNavMarker'
import AnimatedAccordian from './views/projects/animatedAccordian'
import DropdownShadow from './views/projects/dropdownShadow'
import ExerciseTools from './views/projects/exerciseTools'
import SocialMediaApp from './views/projects/socialMediaApp'
import GameFinder from './views/projects/gameFinder'
import TwitchOverlay from './views/projects/twitchOverlay'
import NewPortfolio from './views/projects/newPortfolio'



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
        path: '/ominous-weather',
        component: Ominous,
        props: true
    },

    {
        path: '/admin-dashboard',
        component: AdminDashboard,
        props: true
    },

    {
        path: '/animated-nav-marker',
        component: AnimatedNavMarker,
        props: true
    },

    {
        path: '/animated-accordian',
        component: AnimatedAccordian,
        props: true
    },

    {
        path: '/dropdown-shadow',
        component: DropdownShadow,
        props: true
    },
    
    {
        path: '/exercise-tools',
        component: ExerciseTools,
        props: true
    },

    {
        path: '/social-media-app',
        component: SocialMediaApp,
        props: true
    },

    {
        path: '/game-finder',
        component: GameFinder,
        props: true
    },

    {
        path: '/twitch-overlay',
        component: TwitchOverlay,
        props: true
    },

    {
        path: '/new-portfolio',
        component: NewPortfolio,
        props: true
    }

];
