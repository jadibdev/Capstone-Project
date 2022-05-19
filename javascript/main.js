const template = `
  <h1 class="text-center mt-3">Featured Speakers</h1>
   <p class="text-center dash">____<p>
    <div class="container speakers-container">
      <div class="row">
        <div class="col-md-12 col-lg-6 speaker-card">
          <img src="/assets/images/sundar.jpeg" class="img-fluid" alt="sundar pichai">
          <div class="container speaker-decription">
            <h2>Sundar Pichai</h2>
            <h6>CEO of google & alphabet</h6>
          </div>
        </div>
        <div class="col-md-12 col-lg-6 speaker-card">
          <img src="https://io.google/2022/speakers/a3332795-c791-4949-9b9a-caf37a59011c_500.webp" class="img-fluid" alt="sundar pichai">
          <div class="container speaker-decription">
            <h2>Josh Woodward</h2>
            <h6>Senior Director @ Google Labs</h6>
          </div>>
        </div>
        <div class="col-md-12 col-lg-6 speaker-card">
          <img src="https://io.google/2022/speakers/583513af-02ad-4d43-a33a-a0a0bcf3b8b2_500.webp" class="img-fluid" alt="sundar pichai">
          <div class="container speaker-decription">
            <h2>Prabhakar Raghavan</h2>
            <h6>SVP of search</h6>
          </div>
        </div>
        <div class="col-md-12 col-lg-6 speaker-card">
          <img src="https://io.google/2022/speakers/7190d67c-53d5-4d20-9459-d37e7210e8ef_500.webp" class="img-fluid" alt="sundar pichai">
          <div class="container speaker-decription">
            <h2>Sissie Hsiao</h2>
            <h6>VP & GM, Assistant</h6>
          </div>>
        </div>
        <div class="col-md-12 col-lg-6 speaker-card">
          <img src="https://io.google/2022/speakers/c9fb48bf-575a-493f-be1f-db3c50727774_500.webp" class="img-fluid" alt="sundar pichai">
          <div class="container speaker-decription">
            <h2>Trystan Upstill</h2>
            <h6>VP, Engineering, Android</h6>
          </div>
        </div>
        <div class="col-md-12 col-lg-6 speaker-card">
          <img src="https://io.google/2022/speakers/bfe09f6d-27e7-4b68-a93e-617e20d7fc31_500.webp" class="img-fluid" alt="sundar pichai">
          <div class="container speaker-decription">
            <h2>Sameer Samat</h2>
            <h6>VP, Product Management, Android</h6>
          </div>>
        </div>
      </div>
    </div>
`;

document.getElementById('speakers').innerHTML = template;