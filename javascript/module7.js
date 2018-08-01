

  const posts = [
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-1.com'
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-2.com'
  },
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-3.com'
  }
  
];
  const el = [];
  posts.forEach(post => {
    el.push(createPostCard(post));
  });

  console.log(el);

  const body = document.body;
  body.prepend(...el);
  console.log(body);

  function createPostCard({img, title, text, link}) {
    const post = document.createElement('div');
    post.classList.add('post');

    // console.log(post);
    const postImg = document.createElement('img');
    postImg.classList.add('post__image');
    postImg.setAttribute("src", img);
    postImg.setAttribute("alt", "post image");
    // console.log(postImg);

    const titlePost = document.createElement('h2');
    titlePost.classList.add('post__title');
    titlePost.textContent = title;
    // console.log(title);

    const textPost = document.createElement('p');
    textPost.classList.add('post__text');
    textPost.textContent = text;
    // console.log(text);

    const botton = document.createElement('a');
    botton.classList.add('button');
    botton.setAttribute("href", link);
    botton.textContent = 'Read more';
    // console.log(botton);

    post.append(postImg, titlePost, textPost, botton);

      return post;
  }
