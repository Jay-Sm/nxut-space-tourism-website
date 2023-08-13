<template></template>

<script setup>
async function changeBg() {
  const bgElement = document.querySelector('.background-div')

  bgElement.classList.remove('bg-background-home-desktop')
  bgElement.classList.remove('bg-background-crew-desktop')
  bgElement.classList.remove('bg-background-technology-desktop')
  bgElement.classList.add('bg-background-destination-desktop')
}
changeBg()

</script>

<style></style>