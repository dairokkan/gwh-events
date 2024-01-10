<script>
  import emblaCarouselVue from 'embla-carousel-vue'
  import Autoplay from 'embla-carousel-autoplay'
  
  
  export default {
    
    setup() {
       
        const autoplayOptions = {
        delay: 2000,
        rootNode: (emblaRoot) => emblaRoot.parentElement
        }

      const [emblaNode] = emblaCarouselVue({ loop: true }, [Autoplay(autoplayOptions)])
      return { emblaNode }
    },
  }
</script>
<template>
<div class="embla" ref="emblaNode">
    <div class="embla__container">
      <div class="embla__slide"><img src="/assets/carousel/File_1.jpg " width="600rem"  height="330rem" ></div>
      <div class="embla__slide"><img src="/assets/carousel/File_2.jpg " width="600rem"  height="330rem" ></div>
      <div class="embla__slide"><img src="/assets/carousel/File_3.jpg " width="600rem"  height="330rem" ></div>
      <div class="embla__slide"><img src="/assets/carousel/File_4.jpg " width="600rem"  height="330rem" ></div>
      <div class="embla__slide"><img src="/assets/carousel/File_6.jpg " width="600rem"  height="330rem" ></div>
      <div class="embla__slide"><img src="/assets/carousel/File_7.jpg " width="600rem"  height="330rem" ></div>
      <div class="embla__slide"><img src="/assets/carousel/File_8.jpg " width="600rem"  height="330rem" ></div>
      <div class="embla__slide"><img src="/assets/carousel/File_9.jpg " width="600rem"  height="330rem" ></div>
      <div class="embla__slide"><img src="/assets/carousel/File_10.jpg " width="600rem"  height="330rem" ></div>
      <div class="embla__slide"><img src="/assets/carousel/File_11.jpg " width="600rem"  height="330rem" ></div>
      <div class="embla__slide"><img src="/assets/carousel/File_12.jpg " width="600rem"  height="330rem" ></div>
      <div class="embla__slide"><img src="/assets/carousel/File_13.jpg " width="600rem"  height="330rem" ></div>
      <div class="embla__slide"><img src="/assets/carousel/File_14.jpg " width="600rem"  height="330rem" ></div>
    </div>
  </div>
    <main>
        <div class="mainimg">
            <h1 class="title">GWH JMUN 2024</h1>
            <h2 class="subtitle">For grades 6-8 only</h2>
            <h2 class="subtitle">Dates TBA</h2>
        </div>
        <h1>FLOW OF EVENTS</h1>
        <h1>LETTER FROM SECGEN</h1>
        <h1>LETTER FROM DIRGEN</h1>

    </main>
     

</template>

<style scoped>
main {
    padding: 10px;
}

.mainimg {
    margin: 0 10px;
    border: 2px solid #3b3b3b;
    border-radius: 20px;
    padding: 125px 15px;
    display: flex;
    flex-direction: column;
    text-align: center;
}

h1.title {
    font-size: 3.5em;
    margin: 5px;
}

h2.subtitle {
    font-weight: normal;
    font-size: 1.75em;
    margin: 5px
}

.embla {
    overflow: hidden;
  }
  .embla__container {
    display: flex;
  }
  .embla__slide {
    flex: 0 0 100%;
    min-width: 0;
  }
</style>
