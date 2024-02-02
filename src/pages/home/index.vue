<script setup lang="ts">
</script>

<template>
  <div class="home">
    <div class="home-gradient">
      <div class="home-gradient__block"></div>
    </div>

    <div class="home-logo">
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

    <nav class="home-navigation">
      <ul class="home-navs">
        <li class="home-nav home-nav__active">The AiDala era</li>
        <li class="home-nav">Benefits</li>
        <li class="home-nav">Capabilities</li>
        <li class="home-nav">Features</li>
        <li class="home-nav">Join AiDala</li>
      </ul>
    </nav>

    <div class="home-benefits">
      <h2 class="home-benefits-title">Our key benefits</h2>
      <div class="home-benefits-slider-container">
        <div class="home-benefits-slider">
          <div class="home-benefits-slider-gradient"></div>
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
            <img src="../../assets/img/benefits-slide-1.png" alt="Benefits Img">
          </div>
        </div>
      </div>
    </div>

    <div class="home-graph">
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
          <div class="home-graph-main-line"></div>
          <div class="home-graph-img">
            <img src="../../assets/img/home-graph.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
