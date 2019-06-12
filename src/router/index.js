import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NewContact from '@/components/NewContact'//新添加，之后在下方的component: NewContact才会生效
import Page1 from '@/components/page1'
import Page2 from '@/components/page2'
import Page3 from '@/components/page3'
import Page4 from '@/components/page4'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/newcontact',//和router-link to相呼应，导航到/newcontact
      name: 'NewContact',
      component: NewContact,
      children:[
        {
          path: '/Page1',
          name: 'Page1',
          component: Page1
        },
        {
          path: '/Page2',
          name: 'Page2',
          component: Page2
        },
        {
          path: '/Page3',
          name: 'Page3',
          component: Page3
        },
        {
          path: '/Page4',
          name: 'Page4',
          component: Page4
        },
      ]
    }
  ]
})
