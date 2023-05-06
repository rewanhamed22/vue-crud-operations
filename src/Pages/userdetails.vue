<template>


        <div class="card">
          <img :src="image" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ id }}</h5>
            <h5 class="card-title">{{ first_name }} {{ last_name }}</h5>
      
            <p class="card-text">
              {{ email }}
            </p>
            <button @click="back" class="btn btn-primary">Go Back</button>
          </div>
        </div>

</template>

<script>
import axios from "axios";

export default {
  name: "userDetails",
  data() {
    return {
      id: "",
      first_name: "",
      last_name: "",
      email: "",
      image: "",
    };
  },
  created() {
    this.getUserbyId();
  },

  methods: {
    getUserbyId() {
      this.id = this.$route.params.id;
      console.log(this.id);
      axios
        .get(`http://localhost:2000/users/?id=${this.id}`)
        .then((res) => {
          console.log(res.data);
          this.id = res.data[0].id;
          this.first_name = res.data[0].first_name;
          this.last_name = res.data[0].last_name;
          this.email = res.data[0].email;
          this.image = res.data[0].image;
        })
        .catch((err) => console.log(err));
    },
    back(){
        this.$router.push('/')
    }
    // getImageUrl(image) {
    //   return require(`./${image}`);
    // },
  },
};
</script>

<style scoped>
.card {
  width: 20%;
  margin: 20px auto;
}
</style>
