<template>
  <div class="h-full flex flex-col px-[8rem] pt-[34px]">
    <div class="">
      <h2 class="font-barlow-condensed text-[28px] tracking-[3px]">
        <span class="font-semibold opacity-25">02</span>
        MEET YOUR CREW
      </h2>
    </div>
    <div class="flex justify-between items-center h-full">
      <div class="h-[70%] flex flex-col justify-between">
        <div>
          <h2 class="font-bellefair text-[32px] opacity-50">
            {{ crewRole }}
          </h2>
          <h1 class="font-bellefair text-[56px] ">
            {{ crewName }}
          </h1>
          <p class="w-[28rem] text-[18px]">
            {{ crewDesc }}
          </p>
        </div>
        <div class="flex gap-x-[23px]">
          <button @click="changeCrew(1)" class="crew-selection" :class="{ active: crewIndex === 1 }"></button>
          <button @click="changeCrew(2)" class="crew-selection" :class="{ active: crewIndex === 2 }"></button>
          <button @click="changeCrew(3)" class="crew-selection" :class="{ active: crewIndex === 3 }"></button>
          <button @click="changeCrew(4)" class="crew-selection" :class="{ active: crewIndex === 4 }"></button>
        </div>
      </div>
      <div>
        <img :src="crewImg" class="max-w-[80%]">
        <!-- min-w-[28rem] -->
      </div>
    </div>

  </div>
</template>

<script setup>
async function changeBg() {
  const bgElement = document.querySelector('.background-div')

  bgElement.classList.remove('bg-background-home-desktop')
  bgElement.classList.remove('bg-background-technology-desktop')
  bgElement.classList.remove('bg-background-destination-desktop')
  bgElement.classList.add('bg-background-crew-desktop')
}
changeBg()

const crewIndex = ref(1)
const crewName = ref('Douglas Hurley')
const crewRole = ref('Commander'.toUpperCase())
const crewDesc = ref(`Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.`)

import data from "/data/data.json";
import crewImg1 from '/assets/images/crew/image-douglas-hurley.png'
import crewImg2 from '/assets/images/crew/image-mark-shuttleworth.png'
import crewImg3 from '/assets/images/crew/image-victor-glover.png'
import crewImg4 from '/assets/images/crew/image-anousheh-ansari.png'
const crewImg = ref(crewImg1)

function changeCrew(index) {
  switch (index) {
    case 1:
      crewIndex.value = index
      crewName.value = data.crew[index - 1].name
      crewRole.value = data.crew[index - 1].role
      crewDesc.value = data.crew[index - 1].bio
      crewImg.value = crewImg1
      break;
      
    case 2:
      crewIndex.value = index
      crewName.value = data.crew[index - 1].name
      crewRole.value = data.crew[index - 1].role
      crewDesc.value = data.crew[index - 1].bio
      crewImg.value = crewImg2
      break;
      
      case 3:
        crewIndex.value = index
        crewName.value = data.crew[index - 1].name
        crewRole.value = data.crew[index - 1].role
        crewDesc.value = data.crew[index - 1].bio
        crewImg.value = crewImg3
        break;
      
      case 4:
        crewIndex.value = index
        crewName.value = data.crew[index - 1].name
        crewRole.value = data.crew[index - 1].role
        crewDesc.value = data.crew[index - 1].bio
        crewImg.value = crewImg4
        break;
  }
}
</script>

<style></style>