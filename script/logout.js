const logoutUrl = "https://go-wash-api.onrender.com/api/auth/logout";

async function logout_usuario() {
    try {
        const token = JSON.parse(localStorage.getItem("user")).access_token;

        const response = await fetch(logoutUrl, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        });

        if (response.ok) {
            alert("Logout realizado com sucesso!");
            localStorage.removeItem("user");
            window.location.href = "../index.html";
        } else {
            const errorData = await response.json();
            alert(`Erro ao deslogar: ${errorData.message || response.status}`);
        }
    } catch (error) {
        console.error("Erro:", error);
        alert("Erro ao realizar o logout.");
    }
}

document.getElementById("logout-btn").addEventListener("click", logout_usuario);
