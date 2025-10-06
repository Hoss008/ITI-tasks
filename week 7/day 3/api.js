async function fetchUsersAndPosts() {
  try {
    const userRes = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await userRes.json(); //we transforemd this into json and stored it in users

    const ol = document.createElement('ol');

    for (const user of users) {
      const li = document.createElement('li');
      li.textContent = `${user.name} `;

      // Fetch posts for this useer
      const postRes = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`);
      const posts = await postRes.json();

      const ul = document.createElement('ul');
      posts.forEach(post => {
        const postLi = document.createElement('li');
        postLi.textContent = `${post.title}`;
        ul.appendChild(postLi);
      });

      li.appendChild(ul);
      ol.appendChild(li);
    }
    document.body.appendChild(ol);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchUsersAndPosts();

