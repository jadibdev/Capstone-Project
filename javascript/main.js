/* const getProjectListParentDiv = document.getElementById('');
const projectList = [
  {
    name: 'Sundar Pichai',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featured_image: 'nature-35.png',
    technologies: ['html-label.png', 'css-label.png', 'javascript-label.png'],
    live: '#',
    source: '#',
  },
  {
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featured_image: 'multi-post-stories2.png',
    technologies: ['html-label.png', 'css-label.png', 'javascript-label.png'],
    live: '#',
    source: '#',
  },
  {
    name: 'Facebook 360',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featured_image: 'Snapshoot-Portfolio.png',
    technologies: ['html-label.png', 'css-label.png', 'javascript-label.png'],
    live: '#',
    source: '#',
  },
  {
    name: 'Uber Navigation',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featured_image: 'multi-post-stories.png',
    technologies: ['html-label.png', 'css-label.png', 'javascript-label.png'],
    live: '#',
    source: '#',
  },

];

const createMainElements = (elem, classes) => {
  const mainElem = document.createElement(elem);
  if (classes !== '') {
    const classesList = classes.split(' ');
    mainElem.classList.add(...classesList);
  }
  return mainElem;
};

for (let index = 0; index < projectList.length; index += 1) {
  const mainDiv = createMainElements('div', 'speakers-container container d-flex flex-column');
  const speakerCard = createMainElements('div', 'project-subtitle-container');

  const image = createMainElements('img', 'speaker-pic');
  image.src = projectList[index].featured_image;
  image.alt = `Project ${index + 1} image`;

  const h2 = createMainElements('h2', 'speaker-name');
  h2.textContent = projectList[index].name;

  const speakerProfession = createMainElements('div', 'speaker-profession');
  speakerProfession.textContent = 'CEO of alpahbet & google';

  const projectDescDiv = createMainElements('div', 'project-description');
  const projectDesc = createMainElements('p', '');
  projectDesc.textContent = projectList[index].description;
  projectDescDiv.appendChild(projectDesc);

  const subtitleChildright = createMainElements('div', 'project-subtitle-right');

  speakerCard.appendChild(speakerProfession);
  speakerCard.appendChild(subtitleChildright);

  mainDiv.appendChild(image);
  speakerCard.appendChild(h2);
  // mainDiv.appendChild(speakerCard);
  speakerCard.appendChild(projectDescDiv);
  
  getProjectListParentDiv.append(mainDiv);
  getProjectListParentDiv.append(speakerCard);
}
 */

const template = `
  <h1 class="text-center mb-5 mt-3">Featured Speakers</h1>
    <div class="container speakers-container">
      <div class="row">
        <div class="col-md-12 col-lg-6 speaker-card">
          <img src="/assets/images/sundar.jpeg" class="img-fluid" alt="sundar pichai">
          <div class="container speaker-decription">
            <h2>Sundar Pichai</h2>
            <h6>CEO of google & alpahbet</h6>
            <p>joined google in 2012 after larry left ..</p>
          </div>
        </div>
        <div class="col-md-12 col-lg-6 speaker-card">
          <img src="/assets/images/sundar.jpeg" class="img-fluid" alt="sundar pichai">
          <div class="container speaker-decription">
            <h2>Sundar Pichai</h2>
            <h6>CEO of google & alpahbet</h6>
            <p>joined google in 2012 after larry left ..</p>
          </div>>
        </div>
        <div class="col-md-12 col-lg-6 speaker-card">
          <img src="/assets/images/sundar.jpeg" class="img-fluid" alt="sundar pichai">
          <div class="container speaker-decription">
            <h2>Sundar Pichai</h2>
            <h6>CEO of google & alpahbet</h6>
            <p>joined google in 2012 after larry left ..</p>
          </div>
        </div>
        <div class="col-md-12 col-lg-6 speaker-card">
          <img src="/assets/images/sundar.jpeg" class="img-fluid" alt="sundar pichai">
          <div class="container speaker-decription">
            <h2>Sundar Pichai</h2>
            <h6>CEO of google & alpahbet</h6>
            <p>joined google in 2012 after larry left ..</p>
          </div>>
        </div>
        <div class="col-md-12 col-lg-6 speaker-card">
          <img src="/assets/images/sundar.jpeg" class="img-fluid" alt="sundar pichai">
          <div class="container speaker-decription">
            <h2>Sundar Pichai</h2>
            <h6>CEO of google & alpahbet</h6>
            <p>joined google in 2012 after larry left ..</p>
          </div>
        </div>
        <div class="col-md-12 col-lg-6 speaker-card">
          <img src="/assets/images/sundar.jpeg" class="img-fluid" alt="sundar pichai">
          <div class="container speaker-decription">
            <h2>Sundar Pichai</h2>
            <h6>CEO of google & alpahbet</h6>
            <p>joined google in 2012 after larry left ..</p>
          </div>>
        </div>
      </div>
    </div>
`;

document.getElementById('speakers').innerHTML = template;