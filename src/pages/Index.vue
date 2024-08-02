<script>
  import emblaCarouselVue from 'embla-carousel-vue'
  import Autoplay from 'embla-carousel-autoplay'  
  
  export default {
    head: {
        title: 'GWHMUN 2024'
    },
    setup() {
       
        const autoplayOptions = {
        delay: 2000,
        rootNode: (emblaRoot) => emblaRoot.parentElement
        }

      const [emblaNode] = emblaCarouselVue({ loop: true }, [Autoplay(autoplayOptions)])
      return { emblaNode }
    }
  }
</script>
<template>
    <main>
        <div class="mainimg">
            <img src="/assets/gwhmun_logo.webp" class="commlogo">
            <h1 class="title">GWHMUN 2024</h1>
            <h2 class="subtitle"></h2>
            <h2 class="subtitle">29-31 August, 2024</h2>
        </div>
        <!--<h1 class="msg-title">Flow of Events</h1>
        <div class="flow">
            <div class="day">
                <h1>Day 1</h1>
                <p>Reporting time to school: 7:45 AM</p>
                <p>Registrations: 8:00 - 9:00 AM</p>
                <p>Opening Ceremony: 9:00 - 10:00 AM</p>
                <p>Juice Break: 10:00 - 10:15 AM</p>
                <p>Committee Session 1: 10:15 AM - 12:20 PM</p>
                <p>Lunch: 12:20 - 12:55 PM</p>
                <p>Committee Session 2: 12:55 PM - 2:00 PM</p>
                <p>Disperal: 2:05 PM</p>
            </div>
            <div class="day">
                <h1>Day 2</h1>
                <p>Reporting time to school (at the respective committee rooms): 7:45 AM</p>
                <p>Committee Session 3: 8:00 - 10:00 AM</p>
                <p>Juice Break: 10:00 - 10:15 AM</p>
                <p>Committee Session 4: 10:15 AM - 12:20 PM</p>
                <p>Lunch: 12:20 - 12:55 PM</p>
                <p>Closing Ceremony: 1:00 - 2:00 PM</p>
                <p>Dispersal: 2:05 PM</p>
            </div>
        </div>-->
        <h1 class="msg-title">Letter from the Secretary General</h1>
        <div class="msg">
            <div class="info">
                <img src="/assets/eb_pics/secgen.webp">
                <h2 class="name">Harihar Prasad</h2>
                <h3 class="tl">Secretary General</h3>
            </div>
            <div class="desc">{{ `Chaos. Turmoil. Conflict. \n\nIn a world that’s plagued by a myriad of issues, from poverty to civil wars - there lies but one hope for a brighter future. All of you. In each and every one of you lies an ember of infinite potential, a spark that if treated right has the potential to turn into a fire that paints the very sky a shade of glorious crimson. \n\nWe’ve opened the doors for you - doors to a world of debate, research and intense negotiation in pursuit of a better world, a world where needless suffering is a thing of the past, and harmony and peace prevails. However, it is paramount that you recognise that this opportunity depends upon the effort that you put in. The magnitude of change is directly proportional to the dedication and passion with which you approach the challenge before you. \n\nIn the words of Ludwig Van Beethoven, "To play a wrong note is insignificant; to play without passion is inexcusable." It is not your experience that matters, but the passion with which you approach this arena of debate. Fear is a constant. To face that fear and come out on top is what truly separates the extraordinary from the ordinary. \n\nIt is my hope that Greenwood High Model United Nations 2024 ignites within you the same passion for pushing forth global progress and debate that my first MUN did in me. Times are changing, and in but a few short years, we will be the ones looking up to you instead of the other way around. This world needs change - and I have faith that you will be the one to spearhead that change. \n\nThis is but the first step for you on the path to infinity. \n\nResearch. Debate. Push your limits. \n\nThen go out there and change the world. \n\nYours sincerely,\nHarihar Prasad\nSecretary General` }}</div>
        </div>
        <h1 class="msg-title">Letter from the Director General</h1>
        <div class="msg">
          <div class="info">
                <img src="/assets/eb_pics/dirgen.webp">
                <h2 class="name">Riana Kapoor</h2>
                <h3 class="tl">Director General</h3>
            </div>
            <div class="desc">{{ `Having participated in numerous Model United Nations conferences over the years, I’ve experienced firsthand the incredible energy, and the intellectual rigor of these events. I’ve also learned to navigate complex negotiations, forming lasting friendships, and yes once or twice caused a lot of chaos. These experiences have changed the way I look at various situations and has given me plenty of laughs through the years. \n\nEmpowerment. Insight. And lots of fun.\n\nThat’s what I’ve been seen are the corner stones of each great MUNner and I cannot wait to see more this year at GWHMUN 2024\nEngage with some of the brightest minds as you delve into complex issues, striving to understand and solve them. Feel the adrenaline rush as you present your case, defend your position, and work tirelessly to build consensus. Experience the joy of victory when your resolution passes, and the camaraderie that comes from shared efforts and mutual respect. \n\nGWHMUN is not just an event; it's a transformative journey. Here, every delegate is a vital part of a larger mission—shaping the future through dialogue and diplomacy. Our committees are designed to push the boundaries of conventional thinking, encouraging innovative solutions to real-world problems. Whether discussing global security, human rights, or environmental sustainability, you'll be at the forefront of cutting-edge debates. As Margaret Mead wisely noted, “Never doubt that a small group of thoughtful, committed citizens can change the world; indeed, it's the only thing that ever has.” At GWHMUN, you have the opportunity to embody this change and make your voice count.\nEmbrace the spirit of collaboration, where every voice matters and every perspective counts. Whether you’re a seasoned delegate or a first-time participant, GWHMUN promises an inclusive and supportive environment that nurtures growth and fosters leadership. Our dedicated chairs and staff are here to guide you, ensuring a seamless and enriching experience.\n\nAs Director General, I am thrilled to welcome you to this exceptional event. Your presence, your ideas, and your passion are what make GWHMUN truly special. Together, let’s embark on this exhilarating journey, ready to face challenges, seize opportunities, and make a lasting impact.\n\nWelcome to Greenwood High MUN. Let’s create a better world, one resolution at a time.` }}</div>   
        </div>
    </main>
    <div class="embla" ref="emblaNode">
      <div class="embla__container">
        <div class="embla__slide"><img src="/assets/carousel/File_1.webp " width="600rem"  height="400rem" ></div>
        <div class="embla__slide"><img src="/assets/carousel/File_2.webp " width="600rem"  height="400rem" ></div>
        <div class="embla__slide"><img src="/assets/carousel/File_3.webp " width="600rem"  height="400rem" ></div>
        <div class="embla__slide"><img src="/assets/carousel/File_4.webp " width="600rem"  height="400rem" ></div>
        <div class="embla__slide"><img src="/assets/carousel/File_6.webp " width="600rem"  height="400rem" ></div>
        <div class="embla__slide"><img src="/assets/carousel/File_7.webp " width="600rem"  height="400rem" ></div>
        <div class="embla__slide"><img src="/assets/carousel/File_8.webp " width="600rem"  height="400rem" ></div>
        <div class="embla__slide"><img src="/assets/carousel/File_9.webp " width="600rem"  height="400rem" ></div>
        <div class="embla__slide"><img src="/assets/carousel/File_10.webp " width="600rem"  height="400rem" ></div>
        <div class="embla__slide"><img src="/assets/carousel/File_11.webp " width="600rem"  height="400rem" ></div>
        <div class="embla__slide"><img src="/assets/carousel/File_12.webp " width="600rem"  height="400rem" ></div>
        <div class="embla__slide"><img src="/assets/carousel/File_13.webp " width="600rem"  height="400rem" ></div>
        <div class="embla__slide"><img src="/assets/carousel/File_14.webp " width="600rem"  height="400rem" ></div>
      </div>
    </div>
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
    background-image: url('/assets/mainimg.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    align-items: center;
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

.commlogo {
    width: 300px;
}

.embla {
    overflow: hidden;
  }
  .embla__container {
    display: flex;
    margin: auto;
    width: 50%;
    padding: 10px;
  }
  .embla__slide {
    flex: 0 0 100%;
    min-width: 0;
  }

  .msg {
    display: flex;
    align-items: center;
    margin: 15px 5%;
    padding-bottom: 1em;
    border-bottom: 1px solid #363636;
    text-align: center;
}

.info {
    padding: 0 5%;
    text-align: center;
}

.info > img {
    border: 1px solid #363636;
    border-radius: 50%;
}

@media(min-width: 800px) {
    .msg {
        flex-direction: row;
        justify-content: space-between;
    }   
    .desc {
        width: 80%;
    }
    .info {
        width: 30%
    }
    .info > img {      
        width: 80%;
    }
}

@media(max-width: 800px) {
    .msg {
        flex-direction: column;
    }
    .desc {
        width: 100%;
    }
    .info {
        width: 100%
    }
    .info > img {
        width: 60%;
    }
}

.desc {
    padding: 5px 0;
    white-space: pre-wrap;
}

h2.name {
    font-size: 1.75em;
    margin: 0;
}

h3.tl {
    font-size: 1.25em;
    margin: 0;
    font-weight: normal;
}

h1.msg-title {
    text-align: center;
    font-size: 2.5em;
}

.flow {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 50px;
    flex-wrap: wrap;
}

.day {
    border: 1px solid #363636;
    border-radius: 20px;
    padding: 50px 15px;
    text-align: center;
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.day p {
    margin: 5px;
    font-size: 1.1em;
}
</style>
