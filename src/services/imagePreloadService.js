export const HOME_IMAGE = 'img/clouds.jpg';
export const STORY_IMAGE = 'img/stairs.jpg';
export const SKILLS_IMAGE = 'img/city.jpg';
export const PROJECTS_IMAGE = 'img/abstract.jpg';
export const CONTACT_IMAGE = 'img/plane.jpg';
export const BABY_IMAGE = 'img/baby.jpg';


const IMAGE_URLS = [
    HOME_IMAGE,
    STORY_IMAGE,
    SKILLS_IMAGE,
    PROJECTS_IMAGE,
    CONTACT_IMAGE,
    BABY_IMAGE,
];

IMAGE_URLS.forEach(url => {
    const image = new Image();
    image.src = url;
});
