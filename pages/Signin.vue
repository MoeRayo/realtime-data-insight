<template>
  <div class="ba b--light-blue bg-light-blue bw3 vh-100 pv5 ph2 athelas">
    <form @submit.prevent="signIn" class="bg-navy br3 mw6 w-40-m w-70 w-20-l center pa3 shadow-5 white">
      <h2 class="ttc tc">Sign In</h2>

      <label for="email" class="db mb1 white">Email</label>
      <input name="email" id="email" v-model="email" type="email" class="db mb3 w-100 br3 pa2 ba bw2" placeholder="example@email.com">

      <label for="password" class="db mb1 white">Password</label>
      <input name="password" id="password" v-model="password" type="password" class="db mb3 w-100 br3 pa2 ba bw2" placeholder="••••••••">

      <button type="submit" class="center db ph4 pv2 bg-navy ba br3 white pointer">Sign in</button>
      
    </form>    

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {account} from '~/init'

export default Vue.extend({
  data: () => ({
    email: "",
    password: "",
  }),
  methods: {
    signIn: async function () {
      try{
        let accountDetails = await account.createEmailSession(this.email, this.password)
        alert("user signed in")
        this.$router.push({ path: `/insight/${accountDetails.userId}`})
      } catch (e){
          console.log(e)
      }
    }
  }
  
})
</script>