<template>
  <div class="h-full flex flex-col justify-center pl-[7rem]">
    <div class="my-auto">
      <h2 class="font-barlow-condensed text-[28px] tracking-[3px]"><span class="font-semibold opacity-25">03</span> SPACE
        LAUNCH 101</h2>
    </div>
    <div class="flex items-center">
      <div class="flex flex-col gap-y-[2.25rem] mr-[4rem]">
        <button @click="changeTech(1)" class="tech-selection" :class="{ active: techIndex === 1 }">1</button>
        <button @click="changeTech(2)" class="tech-selection" :class="{ active: techIndex === 2 }">2</button>
        <button @click="changeTech(3)" class="tech-selection" :class="{ active: techIndex === 3 }">3</button>
      </div>
      <div>
        <h3 class="font-barlow-condensed text-[16px]">THE TERMINOLOGY…</h3>
        <h1 class="font-bellefair text-[56px] mt-1 mb-3">{{ techName }}</h1>
        <p class="text-[18px] w-[27.5rem]">{{ techDesc }}</p>
      </div>
      <div class="ml-auto">
        <img :src="techImg">
      </div>
    </div>
  </div>
</template>

<script setup>
async function changeBg() {
  const bgElement = document.querySelector('.background-div')

  bgElement.classList.remove('bg-background-home-desktop')
  bgElement.classList.remove('bg-background-crew-desktop')
  bgElement.classList.remove('bg-background-destination-desktop')
  bgElement.classList.add('bg-background-technology-desktop')
}
changeBg()

const techIndex = ref(1)
const techName = ref('Launch vehicle'.toUpperCase())
const techDesc = ref(`A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`)

import data from "/data/data.json";
import techImg1 from '/assets/images/technology/image-launch-vehicle-portrait.jpg'
import techImg2 from '/assets/images/technology/image-spaceport-portrait.jpg'
import techImg3 from '/assets/images/technology/image-space-capsule-portrait.jpg'
const techImg = ref(techImg1)

function changeTech(index) {
  switch (index) {
    case 1:
      techIndex.value = index
      techName.value = data.technology[index - 1].name.toUpperCase()
      techDesc.value = data.technology[index - 1].description
      techImg.value = techImg1
      break;

    case 2:
      techIndex.value = index
      techName.value = data.technology[index - 1].name.toUpperCase()
      techDesc.value = data.technology[index - 1].description
      techImg.value = techImg2
      break;

    case 3:
      techIndex.value = index
      techName.value = data.technology[index - 1].name.toUpperCase()
      techDesc.value = data.technology[index - 1].description
      techImg.value = techImg3
      break;
  }
}


</script>



<style></style>
