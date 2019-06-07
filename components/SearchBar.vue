<template>
  <div class="search">
    <input
      type="text"
      autoFocus
      :value="value"
      class="search__field"
      placeholder="search characters"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="postcss" scoped>
.search {
  display: flex;
  justify-content: center;
}

.search__field {
  background-color: #ffffff;
  border: 1px solid #e5e5e5;
  box-shadow: 0 2px 2px #e5e5e5;
  flex-grow: 1;
  margin-left: 32px;
  margin-right: 32px;
  max-width: 600px;
  padding: 4px 8px;
}
</style>
