// 'Задача 1:
// Создайте в HTML 3 картинки без атрибутов. Используя следующий массив, задайте источник и альтернативный текст для каждой картинки.
// [
// { alt: "lion",
//   src: "https://www.gesser-images.com/wp-content/uploads/2016/08/Lion-046-_DS30374-300x300.jpg"
// },
// { alt: "elephant",
//   src: "https://globalelephants.org/wp-content/uploads/2014/05/Guida-Blog-Post-424-300x300.jpg"
// },
// { alt: "dog",
//   src: "https://dickmanroadvet.com/wp-content/uploads/2016/07/dvm2-23-300x300.jpg"
// },
// ]'
const links = [
{
    alt: "lion",
  src: "https://www.gesser-images.com/wp-content/uploads/2016/08/Lion-046-_DS30374-300x300.jpg"
},
{
    alt: "elephant",
  src: "https://globalelephants.org/wp-content/uploads/2014/05/Guida-Blog-Post-424-300x300.jpg"
},
{
    alt: "dog",
  src: "https://dickmanroadvet.com/wp-content/uploads/2016/07/dvm2-23-300x300.jpg"
},
]
const imageElements = document.getElementsByTagName("img");

for (let i = 0; i < imageElements.length; i++) {
  imageElements[i].setAttribute("alt", links[i].alt);
  imageElements[i].setAttribute("src", links[i].src);
}