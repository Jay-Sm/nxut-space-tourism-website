<template>
  <div class="flex justify-between items-end h-full w-full p-[8rem] pr-[15rem]">
    <div class="inline-block">
      <h2 class="font-barlow-condensed text-[28px] inline-block">
        SO, YOU WANT TO TRAVEL TO
        <br>
        <span class="font-bellefair text-[150px]">SPACE</span>
      </h2>
      <p class="w-[444px]">
        Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on
        the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
      </p>
    </div>
    <div class="explore">
      EXPLORE
    </div>
  </div>
</template>

<script setup>
async function changeBg() {
  const bgElement = document.querySelector('.background-div')

  bgElement.classList.remove('bg-background-crew-desktop')
  bgElement.classList.remove('bg-background-destination-desktop')
  bgElement.classList.remove('bg-background-technology-desktop')
  bgElement.classList.add('bg-background-home-desktop')
}
changeBg()

</script>

<style></style>