import {
  createRouter,
  createWebHistory
} from "vue-router";

import HomePage from '../page/HomePage.vue'
import Course from '../page/Course.vue'
import Masterpiece from '../page/Masterpiece.vue'
import Skill from '../page/Skill.vue'
import AboutMe from '../page/AboutMe.vue'

const routes = [{
    // 網址路徑
    path: '/',
    name: 'home',
    component: HomePage,
    // 宣告meta值
    meta: {
      title: "染一片春天|藍染教學工作室",
      description: "「染一片春天」手作坊，以做中學為主旨，有時同學一起來切磋，教學也交朋友。歡迎有興趣的朋友，一起來染一片春天工作室，一同腦力激盪、一同創作。",
      keywords: "染一片春天、藍染、藍染教學、藍染教學工作室、縫染、綁染、蠟染、植物染",
    }
  },
  {
    path: '/Course',
    name: 'Course',
    component: Course,
    meta: {
      title: "染一片春天|課程介紹",
      description: "「染一片春天」手作坊的相關課程。",
      keywords: "染一片春天、藍染、藍染教學、藍染教學工作室、縫染、綁染、蠟染、植物染",
    }
  },
  {
    path: '/Masterpiece',
    name: 'Masterpiece',
    component: Masterpiece,
    meta: {
      title: "染一片春天|作品一覽",
      description: "「染一片春天」手作坊，春風老師的個人作品",
      keywords: "染一片春天、藍染、藍染教學、藍染教學工作室、縫染、綁染、蠟染、植物染",
    }
  },
  {
    path: '/Skill',
    name: 'Skill',
    component: Skill,
    meta: {
      title: "染一片春天|技法介紹",
      description: "藍染相關基本技法介紹。",
      keywords: "染一片春天、藍染、藍染教學、藍染教學工作室、縫染、綁染、蠟染、植物染",
    }
  },
  {
    path: '/AboutMe',
    name: 'AboutMe',
    component: AboutMe,
    meta: {
      title: "染一片春天|關於我",
      description: "關於「染一片春天」手作坊的春風老師。",
      keywords: "染一片春天、藍染、藍染教學、藍染教學工作室、縫染、綁染、蠟染、植物染",
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  // 當有宣告title時改變網頁的title
  if (to.meta.title) {
    document.title = to.meta.title
  }

  // 當有宣告description時改變網頁的description
  if (to.meta.description) {
    let description = document.querySelector("meta[name='description']")
    // 當網頁已有description時改寫description
    if (description) {
      document.querySelector("meta[name='description']").content = to.meta.description
    } else {
      // 網頁沒有description時建立並插入head
      let metaTag = document.createElement('meta');
      metaTag.name = "description"
      metaTag.content = to.meta.description
      document.getElementsByTagName('head')[0].appendChild(metaTag);
    }
  }

  // 改變網頁的 keywords
  if (to.meta.keywords) {
    let keywords = document.querySelector("meta[name='keywords']")
    // 當網頁已有keywords時改寫keywords
    if (keywords) {
      document.querySelector("meta[name='keywords']").content = to.meta.keywords
    } else {
      // 網頁沒有keywords時建立並插入head
      let metaTag = document.createElement('meta');
      metaTag.name = "keywords"
      metaTag.content = to.meta.keywords
      document.getElementsByTagName('head')[0].appendChild(metaTag);
    }
  }


  next();
})

export default router