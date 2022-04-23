<template lang="">
    <div class='list'>
        <div class='container pb-5 text-center'>
            <router-link to='/create' class='btn btn-success w mt-5'>ADD NEW CONTACT</router-link>
            <ol v-if="$store.state.Contacts.length" class='list-group list-group-numbered mt-3'>
                <h1 class="tc fs-3 mb-3">CONTACTS LOG</h1>
                <Item v-for="item in $store.state.Contacts" v-bind:item="item" v-bind:key="item.id" />
            </ol>
            <h1 v-else class="text-danger fs-3 mt-3">NO DATA INTRODUCED</h1>
            <div class='mt-5'>
                <p  class="text-danger">{{ $store.state.error }}</p>
                <p  class="text-success">{{ $store.state.success }}</p>
            </div>
            <div v-if="$store.state.edit_card_show" class='list-group edit'>
                <div class="edit_card">
                    <div class="card edit my-5">
                        <div class="d-flex justify-content-between align-items-center pe-2 ps-2 bg-light">
                            <h3>Update contact</h3>
                            <button type="button" class="btn-close" aria-label="Close" @click="$store.dispatch('closeModal')"></button>
                        </div>
                        <form action="" class="add_category ps-2 pe-2" @submit.prevent="$store.dispatch('save', $store.state.EditItem.id)">
                            <label for="basic-url" class="form-label mt-2">Change data</label>
                            <div class="input-group mt-2">
                                <input type="text" class="form-control" v-model="$store.state.EditItem.name" />
                                <input type="text" class="form-control" v-model="$store.state.EditItem.last_name" />
                                <input type="text" class="form-control" v-model="$store.state.EditItem.phone" />
                            </div>
                            <button class="btn btn-success mt-3 mb-2">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
       
        

</template>
<script>
import Item from "./Item.vue";

export default {
  components: {
    Item,
  }
};
</script>
<style scoped lang="scss" >
    .list{
        position: relative;
    };
    .w{
        width: 400px
    };
    .tc{
        color: rgb(21, 104, 21)
    };
    .edit{
        width   : 450px;
        height  : auto;
        position: absolute;
        top     : 90px;
        left    : 275px;
        z-index : 1000;
    }
</style>