const speakers = [
  {
    img: '/assets/images/sundar.jpeg',
    name: 'Sundar Pichai',
    title: 'CEO of google & alphabet',
  },
  {
    img: 'https://io.google/2022/speakers/a3332795-c791-4949-9b9a-caf37a59011c_500.webp',
    name: 'Josh Woodward',
    title: 'Senior Director @ Google Labs',
  },
  {
    img: 'https://io.google/2022/speakers/583513af-02ad-4d43-a33a-a0a0bcf3b8b2_500.webp',
    name: 'Prabhakar Raghavan',
    title: 'SVP of search',
  },
  {
    img: 'https://io.google/2022/speakers/7190d67c-53d5-4d20-9459-d37e7210e8ef_500.webp',
    name: 'Sissie Hsiao',
    title: 'VP & GM, Assistant',
  },
  {
    img: 'https://io.google/2022/speakers/c9fb48bf-575a-493f-be1f-db3c50727774_500.webp',
    name: 'Trystan Upstill',
    title: 'VP, Engineering, Android',
  },
  {
    img: 'https://io.google/2022/speakers/bfe09f6d-27e7-4b68-a93e-617e20d7fc31_500.webp',
    name: 'Sameer Samat',
    title: 'VP, Product Management, Android',
  },
];

function showSpeakers() {
  const speakersContainer = document.getElementById('speakers');
  let buildHTML = '';
  for (let i = 0; i < speakers.length; i += 1) {
    buildHTML
      += `
      <div class="col-md-12 col-lg-6 speaker-card">
          <img src=${speakers[i].img} class="img-fluid" alt="sundar pichai">
          <div class="container speaker-decription">
            <h2>${speakers[i].name}</h2>
            <h6>${speakers[i].title}</h6>
          </div>
      </div>
    `;
  }
  speakersContainer.innerHTML = buildHTML;
}

window.onload = () => {
  showSpeakers();
};
