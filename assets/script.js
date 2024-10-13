const apps = [
    { name: "Dashboards Operacionais e de Gestão", icon: "chart-line", preview: "dashboard.png", status: "installed" },
    { name: "Estoque", icon: "boxes", preview: "estoque.jpg", status: "construction" },
    { name: "Controle de Qualidade", icon: "clipboard-check", preview: "qualidade.jpg", status: "available" },
    { name: "Monitoramento de Ativos Móveis", icon: "truck", preview: "ativos_moveis.jpg", status: "installed" },
    { name: "Gestão da Manutenção", icon: "tools", preview: "manutencao.jpg", status: "construction" },
    { name: "Agenda de Gestão e Operações", icon: "calendar-alt", preview: "agenda.png", status: "available" },
    { name: "Gestão de Energia", icon: "bolt", preview: "energia.png", status: "installed" },
    { name: "Conformidade de Segurança", icon: "hard-hat", preview: "seguranca.png", status: "available" },
];

const gallery = document.getElementById('appGallery');

apps.forEach(app => {
    const appIcon = document.createElement('div');
    appIcon.className = 'app-icon';
    appIcon.innerHTML = `
      <i class="fas fa-${app.icon} fa-4x main-icon ${app.status === 'available' ? 'watermark' : ''}"></i>
      <div class="app-name">
        ${app.name}
      </div>
      ${getStatusIcon(app.status)}
      <div class="preview">
        <img src="assets/resources/${app.preview}" alt="Pré-visualização de ${app.name}" width="300" height="200">
      </div>
    `;
    gallery.appendChild(appIcon);
});

function getStatusIcon(status) {
    switch (status) {
        case 'installed':
            return '<svg class="status-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#2ecc71" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>';
        case 'construction':
            return '<svg class="status-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="hourglass-half" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#f39c12" d="M360 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24 0 90.965 51.016 167.734 120.842 192C75.016 280.266 24 357.035 24 448c-13.255 0-24 10.745-24 24v16c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24 0-90.965-51.016-167.734-120.842-192C308.984 231.734 360 154.965 360 64c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24zm-75.078 384H99.08c17.059-46.797 52.096-80 92.92-80 40.821 0 75.862 33.196 92.922 80zm0-256H99.08C82.021 81.203 46.984 48 6.16 48h371.679c-40.823 0-75.86 33.196-92.917 80z"></path></svg>';
        default:
            return '';
    }
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

function showPreview(event) {
    const preview = event.currentTarget.querySelector('.preview');
    preview.style.opacity = '1';
}

function hidePreview(event) {
    const preview = event.currentTarget.querySelector('.preview');
    preview.style.opacity = '0';
}

document.querySelectorAll('.app-icon').forEach(icon => {
    icon.addEventListener('mouseenter', showPreview);
    icon.addEventListener('mouseleave', hidePreview);
});