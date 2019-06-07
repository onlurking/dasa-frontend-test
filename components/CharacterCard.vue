<template>
  <div class="card">
    <img :src="char.image" class="card__image" :alt="`image of ${char.name}`" />
    <div class="card__title">
      {{ char.name }}
    </div>
    <div class="tags__wrapper">
      <span class="card__tag">
        {{ char.status }}
      </span>

      <span class="card__tag">
        {{ char.gender }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    char: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="postcss" scoped>
.card {
  box-shadow: 0 2px 4px #e3e3e3;
  display: flex;
  flex-direction: column;
  margin: 24px;
  min-width: 290px;
  padding: 8px;
}

.card__title {
  align-self: center;
  color: #3d3d3d;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 24px;
  margin-top: 8px;
}

.card__image {
  align-self: center;
  border-radius: 5px;
  height: 150px;
  width: 150px;
}

.tags__wrapper {
  display: flex;
  justify-content: center;
}

.card__tag {
  border-radius: 15px;
  box-shadow: 0 2px 4px #e3e3e3;
  color: #3d3d3d;
  display: flex;
  justify-content: center;
  margin: 16px 8px;
  padding: 4px 24px;
}
</style>
