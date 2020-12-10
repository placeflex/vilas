import $ from 'jquery';
import getData from './getData';

let loadMoreWrapper = $('.js-wrapper-more');
let loadMoreBtn = $('.js-load-more');
let projectWrapper = $('.project-wrapper');
let loaderImgSrc = './images/icon/loader.svg';
let loaderImg = $(`<img src=${loaderImgSrc} />`);
let indexShowStart = 0;
let indexShowEnd = 0;

let showLoader = () => {
  loadMoreBtn.hide();
  loadMoreWrapper.append(loaderImg);
};

let removeLoader = () => {
  loaderImg.remove();
  loadMoreBtn.show();
};

const getProject = () => {
  loadMoreBtn.on('click', function () {
    // change the argument to display cards
    getProjectList(2);
  });

  const getProjectList = (countShowElem) => {
    getData('db.json')
      .then((data) => {
        indexShowEnd += countShowElem;
        let projectList = data.project.slice(indexShowStart, indexShowEnd);
        indexShowStart += countShowElem;
        return projectList;
      })
      .then((projectList) => {
        showProjectCards(projectList);
      })
      .catch((err) => {
        throw new Error(`status ${err.status} statusText: ${err.statusText}`);
      });
  };

  let showProjectCards = (projectList) => {
    showLoader();
    if (projectList.length === 0) {
      loadMoreBtn.hide();
      loaderImg.remove();
    }
    $(projectList).each(function () {
      let options = $(this)[0];
      setTimeout(() => {
        renderProjectCard(options);
        removeLoader();
      }, 2000);
    });
  };

  const renderProjectCard = ({
    img,
    altimg,
    title = 'test',
    linkView = '#',
    theme,
    bigCard = false,
  }) => {
    let projectItemWrapper = $('<article class="project-item"></article>');
    if (bigCard) {
      projectItemWrapper.addClass('project-item_big');
    }
    let projectInnerHtml = `
            <div class="project-item__picture">
              <img src="${img}" alt="${altimg}" />
            </div>
    
            <div class="project-item__overlay">
              <div class="project-item__link">
                <a href="${linkView}">
                  <img src="images/icon/eye.png" alt="look" />
                </a>
                <a href="#">
                  <img src="images/icon/heart.png" alt="like" />
                </a>
              </div>
              <div class="project-item__footer">
                <h3 class="h3">${title}</h3>
                <span class="project-item__theme">${theme}</span>
              </div>
            </div>
        `;
    projectItemWrapper.html(projectInnerHtml);
    projectWrapper.append(projectItemWrapper);
  };
};

export default getProject;
