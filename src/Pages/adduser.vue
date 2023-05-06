<template>
  <div class="container">
    <h1 class="mt-5">Add New User</h1>
    <form class="mb-3" @submit="handleSubmit">
      <div>
        <label for="fname" class="form-label">First Name</label>
        <input
          v-model="formData.first_name"
          type="text"
          placeholder="Rewan"
          class="form-control"
          id="fname"
        />
      </div>
      <div>
        <label for="lname" class="form-label">Last Name</label>
        <input
          v-model="formData.last_name"
          type="text"
          placeholder="Hamed"
          class="form-control"
          id="lname"
        />
      </div>
      <div>
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          v-model="formData.email"
          type="email"
          placeholder="rewan@gmail.com"
          class="form-control"
          id="exampleInputEmail1"
        />
      </div>
      <div>
        <label for="image" class="form-label">Image Url</label>
        <input
          v-model="formData.image"
          type="url"
          class="form-control"
          id="image"
        />
      </div>
      <br />
      <button class="btn btn-success ms-3">Add</button>

      <button class="btn btn-primary ms-3" @click="back">Go Back</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "addUser",
  data() {
    return {
      formData: {
        first_name: "",
        last_name: "",
        email: "",
        image: "",
      },
    };
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault();
      try {
        const res = await axios.post(
          "http://localhost:2000/users",
          this.formData
        );
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
      this.formData.first_name = "";
      this.formData.last_name = "";
      this.formData.email = "";
      this.formData.image = "";
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
