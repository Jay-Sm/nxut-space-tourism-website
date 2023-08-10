<template>
  <div class="h-full pt-11 bg-background-home-desktop bg-cover">
    <header class="flex justify-end">
      <div class="flex flex-col justify-center mx-auto">
        <img src="../assets/images/shared/logo.svg" alt="" class="min-w-[48px] h-[48px] mx-4">
      </div>
      <div class="border-b-2 border-white my-auto ml-2 h-0 w-[42rem] min-w-[90px] opacity-20 z-10"></div>
      <nav class="navbar">
        <ul class="flex gap-x-[4rem]">
          <li>
            <span>00</span>
            HOME
          </li>
          <li>
            <span>01</span>
            DESTINATION
          </li>
          <li>
            <span>02</span>
            CREW
          </li>
          <li>
            <span>03</span>
            TECHNOLOGY
          </li>
        </ul>
      </nav>
    </header>

    <main class="inline-block h-[86%] w-full">
      <slot />
    </main>
  </div>
</template>

<script setup>

</script>



<style></style>
