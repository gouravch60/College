import { faDashboard,faNoteSticky,faChartPie, faDatabase, faMessage} from '@fortawesome/free-solid-svg-icons'
export const navs=[
    {
        text:'Dashboard',
        link:'/admin/dashboard',
        logo:faDashboard
    },
    {
        text:'Enquiries',
        link:'/admin/enquiries',
        logo:faNoteSticky
    },
    {
        text:'Feedbacks',
        link:'/admin/feedback',
        logo:faMessage
    },
    {
        text:'Data Entry',
        link:'/admin/dataentry',
        logo:faDatabase
    }
];