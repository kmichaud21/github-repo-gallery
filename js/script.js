const overview = document.querySelector(".overview");
const username = "kmichaud21";

const getData = async function () {
    const userData = await fetch(`https://api.github.com/users/${username}`);
    const Data = await userData.json();
    displayUserInfo(data);
};

getData();

const displayUserInfo = function (data) {
    const div = document.createElement("div");
    div.classList.add("user-info");
    div.innerHTML = `
      <figure>
        <img alt="user avatar" src=${data.avatar_url} />
      </figure>
      <div>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Bio:</strong> ${data.bio}</p>
        <p><strong>Location:</strong> ${data.location}</p>
        <p><strong>Number of public repos:</strong> ${data.public_repos}</p>
      </div>
    `;
    overview.append(div);
  };
