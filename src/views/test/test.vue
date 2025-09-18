<script setup lang="ts">
import { ref, onMounted } from 'vue'
// import locale from '@ktaro/locale';
// import PublicCommentPc from '@ktlib/public-comment-pc';
import { locale } from '@ktlib/public-comment-pc'
const resourceData = ref({
  appUrl: 'https://www.baidu.com/',
  followUserList: [
    {
      userId: '1def797391df4e32a02792dfd284f7ff',
      userName: 'yzt',
    },
  ],
  groupId: '92b9cc14ba134fc4a0fe74cbf4ef5af2',
  pcUrl: 'https://www.baidu.com/',
  resourceId: 'yzttest001',
  title: 'yzt测试',
})
onMounted(() => {})

const beforeUpload = (file: any, fileList: any) => {
  const fileType = file.name.substring(file.name.lastIndexOf('.') + 1)
  const extension = fileType === 'jpg' || fileType === 'png' || fileType === 'pdf'
  if (!extension) {
    // $message.error('请上传jpg或png格式图片或者pdf文件');
  }
  const sizeLimit = 10 * 1024 * 1024
  const overSize = file.size > sizeLimit
  if (overSize) {
    // $message.error('请上传小于10M的文件');
  }
  return extension && !overSize
}

const afterUpload = ({ success, msg }: any) => {
  if (success) {
    console.log('上传成功')
  } else {
    console.log(msg)
  }
}

const messageModule = ref({
  relateUser: {
    mentionAll: true,
    userList: [
      {
        userId: '9f76e863df4a4cb79da725c3a909988e',
        userName: 'yzt',
      },
    ],
    special: true,
  },
})

const langs = ['zh-CN', 'en-US', 'zh-TW']
const test = () => {
  console.log('test')
  const nowLang = window.localStorage.getItem('lang') || 'zh-CN'
  const nowLangIndex = langs.findIndex((e) => {
    return e === nowLang
  })
  const changeLang = langs[(nowLangIndex + 1) % langs.length]
  console.log(locale.languages())

  locale.use(changeLang)
  window.localStorage.setItem('lang', changeLang)
}
</script>

<template>
  <main class="body">
    <div @click="test">test</div>
    <!-- <PublicCommentPc :resourceData="resourceData" :size="10">
      <template #comment-label>
        <div>评论内容</div>
      </template>
    </PublicCommentPc> -->

    <kt-public-comment
      :configKey="'taro'"
      :resourceData="resourceData"
      :mentionsLength="50"
      :messageModule="messageModule"
      :uploadConfig="{
        show: true,
        maxCount: 2,
        accept: '.jpg,.png,.jpeg,.pdf',
        beforeUpload,
        afterUpload,
      }"
    ></kt-public-comment>
  </main>
</template>

<style>
.body {
  width: 100%;
  border: 1px solid #666;
  border-radius: 24px;
  padding: 24px;
  box-sizing: border-box;
}
</style>
