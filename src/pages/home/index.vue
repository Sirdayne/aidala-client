<script setup lang="ts">
import { ref } from 'vue'
import Sticky from 'sticky-js'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation, Autoplay, Mousewheel } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const modules = [Pagination, Navigation, Autoplay]
const featuresModules = [Mousewheel, Pagination]

const refEra = ref<HTMLElement | null>(null)
const refBenefits = ref<HTMLElement | null>(null)
const refLine = ref<HTMLElement | null>(null)
const refCapabilities = ref<HTMLElement | null>(null)
const refFeatures = ref<HTMLElement | null>(null)
const refJoin = ref<HTMLElement | null>(null)
const refSlides = ref<HTMLElement | null>(null)

const burgerActive = ref<boolean>(false)

function scrollTo(view: any) {
  view.scrollIntoView({ behavior: 'smooth' })
}

function scrollToWithDelay(view: any) {
  setTimeout(() => {
    view.scrollIntoView({behavior: 'smooth'})
  }, 1200)
}

function scrollOnVerticalSwipe() {
  refSlides?.value?.scrollIntoView({behavior: 'smooth'})
}

new Sticky('.home-navigation');
</script>

<template>
  <div class="home">

    <div class="home-nav-burger-container">
      <div class="home-nav-burger" :class="{ 'home-nav-burger_active': burgerActive }" @click="burgerActive = !burgerActive">
        <span class="home-nav-burger-line-1"></span>
        <span class="home-nav-burger-line-2"></span>
        <span class="home-nav-burger-line-3"></span>
      </div>
    </div>


    <Transition>
      <ul v-if="burgerActive" class="home-navigation_mobile">
        <li class="home-nav-mobile" @click="scrollTo(refEra)">The AiDala era</li>
        <li class="home-nav-mobile" @click="scrollTo(refBenefits)">Benefits</li>
        <li class="home-nav-mobile" @click="scrollTo(refCapabilities)">Capabilities</li>
        <li class="home-nav-mobile" @click="scrollTo(refFeatures)">Features</li>
        <li class="home-nav-mobile" @click="scrollTo(refJoin)">Join AiDala</li>
      </ul>
    </Transition>


    <div class="home-gradient">
      <div class="home-gradient__block"></div>
    </div>

    <div ref="refEra" class="home-logo">
      <img src="../../assets/img/logo_aidala.svg" alt="AiDala Logo">
    </div>
    <h1 class="home-title">Welcome to <span class="home-title__name">AiDala</span></h1>
    <div class="home-description__container">
      <h2 class="home-description">
        "Revolutionising" is often overused. "exclusive features" is vague. Suggest alternative copy: Refine Your Market Edge.
        With custom AI analytics, navigate through market noise and pinpoint risk with precision. Our platform is your
        ally—equipping you with intelligent tools tailored for strategic decision-making. Elevate your trades, join the ranks of elite traders
      </h2>
    </div>

    <nav class="home-navigation" data-margin-top="20">
      <ul class="home-navs">
        <li class="home-nav" @click="scrollTo(refEra)">The AiDala era</li>
        <li class="home-nav" @click="scrollTo(refBenefits)">Benefits</li>
        <li class="home-nav" @click="scrollTo(refCapabilities)">Capabilities</li>
        <li class="home-nav" @click="scrollTo(refFeatures)">Features</li>
        <li class="home-nav" @click="scrollTo(refJoin)">Join AiDala</li>
      </ul>
    </nav>

    <div class="home-benefits" ref="refBenefits">
      <h2 class="home-benefits-title">Our key benefits</h2>
      <div class="home-benefits-slider-container">

        <div class="home-benefits-main">
          <swiper
            :autoplay="{
              delay: 2500,
              disableOnInteraction: false,
            }"
            :pagination="{
              type: 'progressbar',
              el: '.home-benefits-slider-progress',
              horizontalClass: '.home-benefits-slider-progress',
              progressbarFillClass: 'home-benefits-slider-progress-fill'
            }"
            :navigation="{
              enabled: true,
              nextEl: '.home-benefits-slider-next',
              prevEl: '.home-benefits-slider-prev'
            }"
            :loop="true"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide>
              <div class="home-benefits-slider">
                <div class="home-benefits-text">
                  <h3 class="home-benefits-text__title">
                    Personalized User Experience: Your Trading, Your Way
                  </h3>
                  <p class="home-benefits-text__description">
                    AiDala goes beyond generic analysis, providing personalized insights and recommendations tailored to your
                    preferences and trading style. Empower your decisions with information aligned precisely with your unique goals and risk tolerance.
                  </p>
                </div>
                <div class="home-benefits-img">
                  <img src="../../assets/img/benefits-slide-1.png" alt="Benefits Image">
                  <div class="home-benefits-slider-gradient__mobile"></div>
                </div>
                <div class="home-benefits-slider-gradient"></div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="home-benefits-slider">
                <div class="home-benefits-text">
                  <h3 class="home-benefits-text__title">
                    Unparalleled Data Security and Privacy: Your Trust, Our Priority
                  </h3>
                  <p class="home-benefits-text__description">
                    Trust AIDALA for robust security measures and transparent data usage practices. We prioritize your data security and privacy without compromising on the convenience you deserve.
                  </p>
                </div>
                <div class="home-benefits-img">
                  <img src="../../assets/img/benefits-slide-2.png" alt="Benefits Image">
                  <div class="home-benefits-slider-gradient__mobile"></div>
                </div>
                <div class="home-benefits-slider-gradient"></div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="home-benefits-slider">
                <div class="home-benefits-text">
                  <h3 class="home-benefits-text__title">
                    Seamless Integration with Existing Tools: Unmatched Convenience
                  </h3>
                  <p class="home-benefits-text__description">
                    Integrate AIDALA seamlessly with leading crypto trading platforms. Experience unmatched convenience and ease of use, eliminating the hassle of separate interfaces and manual data transfer.
                  </p>
                </div>
                <div class="home-benefits-img">
                  <img src="../../assets/img/benefits-slide-3.png" alt="Benefits Image">
                  <div class="home-benefits-slider-gradient__mobile"></div>
                </div>
                <div class="home-benefits-slider-gradient"></div>
              </div>
            </swiper-slide>

            <div class="home-benefits-slider-prev home-benefits-slider-arrow">
              <img src="../../assets/img/swiper-prev.svg" alt="Swiper Prev">
            </div>
            <div class="home-benefits-slider-next home-benefits-slider-arrow">
              <img src="../../assets/img/swiper-next.svg" alt="Swiper Next">
            </div>

            <div class="home-benefits-slider-progress">
              <div class="home-benefits-slider-progress-fill"></div>
            </div>
          </swiper>
        </div>
      </div>
    </div>

    <div class="home-graph" ref="refCapabilities">
      <div class="home-graph-title-container">
        <h2 class="home-graph-title">
          Welcome to <span class="home-graph-title__name">AiDala</span>, where innovation meets personalized excellence in the world of crypto trading.
        </h2>
      </div>
      <div class="home-graph-main-container">
        <div class="home-graph-main">
          <div class="home-graph-main-high">
            <div class="home-graph-main-high-title"><span class="home-graph-main-high-title_gradient">AiDala</span></div>
            <div class="home-graph-main-high-value"><span class="home-graph-main-high-value_gradient">90.0%</span></div>
          </div>

          <div ref="refLine" class="home-graph-main-line"></div>
          <div class="home-graph-img">
            <img src="../../assets/img/home-graph.png" alt="">
          </div>
          <div class="home-graph-img_mobile">
            <img src="../../assets/img/home-graph_mobile.png" alt="">
          </div>

          <div class="home-graph-main-left">
            <div class="home-graph-main-left-value">86.4%</div>
            <div class="home-graph-main-left-description">5-shot* (reported) Previous SOTA (GPT-4)</div>
            <div class="home-graph-main-left-hint">*Note that evaluations of previous SOTA models use different prompting techniques.</div>
          </div>

          <div class="home-graph-main-right">
            <p>
              Benefit from superior data quality and relevance. AIDALA's advanced data pre-processing pipelines, incorporating contextual
              information and feature engineering, ensure an unparalleled depth of analysis that competitors struggle to match.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="home-features" ref="refFeatures">

      <div class="home-features-gradient"></div>

      <div class="home-features-title-container">
        <h2 class="home-features-title">
          Features for Mining companies
        </h2>
      </div>

      <div class="home-features-container" ref="refSlides">
        <swiper
          :direction="'vertical'"
          :height="847"
          :speed="600"
          :slidesPerView="1"
          :spaceBetween="30"
          :mousewheel="true"
          :modules="featuresModules"
          @beforeTransitionStart="scrollOnVerticalSwipe()"
          @reachEnd="scrollToWithDelay(refJoin)"
          @reachBeginning="scrollToWithDelay(refLine)"
          class="mySwiper"
        >
          <swiper-slide>
            <div class="home-features-block">
              <div class="home-features-block-text">
                <div>
                  <h3 class="home-features-block-text-title">
                    Trading Platforms Integration: AiDala Meets MetaTrader, Charles Schwab, Interactive Brokers
                  </h3>
                  <p class="home-features-block-text-content">
                    Explore a seamless fusion of AIDALA with established trading platforms, bringing charting,
                    technical analysis (TA) tools, live market data, and direct trading capabilities into one unified space.
                  </p>
                </div>
              </div>
              <div class="home-features-block-img">
                <img src="../../assets/img/home-features-1.png" alt="Features Image">
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="home-features-block">
              <div class="home-features-block-text">
                <div>
                  <h3 class="home-features-block-text-title">
                    Algorithmic Trading Mastery: AiDala  Ranks with QuantConnect, AlgoTraders, TradeStation
                  </h3>
                  <p class="home-features-block-text-content">
                    Automate your trading strategies with AiDala's algorithmic trading software, leveraging
                    cutting-edge algorithms to execute trades based on technical analysis and market conditions.
                  </p>
                </div>
              </div>
              <div class="home-features-block-img">
                <img src="../../assets/img/home-features-2.png" alt="Features Image">
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="home-features-block">
              <div class="home-features-block-text">
                <div>
                  <h3 class="home-features-block-text-title">
                    Backtesting Confidence: AiDala 
                  </h3>
                  <p class="home-features-block-text-content">
                    Test your strategies against historical data with AiDala's backtesting software.
                    Gain confidence in your approach before risking real money in the market.
                  </p>
                </div>
              </div>
              <div class="home-features-block-img">
                <img src="../../assets/img/home-features-3.png" alt="Features Image">
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="home-features-block">
              <div class="home-features-block-text">
                <div>
                  <h3 class="home-features-block-text-title">
                    Charting Software Excellence: AiDala  Joins TradingView, StockCharts.com, NinjaTrader
                  </h3>
                  <p class="home-features-block-text-content">
                    Benefit from advanced charting capabilities, technical indicators, and drawing tools.
                    AiDala’s charting software stands alongside industry leaders to provide a comprehensive visual representation of market data.
                  </p>
                </div>
              </div>
              <div class="home-features-block-img">
                <img src="../../assets/img/home-features-4.png" alt="Features Image">
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="home-features-block">
              <div class="home-features-block-text">
                <div>
                  <h3 class="home-features-block-text-title">
                    Technical Analysis 
                  </h3>
                  <p class="home-features-block-text-content">
                    Dive into the world of technical analysis with AiDala's tools, featuring indicators like moving averages,
                    RSI, MACD, and Bollinger Bands. Tailor your analysis to align with your trading style.
                  </p>
                </div>
              </div>
              <div class="home-features-block-img">
                <img src="../../assets/img/home-features-5.png" alt="Features Image">
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="home-features-block">
              <div class="home-features-block-text">
                <div>
                  <h3 class="home-features-block-text-title">
                    Market Scanners and Screeners: AiDala alongside Trade Ideas
                  </h3>
                  <p class="home-features-block-text-content">
                    Effortlessly filter stocks and instruments based on specific criteria with AiDala's
                    market scanners and screeners, adding an extra layer of precision to your trading decisions.
                  </p>
                </div>
              </div>
              <div class="home-features-block-img">
                <img src="../../assets/img/home-features-6.png" alt="Features Image">
              </div>
            </div>
          </swiper-slide>
        </swiper>

      </div>

      <div class="home-features-container__mobile">
        <div class="home-features-block">
          <div class="home-features-block-text">
            <div>
              <h3 class="home-features-block-text-title">
                Trading Platforms Integration: AiDala Meets MetaTrader, Charles Schwab, Interactive Brokers
              </h3>
              <p class="home-features-block-text-content">
                Explore a seamless fusion of AIDALA with established trading platforms, bringing charting,
                technical analysis (TA) tools, live market data, and direct trading capabilities into one unified space.
              </p>
            </div>
          </div>
          <div class="home-features-block-img">
            <img src="../../assets/img/home-features-1.png" alt="Features Image">
          </div>
        </div>
        <div class="home-features-block">
          <div class="home-features-block-text">
            <div>
              <h3 class="home-features-block-text-title">
                Algorithmic Trading Mastery: AiDala  Ranks with QuantConnect, AlgoTraders, TradeStation
              </h3>
              <p class="home-features-block-text-content">
                Automate your trading strategies with AiDala's algorithmic trading software, leveraging
                cutting-edge algorithms to execute trades based on technical analysis and market conditions.
              </p>
            </div>
          </div>
          <div class="home-features-block-img">
            <img src="../../assets/img/home-features-2.png" alt="Features Image">
          </div>
        </div>
        <div class="home-features-block">
          <div class="home-features-block-text">
            <div>
              <h3 class="home-features-block-text-title">
                Backtesting Confidence: AiDala 
              </h3>
              <p class="home-features-block-text-content">
                Test your strategies against historical data with AiDala's backtesting software.
                Gain confidence in your approach before risking real money in the market.
              </p>
            </div>
          </div>
          <div class="home-features-block-img">
            <img src="../../assets/img/home-features-3.png" alt="Features Image">
          </div>
        </div>
        <div class="home-features-block">
          <div class="home-features-block-text">
            <div>
              <h3 class="home-features-block-text-title">
                Charting Software Excellence: AiDala  Joins TradingView, StockCharts.com, NinjaTrader
              </h3>
              <p class="home-features-block-text-content">
                Benefit from advanced charting capabilities, technical indicators, and drawing tools.
                AiDala’s charting software stands alongside industry leaders to provide a comprehensive visual representation of market data.
              </p>
            </div>
          </div>
          <div class="home-features-block-img">
            <img src="../../assets/img/home-features-4.png" alt="Features Image">
          </div>
        </div>
        <div class="home-features-block">
          <div class="home-features-block-text">
            <div>
              <h3 class="home-features-block-text-title">
                Technical Analysis 
              </h3>
              <p class="home-features-block-text-content">
                Dive into the world of technical analysis with AiDala's tools, featuring indicators like moving averages,
                RSI, MACD, and Bollinger Bands. Tailor your analysis to align with your trading style.
              </p>
            </div>
          </div>
          <div class="home-features-block-img">
            <img src="../../assets/img/home-features-5.png" alt="Features Image">
          </div>
        </div>
        <div class="home-features-block">
          <div class="home-features-block-text">
            <div>
              <h3 class="home-features-block-text-title">
                Market Scanners and Screeners: AiDala alongside Trade Ideas
              </h3>
              <p class="home-features-block-text-content">
                Effortlessly filter stocks and instruments based on specific criteria with AiDala's
                market scanners and screeners, adding an extra layer of precision to your trading decisions.
              </p>
            </div>
          </div>
          <div class="home-features-block-img">
            <img src="../../assets/img/home-features-6.png" alt="Features Image">
          </div>
        </div>
      </div>
    </div>

    <div class="home-join" ref="refJoin">

      <div class="home-join-gradient"></div>
      <div class="home-join-gradient-2"></div>

      <div class="home-join-title-container">
        <h2 class="home-join-title">
          Join AiDala Today: Where Innovation Meets Your Trading Needs
        </h2>
      </div>
      <div class="home-join-description-container">
        <h2 class="home-join-description">
          Embark on a journey where innovation meets your unique needs. Elevate your trading strategies, gain valuable insights, and experience a new standard in
          rypto trading with AiDala's MVP. Empower Your Trading Journey with AIDALA - Redefining the Future of Crypto Trading.
        </h2>
      </div>
      <div>
        <div class="home-join-btns-container">
          <div class="home-join-btns">
            <button class="home-btn">Start</button>
            <button class="home-btn home-btn__outline">Connect</button>
          </div>
        </div>
      </div>
    </div>

    <div class="home-book-demo-container">
      <div class="home-book-demo">
        <div class="home-book-demo-content">
          <h3 class="home-book-demo-title">
            Book your demo now
          </h3>
          <div class="home-book-demo-description">
            Stay at the forefront of innovation with our commitment to continuous research and development.
          </div>
          <div class="home-book-demo-input home-input">
            <input type="email" placeholder="Email">
            <span class="home-input-arrow">
              <img src="../../assets/img/input-arrow.svg" alt="Input Arrow">
            </span>
          </div>
        </div>

        <div class="home-book-demo-img">
          <img src="../../assets/img/book-img.svg" alt="Book Your Demo Image">
        </div>
      </div>
    </div>

    <footer class="home-footer-container">
      <div class="home-footer">
        <div class="home-footer-link">
          AiDala.uk
        </div>
        <div class="home-footer-linkedin">
          <img src="../../assets/img/linkedin_square.svg" alt="Linkedin Image">
        </div>
      </div>
    </footer>
  </div>
</template>
