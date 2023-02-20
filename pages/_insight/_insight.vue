<template>
  <div class="bg-light-blue vh-100 pa3 tc">
    <h2 class="ttc">Real Time Health Data analytics with Appwrite</h2>
    <div class="br3 bg-navy ba near-white b--black-10 shadow-3 w-100 w-60-m w-30-l mw6 center mt5 ph4 pv4 h5">
      <p class="f3">Click on this button to get the dosage</p>
        <button class="link br3 pv2 ph2 mt4 dib black fw6 bg-white ba b--navy pointer inline-flex items-center hover-bg-lightest-blue" @click="getDosage">
          <span class="f4 ml2 pr2">Get dosage</span>
        </button>
    </div>
  </div>
</template>
<script>
import {client, insightFunction} from '~/init'
import { Databases } from "appwrite";
const databases = new Databases(client);
import moment from "moment";
export default {
  data() {
    return {
      permisssionsArray: [],
    }
  },
  mounted() {
    insightFunction().then((res)=> res).catch((err)=> {
      console.log(err)
    })
    // this.checkDosage();
    if(this.$route.params.insight){
      try {
        client.subscribe("documents", (response) => {
          this.checkDosage();
        });
      } catch (error) {
        console.log(error, "error");
      }
    }
  },
  methods: {
    moment,
    async getDosage() {
      await databases.createDocument(
        "63ef7e057f16c9d0b811",
        "63ef7e389fdfbe02d8e9",
        "unique()",
        {
          doses: true,
        }
      );
    },
    async checkDosage() {
      const dosageDetails = await databases.listDocuments(
        "63ef7e057f16c9d0b811",
        "63ef7e389fdfbe02d8e9"
      );
      dosageDetails.documents.filter(obj => {

        if( moment(obj.$createdAt).format("YYYY-MM-DD") === moment().format("YYYY-MM-DD")) {
          obj.$permissions.find(element => {
          if(element.includes(this.$route.params.insight)) {
            this.permisssionsArray.push(element)
            if (this.permisssionsArray.length >= 3){
              this.$swal({icon: 'success', title: 'Wait one day before taking another dose. Take a walk instead', timer: 10000, showConfirmButton: false,});
            }
              return;
            } else {
              return;
            }
          })
        }
      })
    }
  }
}
</script>
