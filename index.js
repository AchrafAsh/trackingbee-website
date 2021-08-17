var form = document.querySelector("form");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("status");
    var data = new FormData(event.target);

    await fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            Accept: "application/json",
        },
    })
        .then((response) => {
            status.textContent = "Thanks, you're in!";
            status.hidden = false;
            form.reset();
        })
        .catch((error) => {
            status.textContent =
                "Oops! Something went wrong. Can you try again please?";
            status.hidden = false;
        });
}

form.addEventListener("submit", handleSubmit);
