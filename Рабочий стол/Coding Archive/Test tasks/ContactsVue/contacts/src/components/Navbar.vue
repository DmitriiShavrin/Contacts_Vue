<template>
  <div class="border-bottom">
    <div class="container">
      <div class="d-flex flex-column flex-md-row align-items-center pb-3 pt-3">
        <router-link
          to="/"
          class="d-flex align-items-center text-dark text-decoration-none"
        >
          <title>Bootstrap</title>
          <span class="fs-4">Contacts log</span>
        </router-link>

        <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <router-link
            exact
            to="/"
            class="me-3 py-2 text-dark text-decoration-none"
            >Log</router-link
          >
          <router-link
            exact
            to="/create"
            class="me-3 py-2 text-dark text-decoration-none"
            >Create</router-link
          >
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
  const href = window.location.href.split("/").filter(Boolean).pop();
  export default {};
</script>

<style lang=""></style>
