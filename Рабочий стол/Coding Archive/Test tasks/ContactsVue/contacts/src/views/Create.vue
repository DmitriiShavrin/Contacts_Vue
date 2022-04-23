<template>
  <div class="list">
    <div class="container text-center">
          <form @submit.prevent="$store.dispatch('add')" class="pt-5">
            <h1 for="exampleFormControlInput1" class="form-label tc fs-3 mb-3">
              TEXT NEW CONTACT
            </h1>
            <div class="d-flex">
              <input
                type="text"
                class="form-control "
                id="title"
                placeholder="Name"
                required
                v-model="$store.state.name"
              />
              <input
                type="text"
                class="form-control ms-1"
                id="title"
                placeholder="Last name"
                required
                v-model="$store.state.last_name"
              />
              <input
                type="text"
                class="form-control ms-1"
                id="title"
                placeholder="Phone number"
                required
                v-model="$store.state.phone"
              />
              <button type="" class="btn btn-success ms-2 w">Create</button>
            </div>
          </form>
          <router-link to="/" class="btn btn-warning mt-4 w">Back</router-link>
          <p v-if="$store.state.success" class="text-success">
            {{ $store.state.success }}
          </p>
          <p v-else class="text-danger">{{ $store.state.error }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Create",
  components: {},
  updated() {
  },
};
</script>

<style scoped lang="scss" >
  .tc {
    color: rgb(21, 104, 21);
  };
  .w {
    width: 100px
  }
</style>
