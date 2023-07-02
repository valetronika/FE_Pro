const usersContainer = document.querySelector(".users_container");

const urlPosts = `https://api.slingacademy.com/v1/sample-data/blog-posts`;
const urlUsers = `https://api.slingacademy.com/v1/sample-data/users`;

function usersData(url) {
    fetch(url)
        .then((res) => res.json())
        .then((data) => renderUser(data.users));
    // .then((data)=> console.log(data.users))
}
function commentData(url) {
    return fetch(url)
        .then((res) => res.json())
        .then((data) => {
            // const commentsData = data.blogs
            // return commentsData
            return data.blogs;
        });
}
// рендер карточек юзеров
function renderUser(data) {
    data.forEach((element) => {
        const userElem = document.createElement("div");
        const nameElem = document.createElement("p");
        const lastnameElem = document.createElement("p");
        const emailElem = document.createElement("a");
        const jomElem = document.createElement("p");

        nameElem.innerText = `Name: ${element.first_name}`;
        lastnameElem.innerText = `Last name: ${element.last_name}`;
        emailElem.innerText = `Email: ${element.email}`;
        jomElem.innerText = `Job: ${element.job}`;

        emailElem.href = `mailto:${element.email}`;

        userElem.classList.add("user_card");

        userElem.append(nameElem, lastnameElem, emailElem, jomElem);
        usersContainer.append(userElem);

        userElem.addEventListener("click", () => {
            modal(element.id, element.first_name);
        });

        // необязательный элемент, окрашивает в зависимости от наличия комментов
        userElem.addEventListener("mouseenter", () => {
            checkComments(element.id).then((commentsCounter) => {
                if (commentsCounter > 0) {
                    userElem.classList.add("comment_available");
                } else {
                    userElem.classList.add("comment_not_available");
                }
            });
        });
        userElem.addEventListener("mouseleave", () => {
            if (userElem.classList.contains("comment_available")) {
                userElem.classList.remove("comment_available");
            } else if (userElem.classList.contains("comment_available")) {
                userElem.classList.remove("comment_not_available");
            }
            userElem.classList.add("mouseout");
        });
    });
}
function checkComments(user_id) {
    return getComments(user_id).then((comments) => {
        return comments.length;
    });
}
function getComments(user_id) {
    return commentData(urlPosts).then((comments) => {
        return comments.filter((comment) => comment.user_id == user_id);
    });
}
function modal(user_id, user_name) {
    getComments(user_id).then((comments_by_user) =>
        renderComment(comments_by_user, user_name)
    );
}
// рендер комментариев
function renderComment(comments_arr, user_name) {
    const div_comment_wrapper = document.createElement("div");
    const div_comment_modal = document.createElement("div");
    const autorElement = document.createElement("h2");

    div_comment_wrapper.classList.add("div_comment_wrapper");
    div_comment_modal.classList.add("div_comment_modal");

// проверяю есть ли комменты, если да то рендерю содержимое
    if (comments_arr.length > 0) {
        let count = 1;
        comments_arr.forEach((comment) => {
            const commentContainer = document.createElement("div");
            const textContainer = document.createElement("div");
            const titleElement = document.createElement("h3");

            autorElement.innerText = `Комметарии ${user_name}:`;
            titleElement.innerText = `${count++})    ${comment.title}`;

            autorElement.classList.add("autor_name");
            commentContainer.classList.add("comment_content");
            textContainer.classList.add("text_content");

            textContainer.append(titleElement);
            commentContainer.append(textContainer);
            div_comment_modal.append(commentContainer);
        });
    } else {
        const warningEl = document.createElement("p");
        warningEl.innerText = `От ${user_name} комментариев пока нет ...`;
        div_comment_modal.classList.add("warning");
        div_comment_modal.append(warningEl);
    }
    div_comment_modal.prepend(autorElement);
    div_comment_wrapper.append(div_comment_modal);
    document.querySelector(".main_container").append(div_comment_wrapper);
    // delete modal

    div_comment_wrapper.addEventListener("click", (event) => {
        div_comment_wrapper.remove();
    });
    div_comment_modal.onclick = (event) => event.stopPropagation();
}


usersData(urlUsers);
