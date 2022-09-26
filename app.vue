<template lang="pug">
div.p-24.bg-gray-100.min-h-screen
  h1.text3xl.font-bold FM
  p 电台评价
  ul.w-xl.mt-8
    li.p-6.mb-2.rounded-xl.bg-white(v-for="item in list" :key="item.name")
      div.mb-2.flex
        span.bg-yellow-300.px-3.py-1.mr-2.rounded-sm.text-yellow-900.border.border-yellow-600 想看
        span.bg-yellow-300.px-3.py-1.mr-2.rounded-sm.text-yellow-900.border.border-yellow-600 看过
        div.flex.items-center
          span.mr-1 评价
          StarOutline.w-4
          StarOutline.w-4
          StarOutline.w-4
          StarOutline.w-4
          StarOutline.w-4
      div
        span 写短评
        span 写书评
        span 加入购物单
        span 添加到书单
        span 分享
</template>

<script setup>
import { StarOutline } from '@vicons/ionicons5'
import { NMessageProvider, NNotificationProvider, NIcon, NButton, NModal } from 'naive-ui'

const list = useState(() => ([
  {name: 'aa'},
  {name: 'bb'},
  {name: 'cc'}
]))
</script>
