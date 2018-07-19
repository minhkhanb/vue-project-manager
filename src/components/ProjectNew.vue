<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          :class="{ 'is-invalid': $v.title.$error }"
          id="title"
          v-model="title"
          @blur="$v.title.$touch()"
          placeholder="Enter title"
          required
        >
        <div
          class="invalid-feedback"
          v-if="$v.title.$error"
        >
          Title must be at least {{ $v.title.$params.minLength.min }} characters in length.
        </div>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea
          class="form-control"
          id="description"
          v-model="description"
          rows="3"
        >
        </textarea>
      </div>
      <div class="form-group">
        <label for="start-date">Start Date</label>
        <input
          type="date"
          class="form-control"
          :class="{ 'is-invalid': $v.startDate.$error }"
          id="start-date"
          v-model="startDate"
          @blur="$v.startDate.$touch()"
          placeholder="Enter start date"
          required
        >
        <div
          class="invalid-feedback"
          v-if="$v.startDate.$error"
        >
          Start date is required.
        </div>
      </div>
      <div class="form-group">
        <label for="due-date">Due Date</label>
        <input
          type="date"
          class="form-control"
          id="due-date"
          v-model="dueDate"
          placeholder="Enter due date"
        >
      </div>
      <button type="submit" class="btn btn-primary">Create Project</button>
    </form>
  </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      title: '',
      description: '',
      startDate: null,
      dueDate: null
    }
  },
  validations: {
    title: {
      required,
      minLength: minLength(3)
    },
    startDate: {
      required
    }
  },
  methods: {
    ...mapActions([
      'createProject'
    ]),
    onSubmit() {
      this.createProject({
        title: this.title,
        description: this.description,
        startDate: this.startDate,
        dueDate: this.dueDate
      })
    }
  }
}
</script>

<style lang="scss">

</style>
