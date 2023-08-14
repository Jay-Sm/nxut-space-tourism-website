<template>
  <div class="h-full flex flex-col justify-center pl-[6rem]">
    <div class="my-auto">
      <h2 class="font-barlow-condensed text-[28px] tracking-[3px]"><span class="font-semibold opacity-25">03</span> SPACE
        LAUNCH 101</h2>
    </div>
    <div class="flex items-center">
      <div class="flex flex-col gap-y-[2.25rem] mr-[4rem]">
        <button class="tech-selection active">1</button>
        <button class="tech-selection">2</button>
        <button class="tech-selection">3</button>
      </div>
      <div>
        <h3 class="font-barlow-condensed text-[16px]">THE TERMINOLOGY…</h3>
        <h1 class="font-bellefair text-[56px] mt-1 mb-3">LAUNCH VEHICLE</h1>
        <p class="text-[18px] w-[27.5rem]">A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload
          from Earth's surface
          to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing
          150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
      </div>
      <div class="ml-auto">
        <img src="../assets/images/technology/image-launch-vehicle-portrait.jpg"
          class="w-[29] h-[29.75] min-w-[28rem] min-h-[28.75] ml-3">
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

</script>



<style></style>
