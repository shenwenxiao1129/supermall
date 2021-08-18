import {
  ADD_COUNTER,
  ADD_TO_CART
} from "./mutation-types";

export default {
  addCart(context, payload) {
   return new Promise((resolve, reject) => {
     //oldproduct 新加入的商品
     //1、查找数组中是否有该商品
     let oldproduct = context.state.cartList.find(item => item.iid === payload.iid)
     //2、判断oldproduct
     if (oldproduct) {
       context.commit(ADD_COUNTER,oldproduct)
       // oldproduct.count++
       resolve('添加商品数量+1')
     } else {
       payload.count = 1
       context.commit(ADD_TO_CART,payload)
       resolve('添加新商品')
     }
   })
  }
}
