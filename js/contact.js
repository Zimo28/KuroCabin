document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if(!name || !email || !message){
        alert("Please fill all fields!");
        return;
    }

    const subject = encodeURIComponent(`Contact Form Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    window.location.href = `mailto:KuroCabin026@gmail.com?subject=${subject}&body=${body}`;
});