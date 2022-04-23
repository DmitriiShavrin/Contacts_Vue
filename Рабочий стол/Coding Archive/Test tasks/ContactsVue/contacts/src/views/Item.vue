<template>
    <li class="list-group-item bg-secondary text-white d-flex align-items-center">
        <p class="m-0 ps-3"><span class='text-warning'>ID:</span> {{ $props.item.id }}, <span class='text-warning ms-2'>Added:</span> {{ $props.item.register}}<span class='text-warning ms-2'>Name:</span> {{ $props.item.name }} <span class='text-warning ms-2'>Last Name:</span> {{ $props.item.last_name }} <span class='text-warning ms-2'>Phone:</span> {{ $props.item.phone }}</p>
        <button class="btn btn-warning ms-auto" @click="$store.dispatch('edit', $props.item.id)">Edit</button>
        <button class="btn btn-danger ms-2" @click="$store.dispatch('remove', $props.item.id)">Delete</button>
    </li>
</template>


<script>
export default { 
    props: ['item'],
}
</script>


