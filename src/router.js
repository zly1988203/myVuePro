/**
 *
 * @authors sam
 * @date    2016-10-13 11:59:57
 * @version 1.0
 */
import Hello from './components/Hello.vue'


export default router => {
  router.map({
    '/':{
      component:Hello
    },
    '/cart':{
      component:Cart
    },
    '/count':{
      component:Count
    }
  });
  router.redirect({
    '*':'/'
  })
}
