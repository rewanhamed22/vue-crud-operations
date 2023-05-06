<template>
  <div>
    <h1>All Users</h1>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">First</th>
          <!-- <th scope="col">Last</th>
          <th scope="col">Gender</th> -->
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.first_name }}</td>
          <!-- <td>{{ user.last_name }}</td>
          <td>{{ user.gender }}</td> -->
          <td>
            <router-link :to="`/users/${user.id}`" class="btn btn-primary"
              >See More</router-link
            >

            <button class="btn btn-danger ms-3" @click="deleteUser(user.id)">
              Delete
            </button>
            <button class="btn btn-success ms-3">
              <router-link
                :to="`/edit/${user.id}`"
                class="link-dark text-decoration-none"
              >
                Edit
              </router-link>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div>
      <router-link :to="`/add`" class="feedback" id="mybutton">
        Add New User
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "allUsers",
  data() {
    return {
      users: [],
    };
  },
  created() {
    // it will run awl ma el browser y7slo render
    this.getAllUsers();
  },
  methods: {
    getAllUsers() {
      axios
        .get("http://localhost:2000/users")
        .then((res) => {
          console.log(res.data);
          this.users = res.data;
          console.log(this.users);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteUser(id) {
      axios
        .delete(`http://localhost:2000/users/${id}`)
        .then((res) => {
          console.log(res.data);
          this.getAllUsers();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
div {
  margin-top: 10px;
}
table {
  width: 70%;
  margin: auto;
}
thead,
tbody {
  text-align: center;
}
h1 {
  text-align: center;
}
.feedback {
  background-color: black;
  color: white;
  padding: 7px 15px;
  border-radius: 15px;
  border-color: black;
  text-decoration: none;
}

#mybutton {
  position: fixed;
  bottom: 18px;
  right: 110px;
  font-size: 18px;
}
</style>
