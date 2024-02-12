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
    <main>
        <div class="mainimg">
            <img src="/assets/gwhmun_logo.png" class="commlogo">
            <h1 class="title">GWH JMUN 2024</h1>
            <h2 class="subtitle">For grades 6-8 only</h2>
            <h2 class="subtitle">13th & 14th February</h2>
        </div>
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
        </div>
        <h1 class="msg-title">Letter from the Secretary General</h1>
        <div class="msg">
            <div class="info">
                <img src="/assets/eb_pics/UNSC/Harihar Prasad.png">
                <h2 class="name">Harihar Prasad</h2>
                <h3 class="tl">Secretary General</h3>
            </div>
            <div class="desc">{{`Chaos. Turmoil. Conflict.\n\nIn a world that’s plagued by a myriad of issues, from poverty to civil wars - there lies but one hope for a brighter future. All of you. In each and every one of you lies an ember of infinite potential, a spark that if treated right has the potential to turn into a fire that paints the very sky a shade of glorious crimson.\n\nWe’ve opened the doors for you - doors to a world of debate, research and intense negotiation in pursuit of a better world, a world where needless suffering is a thing of the past, and harmony and peace prevails. However, it is paramount that you recognise that this opportunity depends upon the effort that you put in. The magnitude of change is directly proportional to the dedication and passion with which you approach the challenge before you.\n\nIn the words of Ludwig Van Beethoven, "To play a wrong note is insignificant; to play without passion is inexcusable." It is not your experience that matters, but the passion with which you approach this arena of debate. Fear is a constant. To face that fear and come out on top is what truly separates the extraordinary from the ordinary.\n\nIt is my hope that Greenwood High Junior Model United Nations 2024 ignites within you the same passion for pushing forth global progress and debate that my first MUN did in me. Times are changing, and in but a few short years, we will be the ones looking up to you instead of the other way around. This world needs change - and I have faith that you will be the one to spearhead that change.\n\nThis is but the first step for you on the path to infinity.\n\nResearch. Debate. Push your limits.\n\nThen go out there and change the world.\n\nYours sincerely,\nHarihar Prasad\nSecretary General`}}</div>
        </div>
        <h1 class="msg-title">Letter from the Director General</h1>
        <div class="msg">
          <div class="info">
                <img src="/assets/eb_pics/IPC/Aarush Vyas.png">
                <h2 class="name">Aarush Vyas</h2>
                <h3 class="tl">Director General</h3>
            </div>
            <div class="desc">{{`“I would rather have questions that can’t be answered rather than answers that can’t be questioned.” - Richard Feynmann.\n\nHumanity’s progress came through curiosity. If an early human didn’t stumble out of their cave to investigate the blinding, orange plume that lit up a tree in front of them, humanity would have never harnessed fire. If we never thought to make things more efficient, we never would have invented the wheel or the carriage. Humanity’s ability to inquire, think, and act accordingly has brought it from apehood to the world’s de facto apex predator.\n\nAs humans, there is no ceiling too high to reach, and no limit to how quickly we can do it.\n\nAs young thinkers and our world’s future, you must steer humanity back onto the right path, and seeing as we will soon get our hands on the reins, this generation and those to come must be prepared.\n\nGeopolitics in this era of tomorrow’s history seem like a storm; thundering, crashing, frightening. It may seem like a fool’s errand to fight the weather, but geopolitical disasters are not forces of nature and are most certainly not impossible to steer away. Everything you see in the news is a consequence of a decision made by a human. \n\nOur job as humans is to ensure that our comrades’ actions result in headlines of jubilation, rather than dread, and there is no better way to understand that than to get down in the mud with the crises and the cover-ups, to see what makes the world tick. There are no heroes in this story, nor are there villains. There are people, their visions, and their will to take action.\n\nWelcome to Greenwood High’s Junior Model United Nations 2024. \n\nIn the coming days, you will have to navigate the high seas of diplomacy, tiptoe down the creaky stairs of international law, and be a little shady. Research, investigate, and fight tooth and nail. You are not the spectators, but the protagonists. Seize the moment, and make it yours.\n\nBe the change you want to see by making the changes you want to see. The only thing that you need to change the world is a desire to do so, and the will to make it happen.\n\nSincerely,\nAarush Vyas\nDirector General`}}</div>   
        </div>
    </main>
    <div class="embla" ref="emblaNode">
      <div class="embla__container">
        <div class="embla__slide"><img src="/assets/carousel/File_1.jpg " width="600rem"  height="400rem" ></div>
        <div class="embla__slide"><img src="/assets/carousel/File_2.jpg " width="600rem"  height="400rem" ></div>
        <div class="embla__slide"><img src="/assets/carousel/File_3.jpg " width="600rem"  height="400rem" ></div>
        <div class="embla__slide"><img src="/assets/carousel/File_4.jpg " width="600rem"  height="400rem" ></div>
        <div class="embla__slide"><img src="/assets/carousel/File_6.jpg " width="600rem"  height="400rem" ></div>
        <div class="embla__slide"><img src="/assets/carousel/File_7.jpg " width="600rem"  height="400rem" ></div>
        <div class="embla__slide"><img src="/assets/carousel/File_8.jpg " width="600rem"  height="400rem" ></div>
        <div class="embla__slide"><img src="/assets/carousel/File_9.jpg " width="600rem"  height="400rem" ></div>
        <div class="embla__slide"><img src="/assets/carousel/File_10.jpg " width="600rem"  height="400rem" ></div>
        <div class="embla__slide"><img src="/assets/carousel/File_11.jpg " width="600rem"  height="400rem" ></div>
        <div class="embla__slide"><img src="/assets/carousel/File_12.jpg " width="600rem"  height="400rem" ></div>
        <div class="embla__slide"><img src="/assets/carousel/File_13.jpg " width="600rem"  height="400rem" ></div>
        <div class="embla__slide"><img src="/assets/carousel/File_14.jpg " width="600rem"  height="400rem" ></div>
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
    background-image: url('/assets/mainimg.png');
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
