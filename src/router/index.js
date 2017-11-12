import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Data from '@/components/Data'
import Publications from '@/components/Publications'
import PeopleHome from '@/components/PeopleHome'
import Amit from '@/components/Amit'
import Positions from '@/components/Positions'

import HumanRobot from '@/components/Research/HumanRobots'
import WideArea from '@/components/Research/WideArea'
import ActivityRP from '@/components/Research/ActivityRP'
import SituationalAwareness from '@/components/Research/SituationalAwareness'
import FaceTR from '@/components/Research/FaceTR'
import BiologicalIA from '@/components/Research/BiologicalIA'
import VideoWeb from '@/components/Research/VideoWeb'
import MTVideo from '@/components/Research/MTVideo'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/datasets',
      name: 'Datasets',
      component: Data
    },
    {
      path: '/publications',
      name: 'Publications',
      component: Publications
    },
    {
      path: '/people',
      name: 'PeopleHome',
      component: PeopleHome
    },
    {
      path: '/amit',
      name: 'Amit',
      component: Amit
    },
    {
      path: '/HumanRobots',
      name: 'Human Robots',
      component: HumanRobot
    },
    {
      path: '/WideArea',
      name: 'Wide Area',
      component: WideArea
    },
    {
      path: '/ActivityRP',
      name: 'Activity Recognition and Prediction',
      component: ActivityRP
    },
    {
      path: '/SituationalAwareness',
      name: 'Situational Awareness',
      component: SituationalAwareness
    },
    {
      path: '/FaceTR',
      component: FaceTR
    },
    {
      path: '/BiologicalIA',
      component: BiologicalIA
    },
    {
      path: '/VideoWeb',
      component: VideoWeb
    },
    {
      path: '/MTVideo',
      component: MTVideo
    },
    {
      path: '/positions',
      component: Positions
    }
  ],
  mode: 'history'
})
