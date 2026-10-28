// Theme Toggle Functionality
const themeToggleBtn = document.getElementById('themeToggleBtn');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
});
// --- House Modal Interaction Data & Logic ---
const housesData = {
    zafar: {
        title: "Zafar House",
        color: "Yellow",
        badgeClass: "badge-yellow",
        motto: '"Excellence & Valor"',
        image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=600&q=80",
        desc: "Zafar House represents bright intellect, enthusiasm, and teamwork. Named after historic courage, students of Zafar House excel in academics, sports, and cultural events.",
        master: "Prof. Ahmed Raza",
        captain: "Ali Zafar"
    },
    jinnah: {
        title: "Jinnah House",
        color: "Green",
        badgeClass: "badge-green",
        motto: '"Unity, Faith & Discipline"',
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80",
        desc: "Jinnah House stands for leadership, unity, and discipline, inspired by the Father of the Nation, Quaid-e-Azam Muhammad Ali Jinnah. Members strive for integrity and excellence.",
        master: "Mr. Muhammad Usman",
        captain: "Hamza Jinnah"
    },
    iqbal: {
        title: "Iqbal House",
        color: "Red",
        badgeClass: "badge-red",
        motto: '"Vision & Leadership"',
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80",
        desc: "Named after Allama Muhammad Iqbal, this house embodies high thinking, creative expression, and intellectual pursuit. Iqbal House members lead in debates and literary events.",
        master: "Dr. Tariq Mahmood",
        captain: "Bilal Iqbal"
    },
    tipu: {
        title: "Tipu House",
        color: "Brown",
        badgeClass: "badge-brown",
        motto: '"Courage & Honor"',
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
        desc: "Inspired by Tipu Sultan, Tipu House symbolizes bravery, determination, and resilience. Members are known for their performance in sports and athletics.",
        master: "Mr. Shahbaz Khan",
        captain: "Usman Tipu"
    }
};

const modal = document.getElementById('houseModal');

function openModal(houseKey) {
    const data = housesData[houseKey];
    if (!data || !modal) return;

    document.getElementById('modalImg').src = data.image;
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalMotto').textContent = data.motto;
    document.getElementById('modalDesc').textContent = data.desc;
    document.getElementById('modalMaster').textContent = data.master;
    document.getElementById('modalCaptain').textContent = data.captain;

    const badge = document.getElementById('modalBadge');
    badge.textContent = data.color;
    badge.className = `modal-badge ${data.badgeClass}`;

    modal.classList.add('active');
}

function closeModal() {
    if (modal) {
        modal.classList.remove('active');
    }
}

if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}