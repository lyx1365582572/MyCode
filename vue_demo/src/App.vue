<template>
  <div id="app">
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Add :addComment="addComment"/>
      <List :comments="comments"/>
    </div>
  </div>
</template>
<script>
import Add from './components/Add.vue'
import List from './components/List.vue'
export default {
  data () {
    return {
      comments: [
        {
          name: 'AAA',
          content: '想见你'
        },
        {
          name: 'BBB',
          content: '想见你'
        },
        {
          name: 'CCC',
          content: '想见你'
        }
      ]
    }
  },
  methods: {
    assComment (comment) {
      this.comments.unshift(comment)
    }
  },
  components: {
    Add,
    List
  }
}
</script>

<style>
</style>
