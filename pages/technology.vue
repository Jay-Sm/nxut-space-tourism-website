<template>
  <div class="p-[4rem] pr-0">
    <div class="">
      <h2 class="font-barlow-condensed text-[28px]"><span class="font-bold opacity-25">03</span> SPACE LAUNCH 101</h2>
    </div>
    <div class="flex">
      <div class="flex flex-col">
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </div>
      <div>
        <h3>THE TERMINOLOGY…</h3>
        <h1>LAUNCH VEHICLE</h1>
        <p>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface
          to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing
          150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
      </div>
      <div>
        image
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
