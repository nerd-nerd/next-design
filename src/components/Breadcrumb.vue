<template>
  <div class="d-breadcrumb">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'n-breadcrumb',

    props: {
      separator: {
        type: String,
        default: '&#xe619;'
      }
    }
  };
</script>
