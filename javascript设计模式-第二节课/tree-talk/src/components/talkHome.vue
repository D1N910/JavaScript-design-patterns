<template>
  <div class="talkhome">
    <!-- 人物 -->
    {{ user }}: <input v-model="message" @keydown.enter="sendMessage"/> <button @click="sendMessage">发送</button>

    <!-- 聊天室内容 -->
    <ul class="talkhome-showtalk">
      <li v-for="(item, index) in talkList" :key="index">
        <!-- 姓名和发送时间 -->
        <div>
          <span class="talkhome-showtalk-name">
            {{ item.user }}
          </span>
          <span class="talkhome-showtalk-time">
            {{ item.time }}
          </span>
        </div>

        <!-- 内容 -->
        <div class="talkhome-showtalk-content">
            {{ item.message }}
        </div>
      </li> 
    </ul>
  </div>
</template>

<script>
const moment = require('moment');

moment.locale('zh-cn');

export default {
  name: 'talkHome',

  props: {
    user: String
  },

  data() {
    return {
      talkList: [],
      message: ''
    }
  },

  mounted() {
    this.$observer.resiger('send-message',  this.updateTalkList.bind(this))
  },


  methods: {
    // 发送信息
    sendMessage() {
      if (!this.message) {
        return
      }
      this.$observer.fire('send-message', {
        user: this.user,
        message: this.message,
        time: moment().format('MMMM Do YYYY, h:mm:ss')
      })
      this.message = ''
    },
    // 更新 talkList
    updateTalkList(evens) {
      this.talkList.unshift(evens.args)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}

.talkhome {
  min-height: 400px;
  border: 1px solid;
  padding: 18px;
  margin: 0 10px;
}
.talkhome-showtalk-name {
  color: blue;
  margin-right: 10px;
}
.talkhome-showtalk-time {
  color: #999;
}
.talkhome-showtalk-content {
  padding: 8px 0;
  border-bottom: 1px dashed #999;
}
</style>
