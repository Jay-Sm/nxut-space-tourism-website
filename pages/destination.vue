<template>
  <div class="h-full flex flex-col px-[8rem] pt-[34px]">
    <div class="">
      <h2 class="font-barlow-condensed text-[28px] tracking-[3px]">
        <span class="font-semibold opacity-25">01</span>
        PICK YOUR DESTINATION
      </h2>
    </div>
    <div class="flex justify-center items-center h-full">
      <div class="mx-[40px]">
        <img :src="destinationImg" class="min-w-[445px]">
      </div>
      <div class="w-[27.8rem] mx-auto">
        <div>
          <div class="font-barlow-condensed text-[16px] w-fit">
            <div class="flex gap-x-[3.4rem]">
              <button @click="moveIndicator(); changeDestination(1)">
                MOON
                <div class="tab-indicator"></div>
              </button>
              <button @click="moveIndicator(); changeDestination(2)">MARS</button>
              <button @click="moveIndicator(); changeDestination(3)">EUROPA</button>
              <button @click="moveIndicator(); changeDestination(4)">TITAN</button>
            </div>
          </div>
          <div class="font-bellefair text-[100px]">{{ destinationName }}</div>
          <p class="text-[18px]">{{ destinationDescription }}</p>
        </div>
        <div class="mt-8 pt-8 flex gap-x-[4rem] border-t border-[#383B4B]">
          <div class="font-barlow-condensed text-[14px]">
            AVG. DISTANCE
            <p class="font-bellefair text-[28px]">{{ destinationDistance }}</p>
          </div>
          <div class="font-barlow-condensed text-[14px]">
            EST TRAVEL TIME
            <p class="font-bellefair text-[28px]">{{ destinationTravel }}</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
async function changeBg() {
  const bgElement = document.querySelector('.background-div')

  bgElement.classList.remove('bg-background-home-desktop')
  bgElement.classList.remove('bg-background-crew-desktop')
  bgElement.classList.remove('bg-background-technology-desktop')
  bgElement.classList.add('bg-background-destination-desktop')
}
changeBg()

function moveIndicator() {
  const tab = event.target
  const indicator = document.querySelector('.tab-indicator');

  tab.appendChild(indicator)
}

import data from "/data/data.json";

const destinationName = ref(data.destinations[0].name.toUpperCase())
const destinationDescription = ref(data.destinations[0].description)
const destinationDistance = ref(data.destinations[0].distance.toUpperCase())
const destinationTravel = ref(data.destinations[0].travel.toUpperCase())

import destinationImg1 from '/assets/images/destination/image-moon.png'
import destinationImg2 from '/assets/images/destination/image-mars.png'
import destinationImg3 from '/assets/images/destination/image-europa.png'
import destinationImg4 from '/assets/images/destination/image-titan.png'
const destinationImg = ref(destinationImg1)

function changeDestination(index) {
  switch (index) {
    case 1:
      destinationName.value = data.destinations[index - 1].name.toUpperCase()
      destinationDescription.value = data.destinations[index - 1].description
      destinationDistance.value = data.destinations[index - 1].distance.toUpperCase()
      destinationTravel.value = data.destinations[index - 1].travel.toUpperCase()
      destinationImg.value = destinationImg1
      break;

    case 2:
      destinationName.value = data.destinations[index - 1].name.toUpperCase()
      destinationDescription.value = data.destinations[index - 1].description
      destinationDistance.value = data.destinations[index - 1].distance.toUpperCase()
      destinationTravel.value = data.destinations[index - 1].travel.toUpperCase()
      destinationImg.value = destinationImg2
      break;

    case 3:
      destinationName.value = data.destinations[index - 1].name.toUpperCase()
      destinationDescription.value = data.destinations[index - 1].description
      destinationDistance.value = data.destinations[index - 1].distance.toUpperCase()
      destinationTravel.value = data.destinations[index - 1].travel.toUpperCase()
      destinationImg.value = destinationImg3
      break;

    case 4:
      destinationName.value = data.destinations[index - 1].name.toUpperCase()
      destinationDescription.value = data.destinations[index - 1].description
      destinationDistance.value = data.destinations[index - 1].distance.toUpperCase()
      destinationTravel.value = data.destinations[index - 1].travel.toUpperCase()
      destinationImg.value = destinationImg4
      break;
  }
}

</script>

<style>
.tab-indicator {
  @apply h-1 w-full bg-white;
}
</style>