export function getImageUrl(imageName) {
  return new URL(`../assets/movie-covers/${imageName}`, import.meta.url).href;
}
