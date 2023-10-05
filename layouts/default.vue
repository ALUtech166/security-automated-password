<template>
  <div class="font-sans tw-flex tw-flex-col tw-opacit-90">


    <div class="tw-flex-grow">
      <Nuxt />
    </div>
    
  </div>
</template>


<script>


export default {
  props: ['isOpen'],
  data() {
    return {
      isOpen: false,
      showModal: false,
      theme: 'theme-light',
      modalVisible: false
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    closeMenu() {
      this.isOpen = false;
    },
    closeDialog() {
      this.$emit("close");
    },
    openModal() {
      this.modalVisible = true;
    }

  }

}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Poppins&display=swap');

footer {
  background-color: #0B2447;
}

button {
  border: 0.5px solid #0B2447;
}

button:hover {
  border: none;
}

.text-color {
  color: #0B2447;
}

.bg-color {
  background-color: #0B2447;
}

.font-sans {
  font-family: 'Josefin Sans', sans-serif;
  font-family: 'Poppins', sans-serif;
}

/* Popup */
.tw-modal {
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease-in-out;
}

.tw-modal-overlay {
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease-in-out;
}

.tw-modal-container {
  opacity: 0;
  visibility: hidden;
  transform: translateY(-50px);
  transition: all 0.3s ease-in-out;
}

.tw-modal .tw-modal-overlay {
  opacity: 1;
  visibility: visible;
}

.tw-modal.open {
  opacity: 1;
  visibility: visible;
}

/* Modal backdrop styles */
.tw-modal-backdrop {
  z-index: 50;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Modal content styles */
.tw-modal {
  background-color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

/* Close button styles */
.tw-modal-close-btn {
  background-color: gray;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
}

/* Button styles */

/* Popup */
.tw-modal {
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease-in-out;
}

.tw-modal-overlay {
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease-in-out;
}

.tw-modal-container {
  opacity: 0;
  visibility: hidden;
  transform: translateY(-50px);
  transition: all 0.3s ease-in-out;
}

.tw-modal .tw-modal-overlay {
  opacity: 1;
  visibility: visible;
}

.tw-modal.open {
  opacity: 1;
  visibility: visible;
}

.tw-modal.open .tw-modal-container {
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
}

/* Close button */
.tw-modal-close {
  cursor: pointer;
}

/* Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.animated {
  animation-duration: 0.3s;
  animation-fill-mode: both;
}

.fadeIn {
  animation-name: fadeIn;
}</style>
