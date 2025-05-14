

import HomeView from '@/HomeView.vue'
import RateView from '@/RateView.vue'
import TeamView from '@/TeamView.vue'
import TestimonialView from '@/TestimonialView.vue'

const routes = [
  { path: '/', 
    name: 'home',
    component: HomeView 
},
  { path: '/rate', 
    name: 'rate',
    component: RateView 
},
 { path: '/team', 
    name: 'team',
    component: TeamView 
},
 { path: '/testimonial', 
    name: 'testimonial',
    component: TestimonialView 
},
]

export default routes