async function getstuff() {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const bigData = await data.json();

    const list = document.createElement("ol");
    for (const user of bigData) {
      const li = document.createElement("li");
      li.textContent = `${user.name} `;
    }

    const postRes = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`);
      const posts = await postRes.json();

  } catch (error) {}
}
