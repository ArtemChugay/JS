
// Реализуйте функционал:
//
//       - image-gallery есть изначально в HTML-разметке как контейнер для компонента.
//
//       - fullview содержит в себе увеличенную версию выбранного изображения из preview, и
//         создается динамически при загрузке страницы.
//
//       - preview это список маленьких изображений, обратите внимание на атрибут data-fullview,
//         он содержит ссылку на большое изображение. preview и его элементы, также создаются
//         динамически, при загрузке страницы.
//
//       - При клике в элемент preview, необходимо подменить src тега img внутри fullview
//         на url из data-атрибута выбраного элемента.
//
//       - По умолчанию, при загрузке страницы, активным должен быть первый элемент preview.
//
//       - Изображений может быть произвольное количество.
//
//       - Используйте делегирование для элементов preview.
//
//       - При клике, выбраный элемент из preview должен получать произвольный эффект выделения.
//
//       - CSS-оформление и имена классов на свой вкус.

// <div class="image-gallery js-image-gallery">
//       <div class="fullview">
//         <!-- Если выбран первый элемент из preview -->
//         <img src="img/fullview-1.jpeg" alt="alt text 1">
//       </div>
//       <!-- li будет столько, сколько объектов в массиве картинок. Эти 3 для примера -->
//       <ul class="preview">
//         <li><img src="img/preview-1.jpeg" data-fullview="img/fullview-1.jpeg" alt="alt text 1"></li>
//         <li><img src="img/preview-2.jpeg" data-fullview="img/fullview-2.jpeg" alt="alt text 2"></li>
//         <li><img src="img/preview-3.jpeg" data-fullview="img/fullview-3.jpeg" alt="alt text 3"></li>
//       </ul>
//     </div>



const galleryItems = [
  { preview: 'img/preview-1.jpeg', fullview: 'img/fullview-1.jpeg', alt: "alt text 1" },
  { preview: 'img/preview-2.jpeg', fullview: 'img/fullview-2.jpeg', alt: "alt text 2" },
  { preview: 'img/preview-3.jpeg', fullview: 'img/fullview-3.jpeg', alt: "alt text 3" },
  { preview: 'img/preview-4.jpeg', fullview: 'img/fullview-4.jpeg', alt: "alt text 4" },
  { preview: 'img/preview-5.jpeg', fullview: 'img/fullview-5.jpeg', alt: "alt text 5" },
  // { preview: 'img/preview-6.jpeg', fullview: 'img/fullview-6.jpeg', alt: "alt text 6" },
];

const gallery = document.querySelector('.image-gallery');

const fullview1 = document.createElement('div');
fullview1.classList.add('fullview');

const img = document.createElement('img');
img.setAttribute('src', galleryItems[0]["fullview"])
fullview1.append(img);

const preview1 = document.createElement('ul')
preview1.classList.add('preview');

gallery.append(fullview1, preview1);

const el = [];
galleryItems.forEach(item => {
  el.push(createPreview1(item));
});

preview1.append(...el);

  function createPreview1({preview, fullview, alt}) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.setAttribute("src", preview);
    img.setAttribute("data-fullview", fullview);
    img.setAttribute("alt", alt);
    li.append(img);
  return li;
}

const galleryChange = document.querySelector('.js-image-gallery');
const ul = galleryChange.querySelector('.preview');
const previewImg = ul.querySelectorAll('img');

galleryChange.addEventListener('click', handlerGalleryChange);

function handlerGalleryChange({target}) {
  const previewImgChange = target.nodeName;
  const fullview = document.querySelector('.fullview');
  const fullviewChahgeSize = fullview.querySelector('img')
  if (previewImgChange !== 'IMG') return;
  previewImg.forEach(img =>{
    if(img !== target){
      img.classList.remove('preview-img-active');
    }else {
        fullviewChahgeSize.setAttribute('src', img.getAttribute('data-fullview'))
        img.classList.add('preview-img-active');
    }
  })
}
