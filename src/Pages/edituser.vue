<template>
  <div class="container">
    <h1 class="mt-5">Edit User</h1>
    <form class="mb-3" @submit="handleSubmit">
      <div>
        <label for="fname" class="form-label">First Name</label>
        <input
          v-model="formData.first_name"
          type="text"
          class="form-control"
          id="fname"
        />
      </div>
      <div>
        <label for="lname" class="form-label">Last Name</label>
        <input
          v-model="formData.last_name"
          type="text"
          class="form-control"
          id="lname"
        />
      </div>
      <div>
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          v-model="formData.email"
          type="email"
          class="form-control"
          id="exampleInputEmail1"
        />
      </div>
      <br />
      <button class="btn btn-success ms-3">Edit</button>

      <button class="btn btn-primary ms-3" @click="back">Go Back</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "editUser",
  data() {
    return {
      formData: {
        first_name: "",
        last_name: "",
        email: "",
      },
      id: 0,
      user: {},
    };
  },
  created() {
    this.getUserId();
  },
  methods: {
    getUserId() {
      this.id = this.$route.params.id;
      console.log(this.id);
      axios.get(`http://localhost:2000/users/${this.id}`).then((res) => {
        this.user = res.data;
        this.formData = this.user;
      });
    },
    async handleSubmit(e) {
      e.preventDefault();
      try {
        const response = await axios.put(
          `http://localhost:2000/users/${this.id}`,
          { ...this.user, ...this.formData }
        );
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    back() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}

.container {
  width: 40%;
  margin: 20px auto;
}
</style>
